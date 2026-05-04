import './Articles.css'
import { useEffect, useState } from 'react'

function Articles() {
  interface Article {
    title: string
    description: string
    date: string
    url: string
  }

  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch('https://dev.to/api/articles/latest?username=amanpunetha08&t=' + Date.now())
        const data = await res.json()
        setArticles(
          data.map((a: any)=> ({
            title: a.title,
            description:a.description,
            date: new Date(a.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            url: a.url,
          }))
        )
      }catch {
        // silently fail
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  },[])

  return (
    <section className='articles' id='articles'>
      <h2 className='section-title'>Articles</h2>
      <div className='articles-track'>
        {loading ? (
          <p style={{ color: 'var(--subtle)' }}>Loading...</p>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <a href={article.url} target='_blank' rel='noopener noreferrer' className='article-card' key={index}>
              <span className='articles-date'>{article.date}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className='read-more'>Read more →</span>
            </a>
          ))
        ) : (
          <p style={{ color:'var(--subtle)' }}>No articles yet</p>
        )}
      </div>
    </section>
  )
}

export default Articles
