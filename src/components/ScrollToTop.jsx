import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-dark-card border border-accent-cyan/30 cursor-pointer"
          style={{
            boxShadow: '0 0 20px rgba(6,182,212,0.3)',
          }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <HiArrowUp className="w-5 h-5 text-accent-cyan" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
