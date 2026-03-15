import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='navbar'>
      <div className='logo'>Portfolio</div>
      <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <span className='hamburger-icon'></span>
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className='btns'>
        <button className='btn'>Download</button>
      </div>
    </nav>
  )
}

export default Navbar
