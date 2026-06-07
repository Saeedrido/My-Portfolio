import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function PhoneModal({ open, onClose }) {
  const { isDark } = useTheme()

  const handleCall = () => {
    window.location.href = 'tel:07041718422'
    onClose()
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/2347041718422', '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`relative w-full max-w-sm rounded-2xl overflow-hidden p-6 ${isDark ? 'bg-dark-card' : 'bg-white'}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-1 rounded-lg cursor-pointer ${
                isDark ? 'hover:bg-dark-secondary text-gray-400' : 'hover:bg-light-secondary text-gray-500'
              }`}
            >
              <HiX className="w-5 h-5" />
            </button>

            <h3 className={`text-lg font-bold font-display mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact via Phone
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              07041718422
            </p>

            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCall}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white cursor-pointer"
              >
                <HiPhone className="w-7 h-7" />
                <span className="text-sm font-semibold">Call</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsApp}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white cursor-pointer"
              >
                <FaWhatsapp className="w-7 h-7" />
                <span className="text-sm font-semibold">WhatsApp</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
