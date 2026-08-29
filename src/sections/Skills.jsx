import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython } from 'react-icons/fa'
import {
  SiTypescript, SiBootstrap, SiDotnet, SiMysql, SiPostgresql, SiMongodb, SiFigma, SiGit,
  SiNextdotjs, SiAngular, SiPhp, SiLaravel, SiVercel, SiNetlify,
  SiShopify, SiWordpress, SiStripe, SiPaypal, SiOpenai
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Frontend',
    color: '#06b6d4',
    skills: [
      { name: 'React', icon: FaReact, level: 100 },
      { name: 'Next.js', icon: SiNextdotjs, level: 90 },
      { name: 'Angular', icon: SiAngular, level: 85 },
      { name: 'JavaScript', icon: FaJsSquare, level: 100 },
      { name: 'TypeScript', icon: SiTypescript, level: 90 },
      { name: 'HTML5', icon: FaHtml5, level: 100 },
      { name: 'CSS3', icon: FaCss3Alt, level: 100 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: '#a855f7',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 100 },
      { name: 'Express.js', level: 100 },
      { name: 'Python', icon: FaPython, level: 85 },
      { name: 'C#', level: 100 },
      { name: 'ASP.NET Core', icon: SiDotnet, level: 100 },
      { name: 'MVC', level: 90 },
      { name: 'PHP', icon: SiPhp, level: 80 },
      { name: 'Laravel', icon: SiLaravel, level: 80 },
      { name: 'REST APIs', level: 100 },
      { name: 'JWT Authentication', level: 100 },
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
      { name: 'Oracle', level: 85 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: '#f97316',
    skills: [
      { name: 'Git/GitHub', icon: SiGit, level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'Playwright MCP', level: 88 },
      { name: 'Figma', icon: SiFigma, level: 78 },
      { name: 'BigCommerce', level: 80 },
      { name: 'Shopify', icon: SiShopify, level: 82 },
      { name: 'WordPress', icon: SiWordpress, level: 85 },
      { name: 'Agile/Scrum', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'IIS', level: 85 },
      { name: 'Render', level: 85 },
      { name: 'Netlify', icon: SiNetlify, level: 88 },
      { name: 'Vercel', icon: SiVercel, level: 90 },
      { name: 'AWS', level: 82 },
      { name: 'Railway', level: 85 },
    ],
  },
  {
    title: 'Payments',
    color: '#eab308',
    skills: [
      { name: 'Stripe', icon: SiStripe, level: 90 },
      { name: 'Flutterwave', level: 88 },
      { name: 'PayPal', icon: SiPaypal, level: 88 },
      { name: 'Paystack', level: 90 },
      { name: 'Authorize.net', level: 85 },
      { name: 'Braintree', level: 85 },
      { name: 'Checkout.com', level: 85 },
      { name: 'Monnify', level: 85 },
    ],
  },
  {
    title: 'UI/UX',
    color: '#ec4899',
    skills: [
      { name: 'UI/UX Design', icon: SiFigma, level: 82 },
      { name: 'Wireframing', level: 85 },
      { name: 'Prototyping', level: 85 },
      { name: 'Design Systems', level: 80 },
    ],
  },
  {
    title: 'Testing & QA',
    color: '#84cc16',
    skills: [
      { name: 'Troubleshooting & Debugging', level: 90 },
      { name: 'Software Testing', level: 88 },
      { name: 'QA Processes', level: 85 },
      { name: 'Web Application Knowledge', level: 90 },
      { name: 'Test Case Creation', level: 85 },
      { name: 'Bug Reporting', level: 88 },
      { name: 'API Expertise', level: 92 },
    ],
  },
  {
    title: 'AI Tools',
    color: '#6366f1',
    skills: [
      { name: 'OpenAI', icon: SiOpenai, level: 92 },
      { name: 'Claude', level: 90 },
      { name: 'Blackbox AI', level: 85 },
      { name: 'ChatGPT', level: 92 },
      { name: 'Uizard', level: 80 },
      { name: 'Galileo AI', level: 80 },
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
