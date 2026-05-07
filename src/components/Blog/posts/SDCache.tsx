import { Link } from 'react-router-dom'

function SDCache() {
  return (
    <article className="blog-article">
      <p>
        A <strong>cache</strong> is a temporary in-memory storage layer that holds frequently accessed data, making reads significantly faster than hitting the database every time.
      </p>

      <h3>Read-Through Cache</h3>
      <ol>
        <li>Web server needs data → checks <strong>cache</strong> first</li>
        <li><strong>Cache hit</strong> → data found → return immediately (fast!)</li>
        <li><strong>Cache miss</strong> → read from DB → store in cache → return</li>
        <li>Next request for same data → served from cache (no DB call)</li>
      </ol>

      <div className="blog-diagram">
        <pre>{`┌────────────┐
│ Web Server │
└─────┬──────┘
      │
      │ 1. Request data
      ▼
┌────────────┐     Cache Hit ✅
│   CACHE    │─────────────────────► Return data (fast!)
│(Redis/Memc)│
└─────┬──────┘
      │
      │ Cache Miss ❌
      ▼
┌────────────┐
│  DATABASE  │
└─────┬──────┘
      │ 2. Read from DB
      │ 3. Store in Cache
      │ 4. Return data
      ▼
┌────────────┐
│ Web Server │
└────────────┘`}</pre>
      </div>

      <h3>Five Key Considerations</h3>

      <p>
        <strong>1. When to use cache</strong> — Only when data is read <strong>frequently</strong> and modified <strong>infrequently</strong>. Cache is volatile — if system reboots, cache data is lost. Important data must always persist in the database.
      </p>

      <p>
        <strong>2. Expiration policy</strong> — Too short → frequent DB reads (defeats the purpose). Too long → stale data served to users. Find the right balance.
      </p>

      <p>
        <strong>3. Consistency</strong> — Keeping data store and cache in sync is hard. Writing to DB and updating cache is NOT a single atomic transaction. Facebook published a paper on scaling Memcache addressing this exact problem.
      </p>

      <p>
        <strong>4. Mitigating failures (SPOF)</strong> — A single cache server is a single point of failure. Solution: distribute cache servers across multiple locations.
      </p>

      <p>
        <strong>5. Eviction policy</strong> — When cache is full, which data to remove?
      </p>

      <table className="blog-table">
        <thead><tr><th>Policy</th><th>Strategy</th><th>Use When</th></tr></thead>
        <tbody>
          <tr><td>LRU</td><td>Least Recently Used — remove data not accessed longest</td><td>General purpose, most common</td></tr>
          <tr><td>LFU</td><td>Least Frequently Used — remove data accessed least times</td><td>Some items are always popular</td></tr>
          <tr><td>FIFO</td><td>First In First Out — remove oldest data</td><td>Simple, time-based expiry</td></tr>
        </tbody>
      </table>

      <h3>Cache in the Full System</h3>
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
│Web 1│  │Web 2│
└──┬──┘  └──┬──┘
   └────┬────┘
        │
        ▼
  ┌───────────┐  miss   ┌──────────────────────┐
  │   CACHE   │◄───────►│      DATABASE        │
  │  (Redis)  │         │  Master + Slaves     │
  └───────────┘         └──────────────────────┘
       ▲
       │ hit (fast!)
       │
    Response`}</pre>
      </div>

      <div className="blog-callout">
        <p><strong>Key takeaway:</strong> Cache sits between your web servers and database. It dramatically reduces read latency and DB load. But it introduces complexity around consistency, expiration, and failure handling. Popular tools: Redis, Memcached.</p>
      </div>

      <h3>Series Navigation</h3>
      <p>
        <Link to="/blog/sd-db-replication">← Part 5: Database Replication</Link>
      </p>
      <p>
        This concludes the foundational system design series. Next topics to explore: CDN, Message Queues, Database Sharding, and Microservices.
      </p>
    </article>
  )
}

export default SDCache
