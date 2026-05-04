import './Projects.css'

interface Project {
  title: string
  description: string
  category: string
  tags: string[]
  github?: string
  live?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'Daily Expense Tracker',
    description: 'Full-stack expense tracking application with real-time dashboard, category-wise breakdowns, and daily/monthly analytics. Built with a modern React frontend and deployed on Vercel.',
    category: 'Full Stack',
    tags: ['React', 'TypeScript', 'Node.js', 'Vercel'],
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
            <div className={`project-card ${p.featured ? 'featured' : ''}`} key={p.title}>
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
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live Site ↗</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
