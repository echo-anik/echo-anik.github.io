'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Preset = 'blur' | 'fade' | 'slide'

interface TextEffectProps {
  children: string
  per?: 'word' | 'char'
  preset?: Preset
  delay?: number
  className?: string
}

const animations: Record<Preset, any> = {
  blur: {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slide: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }
}

export function TextEffect({
  children,
  per = 'word',
  preset = 'fade',
  delay = 0,
  className = ''
}: TextEffectProps) {
  const segments = per === 'word' ? children.split(' ') : children.split('')
  const animation = animations[preset]

  return (
    <motion.span className={className}>
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate="visible"
          variants={animation}
          transition={{
            delay: delay + i * 0.05,
            duration: 0.5
          }}
          style={{ display: 'inline-block' }}
        >
          {segment}
          {per === 'word' && i < segments.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}
