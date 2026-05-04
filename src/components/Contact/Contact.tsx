import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './Contact.css'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('sent')
        formRef.current?.reset()
        setTimeout(() => setStatus('idle'), 3000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      })
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Open to discussing opportunities, projects, or collaborations.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <a href="mailto:amanpunetha08@gmail.com" className="contact-item">
              <HiOutlineMail className="contact-icon" />
              <div>
                <strong>Email</strong>
                <p>amanpunetha08@gmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/amanpunetha" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaLinkedinIn className="contact-icon" />
              <div>
                <strong>LinkedIn</strong>
                <p>linkedin.com/in/amanpunetha</p>
              </div>
            </a>
            <a href="https://github.com/amanpunetha08" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaGithub className="contact-icon" />
              <div>
                <strong>GitHub</strong>
                <p>github.com/amanpunetha08</p>
              </div>
            </a>
            <div className="contact-item">
              <HiOutlineLocationMarker className="contact-icon" />
              <div>
                <strong>Location</strong>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name *" required />
            <input type="email" name="email" placeholder="Email *" required />
            <textarea name="message" placeholder="Message *" required rows={5} />
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Sent!' : status === 'error' ? 'Failed — try again' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
