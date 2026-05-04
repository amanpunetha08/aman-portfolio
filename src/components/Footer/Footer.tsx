import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa'
import './Footer.css'

const LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">AP</span>
          <p>Software Engineer building scalable backend systems and cloud-native applications.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {LINKS.map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/amanpunetha08" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/amanpunetha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://dev.to/amanpunetha08" target="_blank" rel="noopener noreferrer" aria-label="Dev.to"><FaDev /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aman Punetha. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
