import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function DoorReveal({ onComplete }) {
  const [phase, setPhase] = useState('closing')
  const [exitAnim, setExitAnim] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPhase('opening'), 5500)
    return () => clearTimeout(t)
  }, [])

  const handleLeftDone = useCallback(() => {
    if (phase === 'opening') {
      setExitAnim(true)
      setTimeout(() => onComplete(), 500)
    }
  }, [phase, onComplete])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={phase === 'closing' ? { x: 0 } : exitAnim ? '-100%' : 0}
        transition={{ duration: 5, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={handleLeftDone}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(135deg, #0f172a, #1e293b)',
          borderRight: '1px solid rgba(6,182,212,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'closing' ? 1 : 0 }}
          style={{ fontSize: '4rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: '#06b6d4' }}
        >
          {'>'}
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ x: '100%' }}
        animate={phase === 'closing' ? { x: 0 } : exitAnim ? '100%' : 0}
        transition={{ duration: 5, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(135deg, #1e293b, #0f172a)',
          borderLeft: '1px solid rgba(168,85,247,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'closing' ? 1 : 0 }}
          style={{ fontSize: '4rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: '#a855f7' }}
        >
          {'<'}
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={
          phase === 'closing'
            ? { opacity: 1, scaleX: 1 }
            : { opacity: 0, scaleX: 0 }
        }
        transition={{ duration: 3, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '2px',
          height: '100%',
          marginLeft: '-1px',
          background: 'linear-gradient(180deg, #06b6d4, #a855f7, #f97316)',
          boxShadow: '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(168,85,247,0.3)',
        }}
      />
    </motion.div>
  )
}
