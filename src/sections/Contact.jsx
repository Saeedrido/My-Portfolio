import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import PhoneModal from '../components/PhoneModal'

function TypeWriterText() {
  const text = 'click me for action'
  const [phase, setPhase] = useState('typing')
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (phase === 'typing' && index < text.length) {
      const t = setTimeout(() => setIndex(i => i + 1), 80 + Math.random() * 60)
      return () => clearTimeout(t)
    } else if (phase === 'typing' && index === text.length) {
      const t = setTimeout(() => setPhase('fading'), 3000)
      return () => clearTimeout(t)
    } else if (phase === 'fading') {
      setShow(false)
      const t = setTimeout(() => {
        setPhase('waiting')
      }, 800)
      return () => clearTimeout(t)
    } else if (phase === 'waiting') {
      const t = setTimeout(() => {
        setPhase('typing')
        setIndex(0)
        setShow(true)
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [phase, index, text.length])

  return (
    <AnimatePresence>
      {show && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          style={{ display: 'inline-flex', gap: '1px', flexWrap: 'wrap' }}
        >
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -10, rotateZ: -10, scale: 0 }}
              animate={
                i < index
                  ? { opacity: 1, y: 0, rotateZ: 0, scale: 1 }
                  : { opacity: 0 }
              }
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              style={{
                display: 'inline-block',
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      )}
    </AnimatePresence>
  )
}

const contactInfo = [
  { icon: HiLocationMarker, label: 'Location', value: 'Lagos State, Nigeria' },
  { icon: HiPhone, label: 'Phone', value: '07041718422', action: 'modal', typewriter: true },
  { icon: HiMail, label: 'Email', value: 'saeedrido99@gmail.com', href: 'mailto:saeedrido99@gmail.com', typewriter: true },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Saeedrido', label: 'GitHub', username: 'Saeedrido' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/muhammad-saeed-bba363346', label: 'LinkedIn', username: 'Muhammad-Saeed' },
]

export default function Contact() {
  const [phoneModal, setPhoneModal] = useState(false)
  const { isDark } = useTheme()

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 1rem',
        position: 'relative',
        backgroundColor: isDark ? '#111827' : '#f1f5f9'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '-160px',
          right: '-160px',
          width: '320px',
          height: '320px',
          background: 'rgba(168,85,247,0.05)',
          borderRadius: '50%',
          filter: 'blur(64px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-160px',
          left: '-160px',
          width: '320px',
          height: '320px',
          background: 'rgba(6,182,212,0.05)',
          borderRadius: '50%',
          filter: 'blur(64px)'
        }} />
      </div>

      <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', color: isDark ? '#ffffff' : '#111827' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div style={{ width: '80px', height: '4px', margin: '0 auto', borderRadius: '9999px', background: 'linear-gradient(90deg, #06b6d4, #a855f7)' }} />
          <p style={{ marginTop: '1.5rem', maxWidth: '576px', marginLeft: 'auto', marginRight: 'auto', color: isDark ? '#94a3b8' : '#64748b' }}>
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  padding: '1.25rem',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
                  backdropFilter: 'blur(16px)',
                  border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.04)',
                  boxShadow: isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)',
                  cursor: info.action === 'modal' ? 'pointer' : 'default'
                }}
                onClick={() => info.action === 'modal' && setPhoneModal(true)}
              >
                <div style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  background: isDark ? '#111827' : '#f1f5f9'
                }}>
                  <info.icon style={{ width: '20px', height: '20px', color: '#06b6d4' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: isDark ? '#64748b' : '#94a3b8' }}>
                    {info.label}
                  </p>
                  {info.href ? (
                    <a href={info.href} style={{ fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#d1d5db' : '#475569', textDecoration: 'none' }}
                       onMouseEnter={e => e.target.style.color = '#06b6d4'}
                       onMouseLeave={e => e.target.style.color = isDark ? '#d1d5db' : '#475569'}>
                      {info.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#d1d5db' : '#475569' }}>
                      {info.value}
                    </p>
                  )}
                  {info.typewriter && (
                    <div style={{ marginTop: '6px' }}>
                      <TypeWriterText />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', color: isDark ? '#ffffff' : '#111827' }}>
              Connect With Me
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {socialLinks.map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
                    backdropFilter: 'blur(16px)',
                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.04)',
                    boxShadow: isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <social.icon style={{ width: '32px', height: '32px', color: '#06b6d4' }} />
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#ffffff' : '#111827' }}>
                      {social.label}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                      {social.username}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <PhoneModal open={phoneModal} onClose={() => setPhoneModal(false)} />
    </section>
  )
}
