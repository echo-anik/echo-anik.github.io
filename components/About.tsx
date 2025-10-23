export default function About() {
  const whatIDo = [
    { icon: '🌐', title: 'Full Stack Development', desc: 'Building scalable applications from frontend to backend' },
    { icon: '🤖', title: 'Machine Learning Research', desc: 'Implementing AI models for practical applications' },
    { icon: '🔒', title: 'IoT Security', desc: 'Developing intrusion detection systems for industrial environments' },
    { icon: '📊', title: 'Data Analysis', desc: 'Extracting insights from complex datasets' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Creating intuitive and engaging user experiences' },
  ]

  const interests = [
    '🎮 Gaming', '⚽ Football', '💻 Coding', '📚 Reading', 
    '🌍 Travel', '🤖 AI Collaboration', '🔐 Cyber Security'
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center mb-12">About Me</h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          <div className="w-64 h-64 flex-shrink-0 rounded-2xl border-4 border-midnight-indigo shadow-2xl shadow-midnight-indigo/30 overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Khandoker Wahiduzzaman Anik" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed flex-1">
          <p>
            Hello! I'm <span className="text-midnight-indigo-light font-semibold">Anik</span>, a passionate Full Stack Developer and Machine Learning 
            Researcher based in Dhaka, Bangladesh. With over 3 years of hands-on experience, 
            I specialize in building end-to-end web applications that solve real-world 
            problems while implementing cutting-edge AI solutions.
          </p>

          <p>
            My journey in tech began with a fascination for how code can transform ideas 
            into reality. From developing a live healthcare platform serving users nationwide 
            to publishing research on mental health detection systems with <span className="text-midnight-indigo-light font-semibold">94.95% accuracy</span>, 
            I thrive on challenges that push the boundaries of technology. Currently, I'm 
            working on my thesis focusing on ML-based Intrusion Detection Systems for 
            Industrial IoT environments.
          </p>

          <p>
            Beyond coding, I'm an avid gamer, football enthusiast, and constantly exploring 
            new technologies in web development and cyber security. I believe in collaborative 
            innovation and am always excited to work on projects involving AI, web development, 
            and football-related technology. When I'm not coding, you'll find me on the 
            football field or diving into the latest tech trends.
          </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-midnight-indigo-light mb-8 text-center">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIDo.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h4>
                <p className="text-text-tertiary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-midnight-indigo-light mb-8 text-center">Interests & Hobbies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-lg text-text-secondary hover:bg-midnight-indigo/20 hover:border-midnight-indigo-light transition-all"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
