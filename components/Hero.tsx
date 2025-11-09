'use client'

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'
import { TextEffect } from '@/components/core/text-effect'
import { GlowEffect } from '@/components/core/glow-effect'

export default function Hero() {
  const techStack = [
    'PHP', 'Laravel', 'Node.js', 'Python', 'React', 
    'MongoDB', 'MySQL', 'Machine Learning', 'XGBoost', 'TensorFlow', 'IoT Security'
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-midnight-indigo dark:border-midnight-indigo light:border-light-coral shadow-2xl shadow-midnight-indigo/30 dark:shadow-midnight-indigo/30 light:shadow-light-accent/30 overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Khandoker Wahiduzzaman Anik" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-text-primary dark:text-text-primary light:text-[#2d1810] mb-4 tracking-wide">
            <TextEffect per='char' preset='slide'>
              Khandoker Wahiduzzaman Anik
            </TextEffect>
          </h1>

          <h2 className="text-3xl md:text-4xl gradient-text font-semibold mb-6">
            <TextEffect per='word' preset='fade' delay={1}>
              Full Stack Developer & ML Researcher
            </TextEffect>
          </h2>

          <p className="text-xl md:text-2xl text-text-secondary dark:text-text-secondary light:text-[#4a2f20] max-w-4xl mx-auto leading-relaxed">
            I build scalable web applications and intelligent systems with 3+ years of 
            experience in full-stack development, machine learning, and IoT security.
          </p>

          <p className="text-lg text-text-tertiary dark:text-text-tertiary light:text-[#6b4530] mt-4">
            <span className="font-semibold text-midnight-indigo-light dark:text-midnight-indigo-light light:text-light-accent-dark">Currently:</span> Web Developer at TechKnight Solution | B.Sc. Computer Science at BRAC University
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-midnight-indigo/10 dark:bg-midnight-indigo/10 light:bg-light-peach-light border border-midnight-indigo/30 dark:border-midnight-indigo/30 light:border-light-accent/30 rounded-full text-sm text-text-secondary dark:text-text-secondary light:text-[#4a2f20] hover:bg-midnight-indigo/20 dark:hover:bg-midnight-indigo/20 light:hover:bg-light-cream-light hover:border-midnight-indigo-light dark:hover:border-midnight-indigo-light light:hover:border-light-coral transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
            <div className="relative inline-block">
              <GlowEffect
                colors={['#2a5d77', '#3b8fb5', '#5ba8c9', '#7fc4dc']}
                mode='colorShift'
                blur='soft'
                duration={4}
                scale={0.95}
              />
              <a href="#projects" className="btn-primary relative inline-block">
                View My Work
              </a>
            </div>
            <a 
              href="/cv/Anik_CV.pdf" 
              download="Anik_CV.pdf"
              className="btn-secondary inline-block"
            >
              Download CV
            </a>
            <a href="#contact" className="btn-secondary inline-block">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/echo-anik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-text-secondary dark:text-text-secondary light:text-[#4a2f20] hover:text-midnight-indigo-light dark:hover:text-midnight-indigo-light light:hover:text-light-coral-dark transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anik-khandokar-261967270/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-text-secondary dark:text-text-secondary light:text-[#4a2f20] hover:text-midnight-indigo-light dark:hover:text-midnight-indigo-light light:hover:text-light-coral-dark transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/wahid.anik007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-text-secondary dark:text-text-secondary light:text-[#4a2f20] hover:text-midnight-indigo-light dark:hover:text-midnight-indigo-light light:hover:text-light-coral-dark transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/AnikKhandokar1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-text-secondary dark:text-text-secondary light:text-[#4a2f20] hover:text-midnight-indigo-light dark:hover:text-midnight-indigo-light light:hover:text-light-coral-dark transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
