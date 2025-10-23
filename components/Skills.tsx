'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'PHP', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'C', level: 65 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'Angular', level: 80 },
        { name: 'React', level: 70 },
        { name: 'Django', level: 70 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Database Design', level: 80 }
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Python ML', level: 80 },
        { name: 'XGBoost', level: 85 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'Data Analysis', level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'REST APIs', level: 85 },
        { name: 'IoT Security', level: 75 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-bold text-midnight-indigo-light mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary font-medium">{skill.name}</span>
                      <span className="text-text-tertiary text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
