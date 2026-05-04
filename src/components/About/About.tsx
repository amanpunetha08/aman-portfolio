import heroImg from '../../assets/heroImg.jpg'
import { HiOutlineCode, HiOutlineServer, HiOutlineCube, HiOutlineBriefcase } from 'react-icons/hi'
import './About.css'

const HIGHLIGHTS = [
  { icon: <HiOutlineCode />, text: '4+ years building scalable web applications and microservices' },
  { icon: <HiOutlineServer />, text: 'Strong background in backend and full-stack development' },
  { icon: <HiOutlineCube />, text: 'Expertise in microservices, API design, and cloud architecture' },
  { icon: <HiOutlineBriefcase />, text: 'Experience across e-commerce, healthcare, and enterprise SaaS' },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title about-title">About Me</h2>
        <div className="about-underline" />
        <p className="section-subtitle about-subtitle">
          Currently working in Bangalore, India, I specialize in building scalable, secure, and high-performance systems that drive business value.
        </p>
        <div className="about-grid">
          <div className="about-photo-wrapper">
            <div className="about-photo-bg" />
            <img src={heroImg} alt="Aman Punetha" className="about-photo" />
          </div>
          <div className="about-content">
            <p>
              I am a Full-Stack Software Engineer with over 4 years of hands-on experience in developing robust, scalable, and high-performance applications. My expertise spans the entire software development lifecycle, from architecture design to deployment and optimization.
            </p>
            <p>
              My passion lies in solving complex technical challenges and building systems that not only meet current requirements but are designed to scale and evolve with business needs. I take ownership of projects end-to-end and am passionate about code quality, testing, and delivering high-value customer experiences.
            </p>
            <div className="about-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <div className="about-highlight-card" key={i}>
                  <span className="highlight-icon">{h.icon}</span>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
