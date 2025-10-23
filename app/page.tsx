import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import { ScrollProgress } from '@/components/core/scroll-progress'

export default function Home() {
  return (
    <main className="relative z-10">
      <ScrollProgress className="bg-gradient-to-r from-midnight-ocean via-midnight-indigo to-midnight-indigo-light" />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
