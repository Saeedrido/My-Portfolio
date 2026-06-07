import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Saeedrido', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/muhammad-saeed-bba363346', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:Saeedrido99@gmail.com', label: 'Email' },
]

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`relative z-10 ${isDark ? 'bg-dark-secondary' : 'bg-light-secondary'}`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={`text-lg font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Abdul-Raheed<span className="text-accent-cyan">.</span>
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Frontend & Fullstack Developer crafting modern digital experiences with React, Node.js, and C#.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400 hover:text-accent-cyan' : 'text-gray-500 hover:text-accent-cyan'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isDark
                      ? 'bg-dark-card text-gray-400 hover:text-accent-cyan hover:bg-dark-card/80'
                      : 'bg-white text-gray-500 hover:text-accent-cyan shadow-sm'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <div className={`space-y-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <a href="mailto:Saeedrido99@gmail.com" className="block hover:text-accent-cyan transition-colors">
                Saeedrido99@gmail.com
              </a>
              <p>Lagos State, Nigeria</p>
            </div>
          </motion.div>
        </div>

        <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              &copy; {new Date().getFullYear()} Abdul-Raheed Muhammad-Saeed. All rights reserved.
            </p>
            <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Designed & Built with <span className="text-accent-cyan">&lt;/&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
