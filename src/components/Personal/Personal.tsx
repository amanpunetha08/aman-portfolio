import { useState } from 'react'
import Tracker from '../Tracker/Tracker'
import './Personal.css'

const AUTH_KEY = 'personal-auth'
const PASSCODE = 'aman2026'

function Personal() {
  const [authed, setAuthed] = useState(() => localStorage.getItem(AUTH_KEY) === 'true')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSCODE) {
      localStorage.setItem(AUTH_KEY, 'true')
      setAuthed(true)
    } else {
      setError(true)
    }
  }

  const logout = () => {
    localStorage.removeItem(AUTH_KEY)
    setAuthed(false)
  }

  if (!authed) {
    return (
      <section className="personal-section">
        <div className="container personal-gate">
          <div className="gate-card">
            <h2 className="section-title">🔒 Personal Content</h2>
            <p className="gate-desc">This area is private. Enter passcode to continue.</p>
            <form className="gate-form" onSubmit={handleLogin}>
              <input
                type="password"
                placeholder="Passcode"
                value={input}
                onChange={e => { setInput(e.target.value); setError(false) }}
                className={`gate-input ${error ? 'gate-error' : ''}`}
                autoFocus
              />
              <button type="submit" className="gate-btn">Unlock</button>
            </form>
            {error && <p className="gate-err">Incorrect passcode</p>}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="personal-section">
      <div className="container">
        <div className="personal-header">
          <h2 className="section-title">Personal Content</h2>
          <button className="logout-btn" onClick={logout}>Lock 🔒</button>
        </div>
        <Tracker />
      </div>
    </section>
  )
}

export default Personal
