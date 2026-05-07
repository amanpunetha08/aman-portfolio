import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogData'
import './Blog.css'

function BlogAll() {
  const [query, setQuery] = useState('')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))
  const filtered = sorted.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.summary.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section id="blog">
      <div className="container">
        <Link to="/#blog" className="blog-back">← Back to Home</Link>
        <h2 className="section-title">All Blog Posts</h2>
        <div className="blog-underline" />
        <input
          type="text"
          className="blog-search"
          placeholder="Search blogs..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <table className="blog-all-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={2} className="blog-no-results">No blogs found.</td></tr>
            ) : (
              filtered.map(post => (
                <tr key={post.id}>
                  <td className="blog-all-date">{post.date}</td>
                  <td>
                    <Link to={`/blog/${post.id}`} className="blog-all-link">
                      {post.title}
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default BlogAll
