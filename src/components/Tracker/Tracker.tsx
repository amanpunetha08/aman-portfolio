import { useState, useEffect } from 'react'
import { trackerData } from '../../data/trackerData'
import type { Status } from '../../data/trackerData'
import './Tracker.css'

const STATUS_KEY = 'tracker-status'
const DATE_KEY = 'tracker-start-date'

function getStored<T>(key: string, fallback: T): T {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback }
  catch { return fallback }
}

function toISO(d: Date) { return d.toISOString().split('T')[0] }

function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })
}

function addDays(d: Date, n: number) {
  const r = new Date(d); r.setDate(r.getDate() + n); return r
}

function generateDates(start: Date, count: number): Date[] {
  const dates: Date[] = []
  let current = new Date(start)
  for (let i = 0; i < count; i++) {
    while (current.getDay() === 0 || current.getDay() === 6) current = addDays(current, 1)
    dates.push(new Date(current))
    current = addDays(current, i % 3 === 0 ? 3 : 2)
  }
  return dates
}

function Tracker() {
  const [statuses, setStatuses] = useState<Record<number, Status>>(() => getStored(STATUS_KEY, {}))
  const [startDate, setStartDate] = useState<string>(() => getStored(DATE_KEY, toISO(new Date())))
  const [viewingPdf, setViewingPdf] = useState<string | null>(null)

  useEffect(() => { localStorage.setItem(STATUS_KEY, JSON.stringify(statuses)) }, [statuses])
  useEffect(() => { localStorage.setItem(DATE_KEY, JSON.stringify(startDate)) }, [startDate])

  const scheduledDates = generateDates(new Date(startDate), trackerData.length)

  const cycleStatus = (idx: number) => {
    const current = statuses[idx] ?? getAutoStatus(idx)
    const next: Status = current === 'Scheduled' ? 'Completed' : current === 'Completed' ? 'Overdue' : 'Scheduled'
    setStatuses(prev => ({ ...prev, [idx]: next }))
  }

  function getAutoStatus(idx: number): Status {
    const today = new Date(); today.setHours(0, 0, 0, 0)
    return scheduledDates[idx] < today ? 'Overdue' : 'Scheduled'
  }

  const getStatus = (idx: number) => statuses[idx] ?? getAutoStatus(idx)

  const total = trackerData.length
  const completed = trackerData.filter((_, i) => getStatus(i) === 'Completed').length
  const left = total - completed
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <>
      <h2 className="section-title">System Design Tracker</h2>
      <p className="section-subtitle">Click topic to read · Click status to toggle</p>

      <div className="tracker-layout">
        <div className="tracker-table-wrap">
          <table className="tracker-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Topic</th>
                <th>Part</th>
                <th>Priority</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {trackerData.map((t, i) => {
                const status = getStatus(i)
                return (
                  <tr key={i} className={`tracker-row status-${status.toLowerCase()}`}>
                    <td>{i + 1}</td>
                    <td><span className="topic-link" onClick={() => setViewingPdf(t.pdf)}>{t.topic}</span></td>
                    <td>{t.part || '—'}</td>
                    <td><span className={`badge priority-${t.priority.toLowerCase()}`}>{t.priority}</span></td>
                    <td><span className={`badge diff-${t.difficulty.toLowerCase()}`}>{t.difficulty}</span></td>
                    <td>
                      <span className={`badge status-badge-${status.toLowerCase()} clickable`} onClick={() => cycleStatus(i)}>
                        {status}
                      </span>
                    </td>
                    <td>{formatDate(scheduledDates[i])}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="tracker-summary">
          <div className="summary-card">
            <span className="summary-value">{total}</span>
            <span className="summary-label">Total Topics</span>
          </div>
          <div className="summary-card">
            <span className="summary-value completed-val">{completed}</span>
            <span className="summary-label">Completed</span>
          </div>
          <div className="summary-card">
            <span className="summary-value left-val">{left}</span>
            <span className="summary-label">Left</span>
          </div>
          <div className="summary-card">
            <span className="summary-value pct-val">{pct}%</span>
            <span className="summary-label">% Done</span>
          </div>
          <div className="summary-card summary-date">
            <span className="summary-label">Start Date</span>
            <input
              type="date"
              className="date-input"
              value={startDate}
              onChange={e => { setStartDate(e.target.value); setStatuses({}) }}
            />
          </div>
        </div>
      </div>

      {viewingPdf && (
        <div className="pdf-overlay" onClick={() => setViewingPdf(null)}>
          <div className="pdf-modal" onClick={e => e.stopPropagation()}>
            <button className="pdf-close" onClick={() => setViewingPdf(null)}>✕</button>
            <iframe src={viewingPdf} className="pdf-iframe" title="PDF Viewer" />
          </div>
        </div>
      )}
    </>
  )
}

export default Tracker
