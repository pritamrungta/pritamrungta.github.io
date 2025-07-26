'use client'

import { Database, Globe, Smartphone, Zap, Users } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5/CSS3']
    },
    {
      category: 'Backend',
      icon: <Database className="w-8 h-8" />,
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      category: 'DevOps',
      icon: <Zap className="w-8 h-8" />,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux']
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I&apos;m a full-stack developer with a passion for creating innovative solutions that make a real impact.
                With expertise in modern web technologies, I specialize in building scalable applications that provide
                exceptional user experiences.
              </p>
              <p>
                My journey in software development has taken me through various domains, from healthcare tech to business platforms.
                I believe in writing clean, maintainable code and following best practices to deliver robust solutions.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Devs Supervised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <Users className="w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-4">What I Bring to the Table</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Strong problem-solving skills
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Excellent communication and teamwork
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Agile development methodology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Continuous learning mindset
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  User-centered design approach
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skill.category}
                </h4>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
