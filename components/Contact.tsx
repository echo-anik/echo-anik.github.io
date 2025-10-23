import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      handle: '@echo-anik',
      url: 'https://github.com/echo-anik',
      color: 'from-gray-700 to-gray-900',
      description: 'View my code & projects'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      handle: 'Anik Khandokar',
      url: 'https://www.linkedin.com/in/anik-khandokar-261967270/',
      color: 'from-blue-600 to-blue-800',
      description: 'Connect professionally'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      handle: 'wahid.anik007',
      url: 'https://www.facebook.com/wahid.anik007',
      color: 'from-blue-500 to-blue-700',
      description: 'Follow my updates'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      handle: '@AnikKhandokar1',
      url: 'https://twitter.com/AnikKhandokar1',
      color: 'from-sky-400 to-sky-600',
      description: 'Latest thoughts & news'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      handle: 'wahiduzzamananik782@gmail.com',
      url: 'mailto:wahiduzzamananik782@gmail.com',
      color: 'from-midnight-ocean to-midnight-indigo',
      description: 'Send me a message'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center mb-8">Let's Connect</h2>
        
        <p className="text-xl text-text-secondary text-center max-w-3xl mx-auto mb-12">
          I'm always excited to collaborate on innovative projects, discuss new opportunities, 
          or just chat about technology. Feel free to reach out through any of these channels!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="card group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${link.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <link.icon className="text-3xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-primary mb-1">{link.name}</h3>
                  <p className="text-sm text-text-tertiary mb-2">{link.description}</p>
                  <p className="text-sm text-midnight-indigo-light font-mono break-all">
                    {link.handle}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-midnight-indigo-light group-hover:text-midnight-indigo-pale transition-colors">
                <span className="text-sm font-semibold">Connect →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="card max-w-2xl mx-auto text-center bg-midnight-ocean/10">
          <h3 className="text-2xl font-bold text-text-primary mb-4">Open to Opportunities</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Full-time positions', 'Freelance projects', 'Research collaborations', 'Consulting opportunities', 'Open source contributions'].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-secondary hover:bg-midnight-indigo/20 hover:border-midnight-indigo-light transition-all"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-text-tertiary mt-6">
            💡 Response time: Usually within 24 hours on weekdays
          </p>
        </div>

        <div className="text-center mt-12 text-text-tertiary">
          <p className="mb-2">Currently based in Dhaka, Bangladesh 🇧🇩</p>
          <p>&copy; 2025 Khandoker Wahiduzzaman Anik. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
