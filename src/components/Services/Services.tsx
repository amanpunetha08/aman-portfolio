import './Services.css'
import { HiOutlineServer, HiOutlineCube, HiOutlineCode, HiOutlineLightningBolt, HiOutlineRefresh, HiOutlineChip } from 'react-icons/hi'

const SERVICES = [
  { icon: <HiOutlineServer />, title: 'Backend System Design', desc: 'Architect scalable, secure backend systems using modern patterns and cloud-native technologies.' },
  { icon: <HiOutlineCube />, title: 'Cloud Architecture', desc: 'Design and implement cloud infrastructure on AWS with serverless, containers, and IaC.' },
  { icon: <HiOutlineCode />, title: 'API Development', desc: 'Build robust REST and GraphQL APIs with proper authentication, validation, and documentation.' },
  { icon: <HiOutlineLightningBolt />, title: 'Performance Optimization', desc: 'Optimize application performance through profiling, caching, and database tuning.' },
  { icon: <HiOutlineRefresh />, title: 'CI/CD & DevOps', desc: 'Set up automated build, test, and deployment pipelines using modern DevOps practices.' },
  { icon: <HiOutlineChip />, title: 'AI Integration', desc: 'Integrate LLMs and AI-driven workflows into backend systems for intelligent automation.' },
]

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">What I Offer</h2>
        <p className="section-subtitle">Services to help build scalable, high-performance solutions.</p>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
