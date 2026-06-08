import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'Team Oscar Platform',
    description: 'A full-featured frontend platform built with modern React, featuring responsive UI, dynamic components, and seamless user experience.',
    tags: ['React', 'Node.js', 'JavaScript', 'CSS3', 'Vercel'],
    color: '#06b6d4',
    liveUrl: 'https://team-oscar-frontend-march.vercel.app/',
    githubUrl: '#',
  },

  {
    title: '300 Arundel Learning Limited — School Management Portal',
    description: 'Live school management portal with full academic lifecycle digitization.',
    tags: ['React', '.NET', 'C#', 'ASP.NET Core', 'PostgreSQL', 'GPS Geofencing'],
    color: '#10b981',
    liveUrl: 'https://300arundellearningcenter.com.ng/',
  },
  {
    title: 'E-Commerce Web Application',
    description: 'Full-featured online store with product catalog, search, shopping cart, secure authentication, and Stripe payment processing. Built with a responsive mobile-first layout.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Stripe'],
    color: '#f97316',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default function Projects() {
  const { isDark } = useTheme()

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 1rem',
        backgroundColor: isDark ? '#0f172a' : '#f8fafc'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1rem', color: isDark ? '#ffffff' : '#111827' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div style={{ width: '80px', height: '4px', margin: '0 auto', borderRadius: '9999px', background: 'linear-gradient(90deg, #a855f7, #06b6d4)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                borderRadius: '0.75rem',
                overflow: 'hidden',
                background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
                backdropFilter: 'blur(16px)',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.04)',
                boxShadow: isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)'
              }}
            >
              <div
                style={{
                  height: '192px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`
                }}
              >
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HiCode style={{ width: '64px', height: '64px', opacity: 0.2, color: project.color }} />
                </div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(15,23,42,0.6), transparent)',
                }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}
                >
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(16px)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textDecoration: 'none'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiExternalLink style={{ width: '14px', height: '14px' }} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(16px)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textDecoration: 'none'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub style={{ width: '14px', height: '14px' }} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem', color: isDark ? '#ffffff' : '#111827' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.625, marginBottom: '1rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        borderRadius: '9999px',
                        backgroundColor: `${project.color}18`,
                        color: project.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: '3rem',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            maxWidth: '896px',
            marginLeft: 'auto',
            marginRight: 'auto',
            background: isDark ? 'rgba(30,41,59,0.6)' : '#ffffff',
            backdropFilter: 'blur(16px)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.04)',
            boxShadow: isDark ? 'none' : '0 10px 15px -3px rgba(0,0,0,0.1)'
          }}
        >
          <p style={{ fontSize: '0.875rem', lineHeight: 1.625, color: isDark ? '#94a3b8' : '#64748b' }}>
            I have worked on several frontend and fullstack projects involving React, Node.js, C#, ASP.NET Core, and MySQL, including e-commerce platforms, dashboards, authentication systems, school management systems, and customer-facing web applications. One of the projects I am most proud of was implementing a secure payment integration and building responsive user interfaces that improved the overall user experience. I also worked on optimizing database queries, creating REST APIs, designing reusable frontend components, and implementing role-based authentication systems.
          </p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.625, marginTop: '1rem', color: isDark ? '#94a3b8' : '#64748b' }}>
            One of the biggest challenges I faced was handling complex backend and frontend integration while ensuring performance, security, and responsiveness across devices. I also encountered difficulties debugging API communication issues, managing state in large React applications, and ensuring smooth payment processing without transaction failures. Through these experiences, I improved my problem-solving skills, learned how to work effectively under pressure, and became better at writing scalable and maintainable code while collaborating with teams on real-world projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
