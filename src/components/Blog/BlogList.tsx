import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogData'
import './Blog.css'

function BlogList() {
  return (
    <section id="blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="blog-underline" />
        <div className="blog-grid">
          {blogPosts.map(post => (
            <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
              <h3>{post.title}</h3>
              <p className="blog-card-date">{post.date}</p>
              <p className="blog-card-summary">{post.summary}</p>
              <span className="blog-card-link">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
