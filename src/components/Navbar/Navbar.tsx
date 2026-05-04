import { useState, useEffect } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import './Navbar.css'

const LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact']

function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="logo">AP</a>
        <ul className="nav-links-desktop">
          {LINKS.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
          <li>
            <label className="theme-slider" aria-label="Toggle theme">
              <input type="checkbox" checked={!dark} onChange={() => setDark(!dark)} />
              <span className="slider">
                <span className="slider-icon">{dark ? <HiOutlineMoon /> : <HiOutlineSun />}</span>
              </span>
            </label>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`hamburger-icon ${open ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <a href="#hero" className="logo" onClick={() => setOpen(false)}>AP</a>
          <button className="hamburger" onClick={() => setOpen(false)} aria-label="Close menu">
            <span className="hamburger-icon open" />
          </button>
        </div>
        <ul className="mobile-menu-links">
          {LINKS.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
        <div className="mobile-menu-theme">
          <span className="theme-label">Dark Mode</span>
          <label className="theme-slider" aria-label="Toggle theme">
            <input type="checkbox" checked={!dark} onChange={() => setDark(!dark)} />
            <span className="slider">
              <span className="slider-icon">{dark ? <HiOutlineMoon /> : <HiOutlineSun />}</span>
            </span>
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
