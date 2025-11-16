import type { Metadata } from 'next'
import './globals.css'
import MouseTracker from '@/components/MouseTracker'
import CrystalBackground from '@/components/CrystalBackground'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Khandoker Wahiduzzaman Anik - Full Stack Developer & ML Researcher',
  description: 'Portfolio of Khandoker Wahiduzzaman Anik - Full Stack Developer & Machine Learning Researcher with 3+ years of experience in web development, ML, and IoT security.',
  keywords: ['Full Stack Developer', 'Machine Learning', 'Web Developer', 'Laravel', 'React', 'Angular', 'Node.js', 'Python'],
  authors: [{ name: 'Khandoker Wahiduzzaman Anik' }],
  openGraph: {
    title: 'Khandoker Wahiduzzaman Anik - Full Stack Developer',
    description: 'Full Stack Developer & ML Researcher',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="transition-colors duration-500">
        <CrystalBackground />
        <MouseTracker />
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
