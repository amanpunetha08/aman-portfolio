import './Projects.css'

interface Project {
  title: string
  description: string
  category: string
  tags: string[]
  github?: string
  github2?: string
  github3?: string
  live?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'DukanStore - Inventory Management',
    description: 'Full-stack inventory management system with real-time dashboard, multi-currency support (INR/USD/EUR), Google OAuth, orders, suppliers, categories, alerts, reports, and dark mode. Django + MongoDB backend deployed on Render, React frontend on Vercel.',
    category: 'Full Stack',
    tags: ['React', 'Django', 'MongoDB', 'Google OAuth', 'REST API'],
    github: 'https://github.com/amanpunetha08/Inventory-Frontend',
    github2: 'https://github.com/amanpunetha08/Inventory-backend',
    live: 'https://dukanstore.vercel.app',
    featured: true,
  },
  {
    title: 'AI ChatBot with RAG',
    description: 'Intelligent chatbot powered by OpenAI with Retrieval-Augmented Generation (RAG) using ChromaDB for knowledge base. Features Django REST API backend, Redis caching, Docker deployment, and a Python SDK. Deployed on HuggingFace Spaces.',
    category: 'AI / Backend',
    tags: ['Django', 'OpenAI', 'ChromaDB', 'RAG', 'Docker', 'Redis'],
    github: 'https://github.com/amanpunetha08/Chat-Bot',
    featured: true,
  },
  {
    title: 'Daily Expense Tracker',
    description: 'Full-stack expense tracking application with real-time dashboard, category-wise breakdowns, and daily/monthly analytics. Built with a modern React frontend and deployed on Vercel.',
    category: 'Full Stack',
    tags: ['React', 'TypeScript', 'Node.js', 'Vercel'],
    github: 'https://github.com/amanpunetha08/Daily-Expense-Tracker',
    github2: 'https://github.com/amanpunetha08/Daily-expense-backend',
    github3: 'https://github.com/amanpunetha08/Daily-Expense-tracker-mobile',
    live: 'https://daily-expense-tracker-six-omega.vercel.app/',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, TypeScript, and Vite. Responsive design with dark theme and smooth scroll navigation.',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    github: 'https://github.com/amanpunetha08/aman-portfolio',
  },
  {
    title: 'DSA Practice',
    description: 'Comprehensive data structures and algorithms practice repository with solutions in multiple languages.',
    category: 'Algorithms',
    tags: ['Python', 'Java', 'DSA', 'Problem Solving'],
    github: 'https://github.com/amanpunetha08/DSA',
  },
  {
    title: 'Cloud Pipeline',
    description: 'Automated data pipeline using AWS services for processing and transforming data at scale.',
    category: 'Backend',
    tags: ['AWS', 'Lambda', 'S3', 'DynamoDB', 'Python'],
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of projects showcasing my work in backend and full-stack development.</p>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div
              className={`project-card ${p.featured ? 'featured' : ''} ${p.live ? 'has-live' : ''}`}
              key={p.title}
              onClick={() => p.live && window.open(p.live, '_blank')}
              style={p.live ? { cursor: 'pointer' } : {}}
            >
              <div className="project-badge-row">
                <span className="project-badge">{p.category}</span>
                {p.live && <span className="project-live-dot">● Live</span>}
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {(p.github2 || p.github3) ? (
                  <>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Frontend ↗</a>
                    {p.github2 && <a href={p.github2} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Backend ↗</a>}
                    {p.github3 && <a href={p.github3} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>App ↗</a>}
                  </>
                ) : p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>GitHub ↗</a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
