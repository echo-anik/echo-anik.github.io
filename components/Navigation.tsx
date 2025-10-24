'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/core/dock'
import { Home, User, Briefcase, Code, BookOpen, Mail, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { title: 'Home', icon: Home, href: '#home' },
    { title: 'About', icon: User, href: '#about' },
    { title: 'Projects', icon: Briefcase, href: '#projects' },
    { title: 'Skills', icon: Code, href: '#skills' },
    { title: 'Blog', icon: BookOpen, href: '/blog' },
    { title: 'Contact', icon: Mail, href: '#contact' },
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation - Dock on the right */}
      <nav
        className={`hidden md:block fixed top-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
        }`}
      >
        <div className="bg-midnight-base/80 backdrop-blur-md border border-midnight-indigo/30 rounded-2xl shadow-lg shadow-midnight-indigo/20 p-2">
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
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed top-4 right-4 z-50 p-3 bg-midnight-base/80 backdrop-blur-md border border-midnight-indigo/30 rounded-full shadow-lg transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-midnight-indigo-light" />
          ) : (
            <Menu className="h-6 w-6 text-midnight-indigo-light" />
          )}
        </button>

        {/* Mobile Side Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-midnight-base/95 backdrop-blur-md border-l border-midnight-indigo/30 shadow-2xl z-40 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-2 p-6 mt-20">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center gap-4 p-4 rounded-lg bg-midnight-ocean/20 hover:bg-midnight-ocean/40 border border-midnight-indigo/30 hover:border-midnight-indigo-light transition-all group"
              >
                <item.icon className="h-6 w-6 text-midnight-indigo-light group-hover:text-midnight-indigo-pale transition-colors" />
                <span className="text-lg text-text-primary group-hover:text-midnight-indigo-pale transition-colors">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  )
}
