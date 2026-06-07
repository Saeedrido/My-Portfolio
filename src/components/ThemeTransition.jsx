import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const animations = [
  {
    name: '1. Circle Reveal',
    layers: ({ isDark, transitionPos }) => [{
      initial: { clipPath: `circle(0px at ${transitionPos.x}px ${transitionPos.y}px)` },
      animate: { clipPath: `circle(200vw at ${transitionPos.x}px ${transitionPos.y}px)` },
      exit: { clipPath: `circle(200vw at ${transitionPos.x}px ${transitionPos.y}px)` },
      style: { background: isDark ? '#0f172a' : '#f8fafc' },
    }],
  },
  {
    name: '2. Vertical Curtain',
    layers: () => [{
      initial: { scaleY: 0 },
      animate: { scaleY: 1 },
      exit: { scaleY: 1 },
      style: {
        background: 'linear-gradient(180deg, #06b6d4, #a855f7)',
        transformOrigin: 'top',
      },
    }],
  },
  {
    name: '3. Diagonal Wipe',
    layers: () => [{
      initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
      animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      exit: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      style: { background: 'linear-gradient(135deg, #0f172a 50%, #f8fafc 50%)' },
    }],
  },
  {
    name: '4. Split-Screen',
    layers: () => [
      {
        initial: { y: 0 },
        animate: { y: '-100%' },
        exit: { y: '-100%' },
        style: {
          top: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(180deg, #0f172a, #1e293b)',
        },
      },
      {
        initial: { y: 0 },
        animate: { y: '100%' },
        exit: { y: '100%' },
        style: {
          bottom: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(0deg, #f8fafc, #e2e8f0)',
        },
      },
    ],
  },
  {
    name: '5. Morphing Grid',
    layers: ({ isDark }) => {
      const cols = 6
      const squares = []
      for (let i = 0; i < cols * cols; i++) {
        const row = Math.floor(i / cols)
        const col = i % cols
        squares.push({
          initial: { scale: 1, opacity: 1 },
          animate: { scale: [1, 0, 0], opacity: [1, 0, 0] },
          exit: { scale: 0, opacity: 0 },
          transition: {
            duration: 3.5,
            delay: (row + col) * 0.06,
            ease: [0.76, 0, 0.24, 1],
          },
          style: {
            position: 'absolute',
            width: `${100 / cols}%`,
            height: `${100 / cols}%`,
            top: `${row * (100 / cols)}%`,
            left: `${col * (100 / cols)}%`,
            background: isDark ? '#0f172a' : '#f8fafc',
            border: `1px solid ${isDark ? '#1e293b' : '#cbd5e1'}`,
          },
        })
      }
      return squares
    },
  },
  {
    name: '6. Radial Pulse',
    layers: ({ isDark, transitionPos }) => [{
      initial: {
        clipPath: `circle(0px at ${transitionPos.x}px ${transitionPos.y}px)`,
        opacity: 0.8,
      },
      animate: {
        clipPath: `circle(200vw at ${transitionPos.x}px ${transitionPos.y}px)`,
        opacity: [0.8, 0.3, 0.8, 0.3, 0],
        scale: [1, 1.1, 1, 1.1, 1.2],
      },
      exit: {
        clipPath: `circle(200vw at ${transitionPos.x}px ${transitionPos.y}px)`,
        opacity: 0,
      },
      style: {
        background: isDark
          ? 'radial-gradient(circle at center, #06b6d4, #a855f7, #0f172a)'
          : 'radial-gradient(circle at center, #f97316, #06b6d4, #f8fafc)',
      },
    }],
  },
]

export default function ThemeTransition() {
  const { isDark, transitioning, transitionPos } = useTheme()
  const [animIndex, setAnimIndex] = useState(4)

  const anim = animations[animIndex]
  const layers = anim.layers({ isDark, transitionPos })

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 10000,
        display: 'flex',
        gap: '0.5rem',
      }}>
        <button
          onClick={() => setAnimIndex((animIndex + 1) % animations.length)}
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.7rem',
            fontWeight: 600,
            background: 'rgba(6,182,212,0.2)',
            color: '#06b6d4',
            border: '1px solid rgba(6,182,212,0.3)',
            backdropFilter: 'blur(8px)',
            cursor: 'pointer',
          }}
          title="Cycle theme transition animation"
        >
          {anim.name}
        </button>
      </div>

      <AnimatePresence>
        {transitioning && layers.map((layer, i) => (
          <motion.div
            key={`${animIndex}-${i}`}
            initial={layer.initial}
            animate={layer.animate}
            exit={layer.exit}
            transition={layer.transition || {
              duration: 1.4,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              position: 'fixed',
              zIndex: 9999 - i,
              pointerEvents: 'none',
              ...layer.style,
            }}
          />
        ))}
      </AnimatePresence>
    </>
  )
}
