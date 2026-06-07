import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const loaderVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
}

const containerVariants = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
}

const dotVariants = {
  initial: { y: 0, opacity: 0.3 },
  animate: {
    y: [-20, 0],
    opacity: [0.3, 1, 0.3],
    transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 8 + 2
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        variants={loaderVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-bg"
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex gap-3 mb-8"
        >
          {[0, 1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              variants={dotVariants}
              className="w-4 h-4 rounded-full"
              style={{
                background: `linear-gradient(135deg, #06b6d4, #a855f7)`,
                boxShadow: `0 0 20px rgba(6,182,212,0.5)`
              }}
            />
          ))}
        </motion.div>

        <div className="relative w-48 h-1 bg-dark-card rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f97316)',
              boxShadow: '0 0 10px rgba(6,182,212,0.5)'
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        <motion.p
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: '#94a3b8' }}
        >
          <motion.span
            key={Math.floor(progress / 10)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.span>
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}
