import './Hero.css'

const TAGS = ['TypeScript', 'Python', 'AWS', 'Docker', 'React', 'Microservices']

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <h1>Aman Punetha</h1>
        <h2>Full-Stack Software Engineer</h2>
        <p className="hero-subtitle">Turning Complex Problems into Scalable Solutions</p>
        <p className="hero-desc">
          Building scalable web applications and microservices with 4+ years of experience across the entire SDLC — from RESTful APIs and distributed workflows to containerized deployments on AWS.
        </p>
        <div className="hero-tags">
          {TAGS.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download CV</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
