import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogData'
import './Blog.css'

function BlogList() {
  const featured = blogPosts.filter(p => p.featured)

  return (
    <section id="blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="blog-underline" />

        <div className="blog-featured-grid">
          {featured.map(post => (
            <Link to={`/blog/${post.id}`} className="blog-card blog-card--featured" key={post.id}>
              <span className="blog-card-badge">★ Featured</span>
              <h3>{post.title}</h3>
              <p className="blog-card-summary">{post.summary}</p>
              <span className="blog-card-link">Read more →</span>
            </Link>
          ))}
        </div>

        <div className="blog-view-all">
          <Link to="/blogs" className="blog-view-all-link">View all blogs →</Link>
        </div>
      </div>
    </section>
  )
}

export default BlogList
