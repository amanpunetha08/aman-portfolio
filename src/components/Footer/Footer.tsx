import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa'
import './Footer.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Blog']

function Footer() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => { setStatus('sent'); formRef.current?.reset(); setTimeout(() => setStatus('idle'), 3000) })
      .catch(() => { setStatus('error'); setTimeout(() => setStatus('idle'), 3000) })
  }

  return (
    <footer className="footer" id="contact">
      <div className="container footer-main">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="footer-logo">AP</span>
            <p>Software Engineer building scalable backend systems and cloud-native applications.</p>
          </div>
          <div className="footer-nav">
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
              <ul>
                <li><a href="mailto:amanpunetha08@gmail.com">amanpunetha08@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <h3>Get In Touch</h3>
          <p>Open to opportunities, projects, or collaborations.</p>
          <form className="footer-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name *" required />
            <input type="email" name="email" placeholder="Email *" required />
            <textarea name="message" placeholder="Message *" required rows={4} />
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : status === 'error' ? 'Failed — retry' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aman Punetha. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
