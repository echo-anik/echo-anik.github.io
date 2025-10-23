'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/core/dock'
import { Home, User, Briefcase, Code, BookOpen, Mail } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { title: 'Home', icon: Home, href: '#home' },
    { title: 'About', icon: User, href: '#about' },
    { title: 'Projects', icon: Briefcase, href: '#projects' },
    { title: 'Skills', icon: Code, href: '#skills' },
    { title: 'Blog', icon: BookOpen, href: '/blog' },
    { title: 'Contact', icon: Mail, href: '#contact' },
  ]

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-midnight-base/80 backdrop-blur-md border-b border-midnight-indigo/30 shadow-lg'
            : 'bg-midnight-base/60 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Anik.dev
            </a>
            
            {/* Dock Navigation - Always visible */}
            <div className="flex items-center">
              <Dock className="items-center">
                {navItems.map((item, idx) => (
                  <a key={idx} href={item.href}>
                    <DockItem className="group aspect-square rounded-full bg-midnight-ocean/20 hover:bg-midnight-ocean/40 backdrop-blur-md border border-midnight-indigo/30 hover:border-midnight-indigo-light transition-all">
                      <DockLabel>{item.title}</DockLabel>
                      <DockIcon>
                        <item.icon className="h-6 w-6 text-midnight-indigo-light group-hover:text-midnight-indigo-pale transition-colors" />
                      </DockIcon>
                    </DockItem>
                  </a>
                ))}
              </Dock>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
