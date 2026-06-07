import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiX, HiAcademicCap } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const experiences = [
  {
    company: 'HEIMDALL1791 TECHNOLOGY (American Company)',
    role: 'Software Engineer',
    period: '2022 – 2024 (2 yrs)',
    description: [
      'Developed responsive web apps using React, Node.js, and C#',
      'Implemented UI/UX improvements; built dashboards, forms, customer interfaces',
      'Optimized MySQL database queries; implemented payment integration',
    ],
  },
  {
    company: 'Trueminds Innovation',
    role: 'Backend Developer Intern',
    period: '2026 (3 months)',
    grade: '97%',
    gradeImage: '/intern-grade.jpeg',
    description: [
      'Completed 3-month intensive backend internship with certificate',
      'Achieved 97% overall grade — top performance',
      'Developed backend services and APIs using Node.js',
      'Supported frontend team with React tasks when additional help needed',
    ],
  },
  {
    company: 'Muslims Teens Private School',
    role: 'Mathematics Teacher',
    period: '2021 – 2024 (3 yrs)',
    description: [
      'Taught mathematics to secondary school students; applied modern STEM methods',
      'Developed lesson plans and improved student performance in mathematics',
    ],
  },
  {
    company: 'SYSBEAMS, Abeokuta',
    role: 'Software Engineer',
    period: 'July 2022 – Sept 2024',
    description: [
      'Led frontend & backend development; built E-commerce React frontend with payment flow',
      'Designed user dashboards, auth flows; implemented microservices with C# and .NET Core',
    ],
  },
  {
    company: 'CODE LEARNERS HUB, Abeokuta',
    role: 'Coding Instructor',
    period: 'May 2023 – Present',
    description: [
      'Taught HTML, CSS, JavaScript, React, C# to students; mentored on real-world projects',
      'Designed engaging course materials and provided feedback',
    ],
  },
]

export default function Experience() {
  const [showGrade, setShowGrade] = useState(false)
  const [gradeImage, setGradeImage] = useState('')
  const { isDark } = useTheme()

  return (
    <section
      id="experience"
      style={{
        padding: '6rem 1rem',
        backgroundColor: isDark ? '#111827' : '#f1f5f9'
      }}
    >
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', color: isDark ? '#ffffff' : '#111827' }}>
            My <span className="gradient-text">Experience</span>
          </h2>
          <div style={{ width: '80px', height: '4px', margin: '0 auto', borderRadius: '9999px', background: 'linear-gradient(90deg, #06b6d4, #a855f7)' }} />
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '32px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: isDark ? '#1e293b' : '#e2e8f0'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, #06b6d4, #a855f7, #f97316)',
              opacity: 0.5
            }} />
          </div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              style={{ position: 'relative', paddingLeft: '80px', paddingBottom: '48px' }}
            >
              <div style={{
                position: 'absolute',
                left: '24px',
                top: '24px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '2px solid #06b6d4',
                backgroundColor: isDark ? '#111827' : '#ffffff',
                zIndex: 10
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '3px',
                  borderRadius: '50%',
                  backgroundColor: '#06b6d4',
                }} />
              </div>

              <div style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                background: isDark ? 'rgba(30, 41, 59, 0.6)' : '#ffffff',
                backdropFilter: 'blur(16px)',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.04)',
                boxShadow: isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: isDark ? '#ffffff' : '#111827' }}>
                    {exp.company}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                    <HiCalendar style={{ width: '12px', height: '12px' }} />
                    {exp.period}
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.75rem', color: '#06b6d4' }}>
                  <HiBriefcase style={{ display: 'inline', width: '12px', height: '12px', marginRight: '4px' }} />
                  {exp.role}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {exp.description.map((desc, i) => (
                    <li key={i} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                      <span style={{ marginTop: '5px', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#06b6d4', flexShrink: 0 }} />
                      {desc}
                    </li>
                  ))}
                </ul>
                {exp.grade && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setGradeImage(exp.gradeImage); setShowGrade(true) }}
                    style={{
                      marginTop: '0.75rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                      color: '#fff',
                    }}
                  >
                    <HiAcademicCap style={{ width: '16px', height: '16px' }} />
                    View Grade Proof ({exp.grade})
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showGrade && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 60,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem', background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
            }}
            onClick={() => setShowGrade(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                position: 'relative',
                maxWidth: '500px', width: '90%',
                borderRadius: '1rem', overflow: 'hidden',
                background: isDark ? '#1e293b' : '#fff',
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: isDark ? '#fff' : '#111' }}>
                    Grade Proof - Trueminds Innovation
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                    97% Overall Grade
                  </p>
                </div>
                <button
                  onClick={() => setShowGrade(false)}
                  style={{
                    padding: '0.5rem', borderRadius: '0.5rem',
                    border: 'none', cursor: 'pointer',
                    background: 'transparent',
                    color: isDark ? '#94a3b8' : '#64748b',
                  }}
                >
                  <HiX style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
              <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={gradeImage}
                  alt="Internship Grade Proof"
                  style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: '0.5rem', objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
