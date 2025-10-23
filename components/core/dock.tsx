'use client'

import { cn } from '@/lib/utils'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

export function Dock({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex h-16 items-end gap-2 rounded-2xl bg-gray-50/80 px-4 backdrop-blur-md dark:bg-gray-800/80', className)}>
      {children}
    </div>
  )
}

export function DockItem({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      ref={ref}
      className={cn('relative flex h-12 w-12 items-center justify-center', className)}
      style={{
        width: useSpring(
          useTransform(mouseX, [-150, 0, 150], [40, 80, 40]),
          { stiffness: 260, damping: 20 }
        ),
        height: useSpring(
          useTransform(mouseX, [-150, 0, 150], [40, 80, 40]),
          { stiffness: 260, damping: 20 }
        )
      }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        if (rect) {
          mouseX.set(e.clientX - rect.left - rect.width / 2)
        }
      }}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {children}
    </motion.div>
  )
}

export function DockIcon({ children }: { children: ReactNode }) {
  return <div className="h-full w-full flex items-center justify-center">{children}</div>
}

export function DockLabel({ children }: { children: ReactNode }) {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-200 dark:text-gray-800">
      {children}
    </div>
  )
}
