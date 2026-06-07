import { motion } from 'framer-motion'
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const interests = [
  'Problem Solving',
  'UI/UX Design',
  'Continuous Learning',
  'Fullstack Dev',
]

export default function Education() {
  const { isDark } = useTheme()

  return (
    <section
      id="education"
      style={{
        padding: '6rem 1rem',
        backgroundColor: isDark ? '#0f172a' : '#f8fafc'
      }}
    >
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', color: isDark ? '#ffffff' : '#111827' }}>
            My <span className="gradient-text">Education</span>
          </h2>
          <div style={{ width: '80px', height: '4px', margin: '0 auto', borderRadius: '9999px', background: 'linear-gradient(90deg, #a855f7, #06b6d4)' }} />
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            padding: '1.5rem',
            borderRadius: '0.75rem',
            maxWidth: '576px',
            margin: '0 auto',
            background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
            backdropFilter: 'blur(16px)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.04)',
            boxShadow: isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: isDark ? '#111827' : '#f1f5f9' }}>
              <HiAcademicCap style={{ width: '24px', height: '24px', color: '#06b6d4' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem', color: isDark ? '#ffffff' : '#111827' }}>
                Computer Science
              </h3>
              <p style={{ color: '#06b6d4', fontWeight: 500, marginBottom: '0.25rem', fontSize: '0.9375rem' }}>
                National Open University of Nigeria
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <HiLocationMarker style={{ width: '14px', height: '14px' }} />
                  Nigeria
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1.5rem', color: isDark ? '#ffffff' : '#111827' }}>
            Interests
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            {interests.map(interest => (
              <motion.div
                key={interest}
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(6,182,212,0.2)' : 'rgba(6,182,212,0.2)',
                  boxShadow: isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.1)',
                  color: '#06b6d4'
                }}
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
