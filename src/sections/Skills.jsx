import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiBootstrap, SiDotnet, SiMysql, SiPostgresql, SiMongodb, SiFigma, SiGit } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Frontend',
    color: '#06b6d4',
    skills: [
      { name: 'React', icon: FaReact, level: 100 },
      { name: 'HTML5', icon: FaHtml5, level: 100 },
      { name: 'CSS3', icon: FaCss3Alt, level: 100 },
      { name: 'JavaScript', icon: FaJsSquare, level: 100 },
      { name: 'TypeScript', icon: SiTypescript, level: 75 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: '#a855f7',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 100 },
      { name: 'C#', level: 100 },
      { name: 'ASP.NET Core', icon: SiDotnet, level: 100 },
      { name: 'Web API', icon: SiDotnet, level: 100 },
      { name: 'REST APIs', level: 100 },
    ],
  },
  {
    title: 'Databases',
    color: '#3b82f6',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 100 },
      { name: 'SQL Server', icon: FaDatabase, level: 100 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 100 },
      { name: 'MongoDB', icon: SiMongodb, level: 100 },
    ],
  },
  {
    title: 'Other',
    color: '#f97316',
    skills: [
      { name: 'UI/UX Design', icon: SiFigma, level: 82 },
      { name: 'Git/GitHub', icon: SiGit, level: 88 },
      { name: 'Agile/Scrum', level: 80 },
      { name: 'Figma', icon: SiFigma, level: 78 },
    ],
  },
]

export default function Skills() {
  const { isDark } = useTheme()

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 1rem',
        backgroundColor: isDark ? '#0f172a' : '#f8fafc'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', color: isDark ? '#ffffff' : '#111827' }}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <div style={{ width: '80px', height: '4px', margin: '0 auto', borderRadius: '9999px', background: 'linear-gradient(90deg, #a855f7, #06b6d4)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              style={{
                padding: '1.5rem',
                borderRadius: '0.75rem',
                background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
                backdropFilter: 'blur(16px)',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.04)',
                boxShadow: isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: category.color }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: isDark ? '#ffffff' : '#111827' }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {skill.icon ? (
                          <skill.icon style={{ width: '16px', height: '16px', color: category.color }} />
                        ) : (
                          <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: category.color }} />
                        )}
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: isDark ? '#d1d5db' : '#475569' }}>
                          {skill.name}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: isDark ? '#64748b' : '#94a3b8' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: '9999px',
                      backgroundColor: isDark ? '#111827' : '#e2e8f0'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        style={{
                          height: '100%',
                          borderRadius: '9999px',
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                          boxShadow: `0 0 10px ${category.color}44`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
