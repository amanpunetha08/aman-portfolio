import './Skills.css'

const CATEGORIES = [
  { title: 'Languages', tags: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C/C++'] },
  { title: 'Backend', tags: ['Express', 'NestJS', 'Django', 'Spring Boot', 'Node.js', 'fp-ts'] },
  { title: 'Frontend', tags: ['React', 'Next.js', 'HTML/CSS', 'Responsive Web Apps'] },
  { title: 'Databases & Messaging', tags: ['PostgreSQL', 'MySQL', 'DynamoDB', 'ElasticSearch', 'Redis', 'Kafka'] },
  { title: 'Cloud & DevOps', tags: ['AWS (ECS, Step Functions, SQS, S3)', 'Azure', 'Docker', 'CI/CD'] },
  { title: 'Testing & Architecture', tags: ['Jest', 'pytest', 'Integration Testing', 'REST APIs', 'Microservices', 'Async Programming'] },
]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technology Stack</h2>
        <p className="section-subtitle">Technologies and tools I use to build scalable solutions.</p>
        <div className="skills-grid">
          {CATEGORIES.map(c => (
            <div className="skill-card" key={c.title}>
              <h3>{c.title}</h3>
              <div className="skill-tags">
                {c.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
