import { Link } from 'react-router-dom'

function SDLoadBalancer() {
  return (
    <article className="blog-article">
      <p>
        A <strong>Load Balancer</strong> sits between clients and web servers, distributing incoming traffic across multiple servers evenly. Clients never talk to servers directly — they communicate with the LB via a public IP.
      </p>

      <h3>How It Works</h3>
      <ul>
        <li>Clients connect to the Load Balancer via <strong>public IP</strong></li>
        <li>LB communicates with servers via <strong>private IPs</strong> — servers are hidden from the internet</li>
        <li>Servers communicate with each other via private IPs</li>
        <li>LB performs <strong>health checks</strong> and routes traffic only to healthy servers</li>
      </ul>

      <div className="blog-diagram">
        <pre>{`┌──────────────┐
│    Users     │
│(Browser/Mob) │
└──────┬───────┘
       │
       │  Public IP (e.g., 200.1.1.1)
       ▼
┌──────────────────┐
│  LOAD BALANCER   │
│                  │
│  • Distributes   │
│    traffic       │
│  • Health checks │
│  • Failover      │
└───────┬──────────┘
        │
        │  Private IPs
        │
   ┌────┴─────────────────┐
   │                      │
   ▼                      ▼
┌──────────┐       ┌──────────┐
│ Server 1 │◄─────►│ Server 2 │
│10.0.0.1  │Private│10.0.0.2  │
│          │  IP   │          │
└──────────┘       └──────────┘`}</pre>
      </div>

      <h3>Problems Solved</h3>
      <table className="blog-table">
        <thead><tr><th>Problem</th><th>Solution</th></tr></thead>
        <tbody>
          <tr><td>Failover</td><td>Server 1 dies → LB redirects all traffic to Server 2</td></tr>
          <tr><td>Availability</td><td>System stays online as long as one server is healthy</td></tr>
          <tr><td>Scalability</td><td>Traffic spike → add more servers, LB adapts automatically</td></tr>
          <tr><td>Security</td><td>Servers have private IPs only — not directly accessible</td></tr>
        </tbody>
      </table>

      <h3>Failover Scenario</h3>
      <div className="blog-diagram">
        <pre>{`NORMAL:                          SERVER 1 FAILS:

Users ──► LB ──┬──► Server 1    Users ──► LB ──┬──► Server 1 ❌ (dead)
               │                                │
               └──► Server 2                    └──► Server 2 ✅ (all traffic)


TRAFFIC SPIKE (add servers):

Users ──► LB ──┬──► Server 1
               ├──► Server 2
               ├──► Server 3  (new)
               └──► Server 4  (new)`}</pre>
      </div>

      <h3>Network Architecture</h3>
      <div className="blog-diagram">
        <pre>{`┌─────────────────────────────────────────────────────┐
│   PUBLIC NETWORK                                    │
│                                                     │
│   ┌──────────┐         ┌────────────────┐          │
│   │  Users   │────────►│ Load Balancer  │          │
│   └──────────┘  Public │ (Public IP)    │          │
│                   IP   └───────┬────────┘          │
├────────────────────────────────┼───────────────────┤
│   PRIVATE NETWORK              │ Private IPs       │
│                                │                   │
│              ┌─────────────────┼──────────────┐    │
│              ▼                 ▼              ▼    │
│        ┌──────────┐    ┌──────────┐   ┌─────────┐│
│        │ Server 1 │◄──►│ Server 2 │◄─►│Server 3 ││
│        │ 10.0.0.1 │    │ 10.0.0.2 │   │10.0.0.3 ││
│        └──────────┘    └──────────┘   └─────────┘│
└───────────────────────────────────────────────────┘`}</pre>
      </div>

      <div className="blog-callout">
        <p><strong>Key takeaway:</strong> The load balancer is the single entry point for all client traffic. Clients never know which server handles their request. This gives you failover, even distribution, and the ability to add/remove servers without downtime.</p>
      </div>

      <h3>Series Navigation</h3>
      <p>
        <Link to="/blog/sd-scaling">← Part 3: Vertical vs Horizontal Scaling</Link>
      </p>
      <p>
        <Link to="/blog/sd-db-replication">Part 5: Database Replication →</Link>
      </p>
    </article>
  )
}

export default SDLoadBalancer
