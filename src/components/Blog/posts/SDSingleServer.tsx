import { Link } from 'react-router-dom'

function SDSingleServer() {
  return (
    <article className="blog-article">
      <p>
        In the simplest architecture, everything runs on a <strong>single server</strong> — the web application, database, cache, and all other components share one machine. This is the starting point before any scaling.
      </p>

      <h3>Request Flow</h3>
      <ol>
        <li>User types a domain name (e.g., <code>example.com</code>) into their browser or mobile app</li>
        <li>The request goes to a <strong>DNS server</strong>, which resolves the domain to an IP address</li>
        <li>The IP address is returned to the client</li>
        <li>The client sends <strong>HTTP requests</strong> directly to the web server at that IP</li>
        <li>The web server returns <strong>HTML pages</strong> (for browsers) or <strong>JSON responses</strong> (for mobile/APIs)</li>
      </ol>

      <div className="blog-diagram">
        <pre>{`┌──────────┐
│  Users   │
│(Browser/ │
│ Mobile)  │
└────┬─────┘
     │ 1. Domain lookup (example.com)
     ▼
┌──────────┐
│   DNS    │
│  Server  │
└────┬─────┘
     │ 2. Returns IP (e.g., 15.125.23.214)
     ▼
┌──────────┐
│  Users   │
└────┬─────┘
     │ 3. HTTP Request (to IP)
     ▼
┌─────────────────────────────────┐
│        Single Server            │
│  ┌───────────┐  ┌───────────┐  │
│  │  Web App  │  │   Cache   │  │
│  └───────────┘  └───────────┘  │
│  ┌───────────┐  ┌───────────┐  │
│  │ Database  │  │   Files   │  │
│  └───────────┘  └───────────┘  │
└────────────┬────────────────────┘
             │ 4. Response (HTML / JSON)
             ▼
┌──────────┐
│  Users   │
└──────────┘`}</pre>
      </div>

      <h3>Traffic Sources</h3>
      <p>
        Two main traffic sources hit the web server:
      </p>

      <p>
        <strong>Web Applications</strong> — use server-side languages (Java, Python, Node.js) for business logic and client-side languages (HTML, CSS, JavaScript) for presentation. The server returns rendered HTML.
      </p>
      <p>
        <strong>Mobile Applications</strong> — communicate via HTTP and consume <strong>JSON APIs</strong>. The mobile app handles its own rendering natively. JSON is preferred for its lightweight nature.
      </p>

      <div className="blog-diagram">
        <pre>{`   Web Application          Mobile Application
  ┌───────────────┐        ┌───────────────────┐
  │  Client Side  │        │   iOS / Android   │
  │  HTML/CSS/JS  │        │   Native UI       │
  └───────┬───────┘        └────────┬──────────┘
          │                         │
          │ HTTP (expects HTML)     │ HTTP (expects JSON)
          ▼                         ▼
┌─────────────────────────────────────────────────┐
│                 Web Server                       │
│   (Java / Python / Ruby / Node.js)              │
│                                                 │
│   • Business Logic    • Authentication          │
│   • Storage / DB      • API Endpoints           │
│                                                 │
│        ┌────────┐          ┌──────────┐         │
│        │  HTML  │          │   JSON   │         │
│        │Response│          │ Response │         │
│        └────────┘          └──────────┘         │
└─────────────────────────────────────────────────┘`}</pre>
      </div>

      <h3>Limitations</h3>
      <table className="blog-table">
        <thead><tr><th>Concern</th><th>Problem</th></tr></thead>
        <tbody>
          <tr><td>Availability</td><td>Single point of failure — server dies, everything dies</td></tr>
          <tr><td>Scalability</td><td>Bound by one machine's CPU, RAM, and disk</td></tr>
          <tr><td>Performance</td><td>DB + App compete for the same resources</td></tr>
          <tr><td>Security</td><td>Database exposed on the same network as web</td></tr>
        </tbody>
      </table>

      <div className="blog-callout">
        <p><strong>Key takeaway:</strong> A single server setup is the simplest starting point. It works for low traffic but has no redundancy — if the server goes down, the entire system goes down.</p>
      </div>

      <h3>Next in Series</h3>
      <p>
        <Link to="/blog/sd-database">Part 2: Database Separation & SQL vs NoSQL →</Link>
      </p>
    </article>
  )
}

export default SDSingleServer
