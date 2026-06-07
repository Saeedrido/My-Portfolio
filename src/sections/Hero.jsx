import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload, HiMail } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const roles = [
  'Frontend Developer (React)',
  'Fullstack Developer (Node.js, C#)',
  'UI/UX Designer',
  'React, Node.js, C# Specialist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const { isDark } = useTheme()

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }, 80)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      }, 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex(prev => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '6rem 1rem',
        position: 'relative',
        backgroundColor: isDark ? '#0f172a' : '#f8fafc'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '25%', left: '25%', width: '384px', height: '384px', background: 'rgba(6,182,212,0.1)', borderRadius: '50%', filter: 'blur(64px)' }} />
        <div style={{ position: 'absolute', bottom: '25%', right: '25%', width: '384px', height: '384px', background: 'rgba(168,85,247,0.1)', borderRadius: '50%', filter: 'blur(64px)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'rgba(59,130,246,0.05)', borderRadius: '50%', filter: 'blur(64px)' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 10, maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            borderRadius: '9999px',
            background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
            color: '#06b6d4',
            border: '1px solid rgba(6,182,212,0.2)',
            backdropFilter: 'blur(16px)'
          }}>
            Available for freelance & full-time
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.1, marginBottom: '1.5rem' }}
        >
          <span style={{ color: isDark ? '#ffffff' : '#111827' }}>
            Hi, I'm{' '}
          </span>
          <span className="gradient-text">
            Abdul-Raheed
          </span>
          <br />
          <span style={{ color: isDark ? '#ffffff' : '#111827' }}>
            Muhammad-Saeed
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} style={{ marginBottom: '2rem', height: '2rem' }}>
          <span style={{ fontSize: '1.125rem', fontWeight: 500, color: isDark ? '#d1d5db' : '#64748b' }}>
            {displayText}
            <span className="typing-cursor" />
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          style={{ maxWidth: '640px', margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.75, color: isDark ? '#94a3b8' : '#64748b' }}
        >
          Experienced Software Engineer with many years building scalable, user-friendly applications.
          Expertise in React, Node.js, JavaScript, C#, HTML, CSS, and MySQL.
          Strong UI/UX design skills translating business needs into modern digital experiences.
          Focus on intuitive frontends and robust backends delivering measurable results.
        </motion.p>

        <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <motion.a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.875rem',
              background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
              color: '#ffffff',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <HiArrowRight style={{ width: '16px', height: '16px' }} />
          </motion.a>

          <motion.a
            href="/Abdul-Raheed_Muhammad-Saeed_CV.pdf"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.875rem',
              border: '1px solid',
              borderColor: isDark ? '#475569' : '#cbd5e1',
              color: isDark ? '#d1d5db' : '#475569',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05, borderColor: '#06b6d4', color: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload style={{ width: '16px', height: '16px' }} />
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.875rem',
              border: '1px solid',
              borderColor: isDark ? '#475569' : '#cbd5e1',
              color: isDark ? '#d1d5db' : '#475569',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05, borderColor: '#a855f7', color: '#a855f7' }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMail style={{ width: '16px', height: '16px' }} />
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ width: '24px', height: '40px', borderRadius: '9999px', border: '2px solid', borderColor: isDark ? '#475569' : '#cbd5e1', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4px' }}>
            <div style={{ width: '4px', height: '12px', borderRadius: '9999px', backgroundColor: '#06b6d4' }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
