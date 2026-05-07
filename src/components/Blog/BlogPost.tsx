import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogData'
import LeetCodePatterns from './posts/LeetCodePatterns'
import BuildingRAGChatbot from './posts/BuildingRAGChatbot'
import SDSingleServer from './posts/SDSingleServer'
import SDDatabase from './posts/SDDatabase'
import SDScaling from './posts/SDScaling'
import SDLoadBalancer from './posts/SDLoadBalancer'
import SDDbReplication from './posts/SDDbReplication'
import SDCache from './posts/SDCache'
import './Blog.css'

const RICH_POSTS: Record<string, React.FC> = {
  '15-leetcode-patterns': LeetCodePatterns,
  'building-rag-chatbot': BuildingRAGChatbot,
  'sd-single-server': SDSingleServer,
  'sd-database': SDDatabase,
  'sd-scaling': SDScaling,
  'sd-load-balancer': SDLoadBalancer,
  'sd-db-replication': SDDbReplication,
  'sd-cache': SDCache,
}

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === id)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!post) {
    return (
      <section id="blog">
        <div className="container">
          <h2 className="section-title">Post Not Found</h2>
          <Link to="/" className="blog-back">← Back to Home</Link>
        </div>
      </section>
    )
  }

  const RichComponent = id ? RICH_POSTS[id] : undefined

  return (
    <section id="blog">
      <div className="container">
        <Link to="/#blog" className="blog-back">← Back to Blog</Link>
        <h2 className="section-title blog-post-title">{post.title}</h2>
        <p className="blog-post-date">{post.date}</p>
        {RichComponent ? (
          <RichComponent />
        ) : (
          <div className="blog-prompts">
            {post.content?.map((block, i) => (
              <div className="blog-prompt-card" key={i}>
                <pre className="prompt-content">{block}</pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogPost
