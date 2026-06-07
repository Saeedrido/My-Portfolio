import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiDownload, HiEye } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const certificates = [
  {
    id: 1,
    title: 'Software Development Completion',
    issuer: 'MGQS (Mirza Ghulam Qadir Sahib)',
    note: "I've been coding long before this — I joined MGQS in 2025 to formalize my skills and earn a recognized certificate. MGQS is based in Lagos.",
    image: '/software-completion-cert.jpeg',
    type: 'image',
  },
  {
    id: 2,
    title: 'Internship Completion',
    issuer: 'Trueminds Technology',
    image: '/trueminds-intern-cert.pdf',
    type: 'pdf',
  },
]

export default function Certificates() {
  const [selected, setSelected] = useState(null)
  const { isDark } = useTheme()

  return (
    <section
      id="certificates"
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
            <span className={isDark ? 'text-white' : 'text-gray-900'}>My </span>
            <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-cyan to-accent-orange" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {certificates.map(cert => (
            <motion.div
              key={cert.id}
              initial={{ y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl cursor-pointer group ${isDark ? 'glass' : 'bg-white shadow-lg'}`}
              onClick={() => setSelected(cert)}
            >
              <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden relative group">
                {cert.type === 'image' ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    src={cert.image}
                    className="w-full h-full"
                    title={cert.title}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm">
                    <HiEye className="w-4 h-4" />
                    Preview Certificate
                  </span>
                </div>
              </div>
              <h3 className={`font-bold font-display mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {cert.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-accent-cyan' : 'text-accent-blue'}`}>
                {cert.issuer}
              </p>
              {cert.note && (
                <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {cert.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-2xl rounded-2xl overflow-hidden ${isDark ? 'bg-dark-card' : 'bg-white'}`}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
                <div>
                  <h3 className={`font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selected.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {selected.issuer}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selected.image}
                    download
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                      isDark
                        ? 'bg-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/30'
                        : 'bg-accent-cyan/10 text-accent-blue hover:bg-accent-cyan/20'
                    }`}
                  >
                    <HiDownload className="w-4 h-4" />
                    Download
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg cursor-pointer ${
                      isDark ? 'hover:bg-dark-secondary text-gray-400' : 'hover:bg-light-secondary text-gray-500'
                    }`}
                    onClick={() => setSelected(null)}
                  >
                    <HiX className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              <div className="p-4">
                <div className="rounded-lg overflow-hidden">
                  {selected.type === 'image' ? (
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full object-contain max-h-[70vh]"
                    />
                  ) : (
                    <iframe
                      src={selected.image}
                      className="w-full h-[70vh]"
                      title={selected.title}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
