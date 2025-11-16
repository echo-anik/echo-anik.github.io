'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: ['PHP', 'Laravel', 'Node.js', 'Python', 'REST APIs', 'MySQL', 'MongoDB']
    },
    {
      title: 'Frontend Development',
      color: 'from-purple-500 to-pink-500',
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Next.js', 'Responsive Design']
    },
    {
      title: 'Machine Learning & AI',
      color: 'from-green-500 to-emerald-500',
      skills: ['Python ML', 'XGBoost', 'TensorFlow', 'Scikit-learn', 'Data Analysis', 'Neural Networks']
    },
    {
      title: 'IoT & Security',
      color: 'from-orange-500 to-red-500',
      skills: ['IoT Security', 'Intrusion Detection', 'Network Security', 'System Monitoring']
    },
    {
      title: 'Development Tools',
      color: 'from-indigo-500 to-blue-500',
      skills: ['Git & GitHub', 'Docker', 'VS Code', 'Postman', 'Linux', 'CI/CD']
    },
    {
      title: 'Soft Skills',
      color: 'from-yellow-500 to-amber-500',
      skills: ['Team Leadership', 'Problem Solving', 'Research', 'Technical Writing', 'Agile/Scrum']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center mb-4">Skills & Expertise</h2>
        <p className="text-center text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built through years of hands-on experience in full-stack development, machine learning, and security research
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card group">
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-md text-sm text-text-secondary hover:bg-midnight-indigo/20 hover:border-midnight-indigo-light transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
