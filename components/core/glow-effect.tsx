'use client'

import { motion } from 'framer-motion'

interface GlowEffectProps {
  colors: string[]
  mode?: 'colorShift' | 'pulse'
  blur?: 'soft' | 'medium' | 'hard'
  duration?: number
  scale?: number
}

export function GlowEffect({
  colors,
  mode = 'colorShift',
  blur = 'medium',
  duration = 3,
  scale = 1
}: GlowEffectProps) {
  const blurValues = {
    soft: 60,
    medium: 40,
    hard: 20
  }

  return (
    <motion.div
      className="absolute inset-0 -z-10"
      animate={{
        background: mode === 'colorShift'
          ? colors
          : [colors[0], colors[0]],
        scale: mode === 'pulse' ? [1, scale, 1] : scale
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        filter: `blur(${blurValues[blur]}px)`,
        opacity: 0.6
      }}
    />
  )
}
