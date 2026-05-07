import { Link } from 'react-router-dom'

function SDDatabase() {
  return (
    <article className="blog-article">
      <p>
        As the user base grows, a single server can't handle everything. The solution is to <strong>separate the web tier from the data tier</strong> onto different servers, allowing each to scale independently.
      </p>

      <h3>Why Separate?</h3>
      <ul>
        <li><strong>Independent scaling</strong> — add web servers OR upgrade DB separately</li>
        <li><strong>Resource isolation</strong> — DB gets dedicated CPU/RAM for queries</li>
        <li><strong>Flexibility</strong> — choose different hardware for each tier</li>
        <li><strong>Security</strong> — DB not directly exposed to the internet</li>
      </ul>

      <div className="blog-diagram">
        <pre>{`BEFORE (Single Server)          AFTER (Separated)

┌──────────────────┐        ┌──────────────┐
│   One Server     │        │  Web Server  │
│                  │        │  (scales     │
│  Web App         │        │   horizontally)
│  Database        │───►    └──────┬───────┘
│  Cache           │               │
│  Files           │        ┌──────▼───────┐
└──────────────────┘        │  DB Server   │
                            │  (scales     │
                            │   independently)
                            └──────────────┘`}</pre>
      </div>

      <h3>Relational vs Non-Relational Databases</h3>
      <p>
        When choosing a database, there are two main categories. The choice depends on your system's functionality and requirements.
      </p>

      <h3>Relational Databases (SQL)</h3>
      <p>
        Store data in <strong>tables and rows</strong> with predefined schemas. Use SQL for querying. Support ACID transactions. Examples: MySQL, PostgreSQL, Oracle, SQL Server.
      </p>

      <h3>Non-Relational Databases (NoSQL)</h3>
      <p>
        Store data in flexible formats: key-value, document, graph, or column-based. No fixed schema. Designed for horizontal scaling. Examples: MongoDB, Redis, Cassandra, Neo4j.
      </p>

      <div className="blog-diagram">
        <pre>{`┌────────────────────────────┬────────────────────────────────┐
│   Relational (SQL)         │    Non-Relational (NoSQL)      │
│                            │                                │
│   Tables & Rows:           │    Flexible Formats:           │
│   ┌────┬───────┐           │    Key-Value:                  │
│   │ ID │ Name  │           │    { key: "user1",             │
│   ├────┼───────┤           │      value: {...} }            │
│   │ 1  │ Alice │           │                                │
│   │ 2  │ Bob   │           │    Document:                   │
│   └────┴───────┘           │    { name: "Alice",            │
│                            │      age: 30,                  │
│   MySQL, PostgreSQL        │      hobbies: [...] }          │
│   Oracle, SQL Server       │                                │
│                            │    MongoDB, Redis              │
│                            │    Cassandra, Neo4j            │
└────────────────────────────┴────────────────────────────────┘`}</pre>
      </div>

      <h3>When to Choose What</h3>
      <table className="blog-table">
        <thead><tr><th>Aspect</th><th>SQL</th><th>NoSQL</th></tr></thead>
        <tbody>
          <tr><td>Schema</td><td>Fixed, predefined</td><td>Flexible, dynamic</td></tr>
          <tr><td>Scaling</td><td>Vertical (mostly)</td><td>Horizontal (built-in)</td></tr>
          <tr><td>Transactions</td><td>ACID guaranteed</td><td>Eventual consistency</td></tr>
          <tr><td>Joins</td><td>Supported natively</td><td>Not supported / expensive</td></tr>
          <tr><td>Best for</td><td>Structured data, complex queries</td><td>Massive scale, flexible data</td></tr>
        </tbody>
      </table>

      <div className="blog-callout">
        <p><strong>Choose NoSQL when:</strong> you need super low latency, data is unstructured, you only need to serialize/deserialize data, or you need to store massive amounts of data. Most systems default to relational — it's well-proven and widely supported.</p>
      </div>

      <h3>Series Navigation</h3>
      <p>
        <Link to="/blog/sd-single-server">← Part 1: Single Server Setup</Link>
      </p>
      <p>
        <Link to="/blog/sd-scaling">Part 3: Vertical vs Horizontal Scaling →</Link>
      </p>
    </article>
  )
}

export default SDDatabase
