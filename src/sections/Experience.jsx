import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiX, HiAcademicCap } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const experiences = [
  {
    company: 'RolePilot',
    role: 'QA Engineer',
    period: '1.5 Years',
    description: [
      'Worked as a QA Engineer expert, specializing in software testing and quality assurance across web applications',
      'Used Postman for API testing, Playwright for automated browser testing, and Jira for bug tracking and agile project management',
      'Documented bugs in Google Docs — for hosted applications, screenshotted each location where bugs occurred, imported them into the doc, and explained what happened and what could be done to fix it',
      'Created and executed test cases, documented results, and reported bugs with clear reproduction steps',
      'Performed regression, functional, and API testing to ensure reliability before releases',
      'Collaborated with developers to resolve defects and uphold quality standards throughout the development lifecycle',
    ],
  },
  {
    company: '300 Arundel Learning Limited — School Management Portal',
    role: 'Freelance Fullstack Developer',
    period: '2026 (1.5 months)',
    description: [
      'Built a full-stack school management system (React + .NET) for a private school in Lagos, Nigeria, digitizing the entire academic lifecycle',
      'Student management — Registration, class assignment, ID card generation, CSV export with paginated student lists',
      'Exams & assessments — Exam creation, question banks (with DOCX upload), automated grading, theory marking, result computation, report cards',
      'Promotions & academic tracking — Term-to-term promotion with configurable criteria, cumulative result calculation, position ranking',
      'Entrance exams — Full candidate lifecycle from registration to auto-graded entrance testing with token-based access links',
      'Comments engine — Teacher remarks and headmaster comments with batch management and default seeding',
      'Notifications — Parent notification system via the Information module',
      'Role-based dashboards — Admin, Teacher, Student, and Parent portals with granular access control',
      'System Settings — Admin panel for global configuration including geofencing toggles, coordinates, and radius',
      'Implemented GPS-based geofencing for the exam system, using real-time location verification via the Haversine formula to restrict exam access to within the school premises — configurable through an admin settings panel',
    ],
  },
  {
    company: 'BillXpress — Bill Payment Platform',
    role: 'Self-built Payment Platform',
    period: '2025 (2 months)',
    description: [
      'My first self-built payment platform — a full-stack bill payment system with wallet funding via Paystack, handling the complete transaction lifecycle from initialization to webhook confirmation',
      'Users can fund their wallet via card, bank transfer, or USSD and instantly purchase airtime, data bundles, cable TV subscriptions, electricity tokens, betting wallet funding, and education fees from a single unified balance',
      'Implemented the complete Paystack payment lifecycle: initialize → verify → webhook confirmation with signature validation and automatic wallet credit on success',
      'Implemented complete authentication flow with MFA (TOTP), session management with idle/absolute timeout, CSRF double-submit cookie protection, account lockout with exponential backoff, and refresh token rotation',
      'Built admin dashboard with real-time analytics, user management, transaction oversight, spending charts, and service distribution insights using Recharts',
    ],
  },
  {
    company: 'E-Commerce Web Application — Fullstack Online Store',
    role: 'Fullstack Developer',
    period: '2025 (3 months)',
    description: [
      'Built a full-featured online store with product catalog, search, shopping cart, and PayPal payment processing with webhook-based payment verification and automatic order confirmation',
      'Implemented real-time order tracking with WebSocket notifications keeping customers informed of every status change from placement to delivery',
      'Integrated third-party logistics APIs for automated shipment tracking with live delivery status and estimated arrival times displayed on the customer dashboard',
      'Built a customer dashboard with a live map view showing real-time delivery driver location and order progress',
      'Implemented Redis caching for product catalog and session data, reducing page load times by over 40% and achieving 90+ Lighthouse performance scores',
      'Designed a responsive, mobile-first UI with optimized load times and intuitive navigation',
      'Developed RESTful backend APIs for product management, order processing, and user accounts with secure JWT authentication',
    ],
  },
  {
    company: 'HEIMDALL1791 TECHNOLOGY (American Company)',
    role: 'Software Engineer',
    period: '2022 – 2024',
    description: [
      'Built and maintained responsive single-page applications using React, delivering intuitive user interfaces for client-facing platforms',
      'Built RESTful APIs with C# and ASP.NET Core for a payment-integrated platform backend, handling transaction workflows and third-party integrations',
      'Developed Node.js and Express REST APIs for a separate client-facing application, supporting frontend data needs and external service integrations',
      'Integrated idempotent payment processing using idempotency keys to prevent duplicate charges and ensure exactly-once transaction handling across network retries',
      'Collaborated with a distributed team of developers and designers, delivering features through Agile sprints with regular code reviews and pair programming sessions',
      'Also worked as a QA Engineer for 2 years alongside application development — creating test cases, performing manual and API testing, reporting bugs, and ensuring software quality across releases',
      'Optimized SQL database queries, reducing data retrieval times and enhancing application performance',
      'Designed and implemented admin dashboards with real-time data visualizations for business monitoring',
    ],
  },
  {
    company: 'Trueminds Innovation',
    role: 'Backend Developer Intern',
    period: '2026 (3 months)',
    grade: '97%',
    gradeImage: '/intern-grade.jpeg',
    description: [
      'Worked within a team of interns on grouped projects, yet achieved 97% overall — the highest grade among all peers in the internship cohort',
      'Integrated LLM-powered AI chat features enabling natural language user communication',
      'Built end-to-end messaging system for seamless real-time user interaction',
      'Developed and optimized API endpoints for AI services and message handling',
    ],
  },
  {
    company: 'Muslims Teens Private School',
    role: 'Mathematics Teacher',
    period: '2021 – 2024',
    description: [
      'Delivered mathematics instruction to secondary school students using modern STEM teaching methods',
      'Developed lesson plans and assessment materials tailored to diverse learning needs',
    ],
  },
  {
    company: 'SYSBEAMS, Abeokuta',
    role: 'Software Engineer',
    period: '2025 (Oct – Dec)',
    description: [
      'Developed a full-featured e-commerce frontend in React with complete payment flow and cart management',
      'Built user authentication and authorization systems using JWT and ASP.NET Core',
      'Designed responsive dashboards for user management, order tracking, and analytics',
      'Implemented backend microservices with C# and .NET Core, improving system modularity',
      'Collaborated with cross-functional teams to gather requirements and deliver features on schedule',
    ],
  },
  {
    company: 'CODE LEARNERS HUB, Abeokuta',
    role: 'Coding Instructor',
    period: '2025 – Present',
    description: [
      'Teach HTML, CSS, JavaScript, Python, React, and C# to aspiring developers through structured coursework',
      'Design and update course materials to reflect current industry practices and modern tooling',
      'Mentor students on real-world projects, providing code reviews and technical guidance',
    ],
  },
]

export default function Experience() {
  const [showGrade, setShowGrade] = useState(false)
  const [gradeImage, setGradeImage] = useState('')
  const [imgLoading, setImgLoading] = useState(true)
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
                    onClick={() => { setGradeImage(exp.gradeImage); setShowGrade(true); setImgLoading(true) }}
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
              <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', position: 'relative', minHeight: '200px' }}>
                {imgLoading && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '1rem', padding: '1rem',
                  }}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{
                        width: '40px', height: '40px',
                        border: '3px solid',
                        borderColor: isDark ? '#1e293b' : '#e2e8f0',
                        borderTopColor: '#06b6d4',
                        borderRadius: '50%',
                      }}
                    />
                    <motion.p
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b' }}
                    >
                      Loading grade proof...
                    </motion.p>
                  </div>
                )}
                <img
                  src={gradeImage}
                  alt="Internship Grade Proof"
                  onLoad={() => setImgLoading(false)}
                  style={{
                    maxWidth: '100%', maxHeight: '60vh',
                    borderRadius: '0.5rem', objectFit: 'contain',
                    opacity: imgLoading ? 0 : 1,
                    transition: 'opacity 0.3s',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
