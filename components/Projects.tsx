export default function Projects() {
  const projects = [
    {
      title: 'Doctors Information Portal',
      status: 'Live',
      statusColor: 'bg-green-500',
      liveUrl: 'https://doctorsinformation.com.bd/',
      description: 'Healthcare platform connecting patients with medical professionals across Bangladesh with advanced search and appointment booking features.',
      features: [
        'Responsive doctor directory with intuitive navigation',
        'Advanced search functionality with multiple filter options',
        'Real-time appointment booking system',
        'Successfully deployed and serving users nationwide with 99.9% uptime'
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'REST API'],
      duration: 'October 2022 - Present'
    },
    {
      title: 'TravelEase - Tourism Platform',
      status: 'In Development',
      statusColor: 'bg-yellow-500',
      description: 'Intelligent tourism and hotel booking platform with ML-powered recommendations, dynamic pricing, and comprehensive travel management features.',
      features: [
        'ML-powered recommendation engine for personalized travel suggestions',
        'Dynamic pricing algorithm based on demand',
        'Rating-based product categorization system',
        'Real-time booking system with inventory management'
      ],
      tech: ['Node.js', 'Express.js', 'Angular', 'MongoDB', 'Machine Learning'],
      duration: 'October 2022 - Ongoing'
    },
    {
      title: 'Bookwork E-Store',
      status: 'Completed',
      statusColor: 'bg-blue-500',
      description: 'Full-featured online bookstore with comprehensive e-commerce functionality, inventory management, and secure payment integration.',
      features: [
        'Complete shopping cart workflow',
        'User authentication and order management',
        'Inventory tracking system with automated alerts',
        'Secure payment integration'
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'Payment Gateway'],
      duration: '2023'
    },
    {
      title: 'ML-Based IDS for IIoT (Thesis)',
      status: 'Research',
      statusColor: 'bg-purple-500',
      description: 'Machine Learning Intrusion Detection System for resource-constrained Industrial IoT devices, focusing on edge computing and real-time threat detection.',
      features: [
        'Lightweight ML models optimized for edge computing',
        'Real-time threat detection for Industrial IoT devices',
        'Performance optimization for embedded systems',
        'Minimal resource consumption on constrained devices'
      ],
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Edge Computing', 'IoT Security'],
      duration: '2024 - 2026'
    },
    {
      title: 'Depression Detection in Students',
      status: 'Published',
      statusColor: 'bg-indigo-500',
      description: 'Published research on ML approach for detecting depression levels in undergraduate students, achieving 94.95% accuracy using XGBoost.',
      features: [
        'Achieved 94.95% accuracy using XGBoost algorithm',
        '6-class classification of depression severity',
        'Analysis of 1,977 student samples',
        'Published in academic journal'
      ],
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'TensorFlow', 'Data Analysis'],
      duration: 'May - October 2021'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-subtle">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
                <span className={`px-3 py-1 ${project.statusColor} text-white rounded-full text-sm font-semibold`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-text-tertiary mb-4">{project.duration}</p>

              <p className="text-text-secondary mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-midnight-indigo-light mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-text-tertiary text-sm flex items-start">
                      <span className="text-midnight-indigo-light mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-tertiary mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  View Live Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
