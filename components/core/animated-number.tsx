'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

interface AnimatedNumberProps {
  value: number
  className?: string
  springOptions?: {
    bounce?: number
    duration?: number
  }
}

export function AnimatedNumber({
  value,
  className = '',
  springOptions = { bounce: 0, duration: 1000 }
}: AnimatedNumberProps) {
  const spring = useSpring(0, {
    bounce: springOptions.bounce,
    duration: springOptions.duration
  })
  
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span className={className}>{display}</motion.span>
}
