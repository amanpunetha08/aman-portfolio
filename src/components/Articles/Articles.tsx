import './Articles.css'

const articles = [
  {
    title: 'Building Scalable APIs with TypeScript',
    description: 'A deep dive into designing REST APIs that handle millions of requests using TypeScript and Express.',
    date: 'Mar 10, 2026',
    link: 'https://example.com/article-1',
  },
  {
    title: 'AWS Lambda: Beyond the Basics',
    description: 'Exploring advanced patterns for serverless architectures — from cold starts to event-driven workflows.',
    date: 'Feb 22, 2026',
    link: 'https://example.com/article-2',
  },
  {
    title: 'AI-Driven Data Pipelines',
    description: 'How I built automated pipelines that use LLMs to extract insights from unstructured data.',
    date: 'Jan 15, 2026',
    link: 'https://example.com/article-3',
  },
  {
    title: 'Docker in Production',
    description: 'Lessons learned from running containerized applications at scale — networking, logging, and orchestration.',
    date: 'Dec 5, 2025',
    link: 'https://example.com/article-4',
  },
  {
    title: 'Distributed Systems 101',
    description: 'Understanding consistency, availability, and partition tolerance in real-world backend systems.',
    date: 'Nov 18, 2025',
    link: 'https://example.com/article-5',
  },
]

function Articles() {
  return (
    <section className="articles" id="articles">
      <h2 className="section-title">Articles</h2>
      <div className="articles-track">
        {articles.map((article, index) => (
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-card" key={index}>
            <span className="article-date">{article.date}</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="read-more">Read more →</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Articles
