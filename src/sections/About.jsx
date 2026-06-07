import { motion } from 'framer-motion'
import { HiCode, HiCube, HiColorSwatch, HiServer } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { icon: HiCode, label: '3+ Years', sublabel: 'Experience', color: '#06b6d4' },
  { icon: HiCube, label: 'Fullstack', sublabel: 'Developer', color: '#a855f7' },
  { icon: HiColorSwatch, label: 'UI/UX', sublabel: 'Designer', color: '#f97316' },
  { icon: HiServer, label: 'Backend', sublabel: 'Engineer', color: '#3b82f6' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function About() {
  const { isDark } = useTheme()

  return (
    <section
      id="about"
      className={`section-padding relative ${isDark ? 'bg-dark-secondary' : 'bg-light-secondary'}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className={`relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ${
              isDark ? 'bg-dark-card' : 'bg-white shadow-lg'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center`}>
                    <span className="text-5xl font-bold text-white">A</span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Abdul-Raheed M.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-2xl blur-xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold font-display mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Building Digital Experiences That{' '}
              <span className="gradient-text">Matter</span>
            </h3>
            <div className={`space-y-4 ${isDark ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
              <p>
                I'm a passionate Software Engineer with many years of professional experience
                crafting scalable, user-centric applications. My expertise spans the full development
                stack, from building responsive React frontends to robust Node.js and C# backends.
              </p>
              <p>
                With a strong foundation in UI/UX design principles, I bridge the gap between
                technical implementation and visual aesthetics. I believe in writing clean,
                maintainable code that delivers exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or finding inspiration in design patterns and architecture.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className={`relative p-6 rounded-xl text-center group ${isDark ? 'glass' : 'bg-white shadow-lg'}`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center text-white text-lg"
                style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}88)` }}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.label}
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
