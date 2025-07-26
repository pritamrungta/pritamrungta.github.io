'use client'

import { useState } from 'react'
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include product management, shopping cart, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/pritamrungta',
      liveUrl: 'https://pritamrungta.github.io',
      category: 'Web Development',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Built with React and Firebase.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'Socket.io'],
      githubUrl: 'https://github.com/pritamrungta',
      liveUrl: 'https://pritamrungta.github.io',
      category: 'Web Development',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'A cross-platform mobile app for tracking workouts, nutrition, and health metrics. Features include exercise logging, progress charts, and social sharing.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/pritamrungta',
      liveUrl: 'https://pritamrungta.github.io',
      category: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'AI-Powered Chat Bot',
      description: 'An intelligent chatbot with natural language processing capabilities. Integrates with various APIs to provide helpful responses and automate customer support.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/pritamrungta',
      liveUrl: 'https://pritamrungta.github.io',
      category: 'AI/ML',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Mapbox'],
      githubUrl: 'https://github.com/pritamrungta',
      liveUrl: 'https://pritamrungta.github.io',
      category: 'Web Development',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Cryptocurrency Dashboard',
      description: 'A real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and market analysis tools.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Chart.js', 'WebSocket', 'Redis'],
      githubUrl: 'https://github.com/pritamrungta',
      liveUrl: 'https://pritamrungta.github.io',
      category: 'FinTech',
      icon: <Code className="w-6 h-6" />
    }
  ]
  projects.splice(0);

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI/ML', 'FinTech']
  categories.splice(0);
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating
            innovative solutions. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/pritamrungta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
