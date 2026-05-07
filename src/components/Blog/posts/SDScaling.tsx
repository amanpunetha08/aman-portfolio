import { Link } from 'react-router-dom'

function SDScaling() {
  return (
    <article className="blog-article">
      <p>
        As traffic grows, you need to scale. There are two fundamental approaches: <strong>vertical scaling</strong> (scale up) and <strong>horizontal scaling</strong> (scale out).
      </p>

      <h3>Vertical Scaling (Scale Up)</h3>
      <p>
        Add more <strong>power</strong> to your existing server — more CPU, RAM, faster disks. Simple approach with no code changes needed. Best when traffic is low.
      </p>
      <ul>
        <li>Hardware has a hard ceiling — you can't add unlimited CPU/RAM</li>
        <li>No failover or redundancy — single point of failure</li>
        <li>If that one server dies, the entire system goes down</li>
      </ul>

      <h3>Horizontal Scaling (Scale Out)</h3>
      <p>
        Add <strong>more servers</strong> to your pool. Better for large-scale applications. Provides redundancy — if one server fails, others handle the traffic.
      </p>
      <ul>
        <li>Virtually unlimited scaling — just add more machines</li>
        <li>Built-in failover and redundancy</li>
        <li>Requires a load balancer to distribute requests</li>
      </ul>

      <div className="blog-diagram">
        <pre>{`┌───────────────────────────────┬─────────────────────────────────┐
│   VERTICAL (Scale Up)         │   HORIZONTAL (Scale Out)        │
│                               │                                 │
│   ┌───────────────────┐      │   ┌────────┐ ┌────────┐        │
│   │                   │      │   │Server 1│ │Server 2│        │
│   │   ████████████    │      │   └────────┘ └────────┘        │
│   │   ████████████    │      │   ┌────────┐ ┌────────┐        │
│   │   BIG SERVER      │      │   │Server 3│ │Server 4│        │
│   │   (more CPU/RAM)  │      │   └────────┘ └────────┘        │
│   └───────────────────┘      │                                 │
│                               │   + Add more as needed          │
│   ⚠️ Hard limit exists        │   ✅ No theoretical limit       │
│   ⚠️ Single point of failure  │   ✅ Redundancy & failover      │
│   ✅ Simple, no code change   │   ⚠️ Needs load balancer        │
└───────────────────────────────┴─────────────────────────────────┘`}</pre>
      </div>

      <h3>The Problem with Direct Connection</h3>
      <p>
        If users connect directly to one web server: server goes offline → <strong>complete unavailability</strong>. Too many users connect simultaneously → <strong>slow responses</strong>. No way to distribute the load.
      </p>

      <div className="blog-diagram">
        <pre>{`Direct Connection (breaks at scale)
────────────────────────────────────

User1 ──┐
User2 ──┼──► Single Server ──► ❌ Server dies = ALL users down
User3 ──┤                      ❌ Too many users = slow response
User4 ──┘

Horizontal + Load Balancer (solves it)
────────────────────────────────────────

User1 ──┐                  ┌──► Server 1 ✅
User2 ──┼──► Load ────────┼──► Server 2 ✅
User3 ──┤    Balancer      ├──► Server 3 ✅
User4 ──┘                  └──► Server 4 ✅

Server 2 dies? → Traffic goes to 1, 3, 4. No downtime!`}</pre>
      </div>

      <table className="blog-table">
        <thead><tr><th>Aspect</th><th>Vertical (Scale Up)</th><th>Horizontal (Scale Out)</th></tr></thead>
        <tbody>
          <tr><td>How</td><td>More CPU/RAM/Disk</td><td>More servers</td></tr>
          <tr><td>Limit</td><td>Hardware ceiling</td><td>Virtually unlimited</td></tr>
          <tr><td>Failover</td><td>❌ None</td><td>✅ Built-in</td></tr>
          <tr><td>Best for</td><td>Low traffic, early stage</td><td>Large-scale apps</td></tr>
          <tr><td>Cost curve</td><td>Exponential</td><td>Linear</td></tr>
        </tbody>
      </table>

      <div className="blog-callout">
        <p><strong>In practice:</strong> you often do both — scale up to a point, then scale out. Horizontal scaling + load balancer is the foundation for all large-scale systems.</p>
      </div>

      <h3>Series Navigation</h3>
      <p>
        <Link to="/blog/sd-database">← Part 2: Database Separation</Link>
      </p>
      <p>
        <Link to="/blog/sd-load-balancer">Part 4: Load Balancer →</Link>
      </p>
    </article>
  )
}

export default SDScaling
