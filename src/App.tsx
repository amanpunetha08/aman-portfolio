import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import BlogList from './components/Blog/BlogList'
import BlogPost from './components/Blog/BlogPost'
import Personal from './components/Personal/Personal'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <BlogList />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
