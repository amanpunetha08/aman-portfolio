import { Link } from 'react-router-dom'

function SDDbReplication() {
  return (
    <article className="blog-article">
      <p>
        Database replication follows a <strong>Master-Slave</strong> relationship. The master handles all write operations, while slaves handle read operations. Data written to master is replicated to all slaves.
      </p>

      <h3>How It Works</h3>
      <ul>
        <li><strong>Master DB</strong> — handles all writes (INSERT, UPDATE, DELETE)</li>
        <li><strong>Slave DBs</strong> — handle all reads (SELECT queries)</li>
        <li>Most apps have a much higher read-to-write ratio → add more slaves</li>
        <li>All operations happen in <strong>parallel</strong> — reads don't block writes</li>
      </ul>

      <div className="blog-diagram">
        <pre>{`                    ┌───────────────┐
     Write ────────►│   MASTER DB   │
     (INSERT,       │               │
      UPDATE,       │  Writes Only  │
      DELETE)       └───────┬───────┘
                            │
                            │ Replication
                    ┌───────┼───────────────┐
                    │       │               │
                    ▼       ▼               ▼
             ┌──────────┐ ┌──────────┐ ┌──────────┐
     Read ──►│ SLAVE 1  │ │ SLAVE 2  │ │ SLAVE 3  │
     (SELECT)│          │ │          │ │          │
             │Reads Only│ │Reads Only│ │Reads Only│
             └──────────┘ └──────────┘ └──────────┘`}</pre>
      </div>

      <h3>Three Key Advantages</h3>
      <table className="blog-table">
        <thead><tr><th>Advantage</th><th>Explanation</th></tr></thead>
        <tbody>
          <tr><td>Performance</td><td>Writes go to master, reads go to slaves — all in parallel</td></tr>
          <tr><td>Reliability</td><td>Data replicated across multiple locations — survives disasters</td></tr>
          <tr><td>High Availability</td><td>If one DB goes offline, others continue operating</td></tr>
        </tbody>
      </table>

      <h3>Failover: Slave Goes Offline</h3>
      <div className="blog-diagram">
        <pre>{`NORMAL:                              SLAVE 2 FAILS:

Read ──► Slave 1                     Read ──► Slave 1
Read ──► Slave 2                     Read ──► Master (temporary) ⚠️
Read ──► Slave 3                     Read ──► Slave 3

                                     New Slave 2 spins up → syncs → normal`}</pre>
      </div>

      <h3>Failover: Master Goes Offline</h3>
      <div className="blog-diagram">
        <pre>{`NORMAL:                              MASTER FAILS:

Write ──► Master                     Write ──► Slave 1 (promoted) ⚠️
  │                                    │
  │ replicates to                      │ replicates to
  ▼                                    ▼
Slave 1, 2, 3                        Slave 2, 3 + New Slave

⚠️ Risk: Promoted slave may have stale data (replication lag)
   → Recovery scripts to fill missing data
   → Or use multi-master setup`}</pre>
      </div>

      <div className="blog-callout">
        <p><strong>Production warning:</strong> Promoting a slave to master is risky — data might not be fully up-to-date due to replication lag. Missing data can be recovered via scripts, but multi-master setups exist to reduce this risk.</p>
      </div>

      <h3>Full System So Far</h3>
      <div className="blog-diagram">
        <pre>{`┌──────────┐
│  Users   │
└────┬─────┘
     ▼
┌──────────────┐
│Load Balancer │
└──────┬───────┘
  ┌────┴────┐
  ▼         ▼
┌─────┐  ┌─────┐
│Web 1│  │Web 2│        ◄── Web Tier (horizontal)
└──┬──┘  └──┬──┘
   └────┬────┘
        │
   ┌────┴────────────────────────┐
   ▼ (writes)                    ▼ (reads)
┌──────────┐    replication   ┌────────────────────┐
│  MASTER  │ ────────────────►│ SLAVE 1 │ SLAVE 2 │
│    DB    │                  └────────────────────┘
└──────────┘`}</pre>
      </div>

      <h3>Series Navigation</h3>
      <p>
        <Link to="/blog/sd-load-balancer">← Part 4: Load Balancer</Link>
      </p>
      <p>
        <Link to="/blog/sd-cache">Part 6: Cache Tier →</Link>
      </p>
    </article>
  )
}

export default SDDbReplication
