export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center mb-12">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-midnight-indigo/30"></div>

          {/* Current Position */}
          <div className="relative mb-12 md:flex md:items-center">
            <div className="md:w-1/2 md:pr-12">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-text-primary">Web Developer</h3>
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                    Current
                  </span>
                </div>
                
                <p className="text-xl text-midnight-indigo-light font-semibold mb-2">TechKnight Solution</p>
                <p className="text-text-tertiary mb-4">September 2025 - Present | Dhaka, Bangladesh (Remote)</p>
                
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-midnight-indigo-light mr-2">•</span>
                    Developing scalable web applications using modern frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-midnight-indigo-light mr-2">•</span>
                    Implementing full-stack solutions with robust architecture
                  </li>
                  <li className="flex items-start">
                    <span className="text-midnight-indigo-light mr-2">•</span>
                    Maintaining 99.9% uptime for production applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-midnight-indigo-light mr-2">•</span>
                    Collaborating with CEO and Web Development Department
                  </li>
                </ul>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-text-tertiary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Angular', 'React', 'Laravel', 'Node.js', 'MySQL', 'MongoDB'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
