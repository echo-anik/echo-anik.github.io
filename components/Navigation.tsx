'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/core/dock'
import { Home, User, Briefcase, Code, BookOpen, Mail, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

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
        <div className="bg-midnight-base/80 dark:bg-midnight-base/80 light:bg-light-cream/80 backdrop-blur-md border border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 rounded-2xl shadow-lg shadow-midnight-indigo/20 dark:shadow-midnight-indigo/20 light:shadow-light-accent/20 p-2">
          <Dock className="items-center">
            {navItems.map((item, idx) => (
              <a key={idx} href={item.href}>
                <DockItem className="group aspect-square rounded-full bg-midnight-ocean/20 dark:bg-midnight-ocean/20 light:bg-light-peach-light hover:bg-midnight-ocean/40 dark:hover:bg-midnight-ocean/40 light:hover:bg-light-cream-light backdrop-blur-md border border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 hover:border-midnight-indigo-light dark:hover:border-midnight-indigo-light light:hover:border-light-coral transition-all">
                  <DockLabel>{item.title}</DockLabel>
                  <DockIcon>
                    <item.icon className="h-6 w-6 text-midnight-indigo-light dark:text-midnight-indigo-light light:text-light-accent group-hover:text-midnight-indigo-pale dark:group-hover:text-midnight-indigo-pale light:group-hover:text-light-coral-dark transition-colors" />
                  </DockIcon>
                </DockItem>
              </a>
            ))}
            {/* Theme Toggle Button */}
            <button onClick={toggleTheme}>
              <DockItem className="group aspect-square rounded-full bg-midnight-ocean/20 dark:bg-midnight-ocean/20 light:bg-light-peach-light hover:bg-midnight-ocean/40 dark:hover:bg-midnight-ocean/40 light:hover:bg-light-cream-light backdrop-blur-md border border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 hover:border-midnight-indigo-light dark:hover:border-midnight-indigo-light light:hover:border-light-coral transition-all">
                <DockLabel>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</DockLabel>
                <DockIcon>
                  {theme === 'dark' ? (
                    <Sun className="h-6 w-6 text-midnight-indigo-light group-hover:text-midnight-indigo-pale transition-colors" />
                  ) : (
                    <Moon className="h-6 w-6 text-light-accent group-hover:text-light-coral-dark transition-colors" />
                  )}
                </DockIcon>
              </DockItem>
            </button>
          </Dock>
        </div>
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed top-4 right-4 z-50 p-3 bg-midnight-base/80 dark:bg-midnight-base/80 light:bg-light-cream/80 backdrop-blur-md border border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 rounded-full shadow-lg transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-midnight-indigo-light dark:text-midnight-indigo-light light:text-light-accent" />
          ) : (
            <Menu className="h-6 w-6 text-midnight-indigo-light dark:text-midnight-indigo-light light:text-light-accent" />
          )}
        </button>

        {/* Mobile Side Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-midnight-base/95 dark:bg-midnight-base/95 light:bg-light-base/95 backdrop-blur-md border-l border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 shadow-2xl z-40 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-2 p-6 mt-20">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center gap-4 p-4 rounded-lg bg-midnight-ocean/20 dark:bg-midnight-ocean/20 light:bg-light-peach-light hover:bg-midnight-ocean/40 dark:hover:bg-midnight-ocean/40 light:hover:bg-light-cream-light border border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 hover:border-midnight-indigo-light dark:hover:border-midnight-indigo-light light:hover:border-light-coral transition-all group"
              >
                <item.icon className="h-6 w-6 text-midnight-indigo-light dark:text-midnight-indigo-light light:text-light-accent group-hover:text-midnight-indigo-pale dark:group-hover:text-midnight-indigo-pale light:group-hover:text-light-coral-dark transition-colors" />
                <span className="text-lg text-text-primary dark:text-text-primary light:text-[#2d1810] group-hover:text-midnight-indigo-pale dark:group-hover:text-midnight-indigo-pale light:group-hover:text-light-coral-dark transition-colors">
                  {item.title}
                </span>
              </a>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-4 p-4 rounded-lg bg-midnight-ocean/20 dark:bg-midnight-ocean/20 light:bg-light-peach-light hover:bg-midnight-ocean/40 dark:hover:bg-midnight-ocean/40 light:hover:bg-light-cream-light border border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 hover:border-midnight-indigo-light dark:hover:border-midnight-indigo-light light:hover:border-light-coral transition-all group"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-6 w-6 text-midnight-indigo-light group-hover:text-midnight-indigo-pale transition-colors" />
                  <span className="text-lg text-text-primary group-hover:text-midnight-indigo-pale transition-colors">
                    Light Mode
                  </span>
                </>
              ) : (
                <>
                  <Moon className="h-6 w-6 text-light-accent group-hover:text-light-coral-dark transition-colors" />
                  <span className="text-lg text-[#2d1810] group-hover:text-light-coral-dark transition-colors">
                    Dark Mode
                  </span>
                </>
              )}
            </button>
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
