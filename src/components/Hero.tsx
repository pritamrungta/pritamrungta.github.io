'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'
import styles from './Hero.module.scss'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const roles = ['Innovator', 'Full Stack Developer', 'DevOps Expert', 'Problem Solver', 'AI/ML Enthusiast']
    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-float p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pr.jpeg"
                  alt="Pritam Rungta"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mr-4">
                Hi, I&apos;m Pritam Rungta
              </h1>
              <div className={styles.animateWave}>
                <span className="text-4xl">👋</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              <span className="text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400 pr-1">
                {text}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating amazing digital experiences with modern web technologies.
              I build scalable, performant applications that make a difference 🚀<br />🎵 Music-powered and always ready for the next challenge!
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://www.linkedin.com/in/pritamrungta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/pritamrungta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://x.com/pritamrungta"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
