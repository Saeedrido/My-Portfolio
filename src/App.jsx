import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import DoorReveal from './components/DoorReveal'
import ScrollToTop from './components/ScrollToTop'
import ThemeTransition from './components/ThemeTransition'
import Particles from './components/Particles'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const [doorPhase, setDoorPhase] = useState('idle')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setDoorPhase('closing')
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <ThemeProvider>
      <AnimatePresence>
        {doorPhase !== 'done' && (
          <DoorReveal
            key="door"
            onComplete={() => setDoorPhase('done')}
          />
        )}
      </AnimatePresence>

      <div className="relative" style={{ opacity: doorPhase === 'done' ? 1 : 0 }}>
        <ThemeTransition />
        <Particles />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certificates />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
