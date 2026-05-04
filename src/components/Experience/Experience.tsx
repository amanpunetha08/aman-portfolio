import { useState } from 'react'
import './Experience.css'

interface Job {
  title: string
  company: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
}

const JOBS: Job[] = [
  {
    title: 'System Development Engineer',
    company: 'Amazon',
    period: 'Nov 2024 – Present',
    location: 'Bangalore, India',
    bullets: [
      'Designed and implemented a full-stack automated partner website verification pipeline using TypeScript, AWS Step Functions, ECS Fargate, SQS, DynamoDB, and S3',
      'Built containerized web applications with LLM-powered workflows for scalable content extraction and structured data outputs using TypeScript and fp-ts',
      'Developed RESTful APIs and server-side business logic using Express for partner email link tracking service with click tracking, logging, and metrics aggregation',
      'Created reusable React components, hooks, and tests promoting code reusability, maintainability, and scalability across partner screening services',
      'Enhanced system observability with centralized logging, custom CloudWatch metrics, and robust error handling',
    ],
    tags: ['TypeScript', 'fp-ts', 'Express', 'React', 'AWS', 'Docker', 'DynamoDB'],
  },
  {
    title: 'Software Development Engineer',
    company: 'MedikaBazaar',
    period: 'Aug 2023 – Oct 2024',
    location: 'Gurugram, India',
    bullets: [
      'Developed and managed a SaaS platform (24/7 uptime) supporting over 2 million products across multiple microservices with PostgreSQL',
      'Designed server-side APIs, data models, and business logic for an approval flow system handling 2M+ products',
      'Implemented multi-broker Kafka clusters for asynchronous event-driven processing, transitioning from RabbitMQ to Kafka',
      'Designed and deployed a Notification Microservice supporting both synchronous REST APIs and asynchronous messaging patterns',
      'Built CI/CD pipelines and Dockerized microservices improving deployment reliability and scalability',
    ],
    tags: ['Python', 'Java', 'PostgreSQL', 'Kafka', 'Docker', 'REST APIs'],
  },
  {
    title: 'Software Development Engineer',
    company: 'Fashinza',
    period: 'Apr 2022 – Aug 2023',
    location: 'Gurugram, India',
    bullets: [
      'Optimized API performance by 80% through query optimization, caching strategies, and efficient database schema design with PostgreSQL',
      'Applied design patterns (Builder, Factory) to build reusable components increasing codebase efficiency by 30%',
      'Developed a Finance Microservice with modular architecture for seamless integration and scalability',
      'Built an automated ledger system reducing processing time by 70% through optimized database queries',
      'Implemented government invoice registration system with complex data validation and third-party API integrations',
    ],
    tags: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'pytest'],
  },
]

function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">4+ years building scalable systems across cloud and backend domains.</p>
        <div className="timeline">
          {JOBS.map((job, i) => (
            <div className={`timeline-item ${expanded === i ? 'expanded' : ''}`} key={i} onClick={() => setExpanded(i)}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                {expanded === i && (
                  <>
                    <ul className="timeline-bullets">
                      {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                    <div className="timeline-tags">
                      {job.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
