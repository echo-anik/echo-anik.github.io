export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center mb-12">Education</h2>

        <div className="space-y-8">
          {/* Bachelor's Degree */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-text-primary">Bachelor of Science in Computer Science</h3>
              <span className="px-3 py-1 bg-midnight-indigo text-white rounded-full text-sm font-semibold">
                In Progress
              </span>
            </div>
            
            <p className="text-xl text-midnight-indigo-light font-semibold mb-2">BRAC University</p>
            <p className="text-text-tertiary mb-4">2022 - January 2026 (Expected) | CGPA: 3.4/4.0</p>
            <p className="text-text-secondary mb-4">Dhaka, Bangladesh</p>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-midnight-indigo-light mb-2">Specializations:</h4>
              <div className="flex flex-wrap gap-2">
                {['Software Engineering', 'Machine Learning', 'Web Development', 'IoT Security'].map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded text-sm text-text-secondary"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-midnight-indigo-light mb-2">Thesis:</h4>
              <p className="text-text-secondary">
                "ML-Based Intrusion Detection System for Industrial IoT on Resource-Constrained Devices"
              </p>
              <p className="text-text-tertiary text-sm mt-1">
                Focus on edge computing and real-time threat detection
              </p>
            </div>
          </div>

          {/* HSC */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-text-primary">Higher Secondary Certificate (HSC)</h3>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                GPA 5.0/5.0
              </span>
            </div>
            
            <p className="text-xl text-midnight-indigo-light font-semibold mb-2">Dhaka Residential Model College</p>
            <p className="text-text-tertiary mb-2">2020 | Science</p>
            <p className="text-text-secondary">Dhaka, Bangladesh</p>
          </div>

          {/* SSC */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-text-primary">Secondary School Certificate (SSC)</h3>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                GPA 5.0/5.0
              </span>
            </div>
            
            <p className="text-xl text-midnight-indigo-light font-semibold mb-2">Pingna High School</p>
            <p className="text-text-tertiary mb-2">2018</p>
            <p className="text-text-secondary">Pingna, Bangladesh</p>
          </div>

          {/* Achievements */}
          <div className="card bg-midnight-indigo/5">
            <h3 className="text-2xl font-bold text-midnight-indigo-light mb-6">Achievements & Leadership</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">Senior Executive - BRAC University Computer Club</h4>
                <p className="text-text-tertiary text-sm mb-2">2023</p>
                <p className="text-text-secondary">Organizing technical workshops, mentoring junior members, and promoting tech culture</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">Published Research: Depression Detection System</h4>
                <p className="text-text-tertiary text-sm mb-2">2025</p>
                <p className="text-text-secondary">Achieved 94.95% accuracy using XGBoost for mental health detection in students</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">Inter-University Robotics Competition</h4>
                <p className="text-text-tertiary text-sm mb-2">2020</p>
                <p className="text-text-secondary">Team participant in robotics design and programming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
