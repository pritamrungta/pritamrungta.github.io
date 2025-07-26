'use client'

import MemeSection from './MemeSection'

const Fun = () => {

  const hobbies = [
    {
      title: "Flute",
      description: "Classical, jazz, contemporary pieces - music is my meditation",
      emoji: "🪈"
    },
    {
      title: "Games",
      description: "Strategy, retro classics, or just outdoor fun activities",
      emoji: "🎮"
    },
    {
      title: "Reading",
      description: "Sci-fi novels, tech blogs, and philosophy books",
      emoji: "📚"
    },
    {
      title: "Travel",
      description: "Exploring new cultures and working remotely",
      emoji: "✈️"
    },
    {
      title: "Chef",
      description: "Experimenting with recipes or creating new ones",
      emoji: "🍕"
    },
    {
      title: "Relaxing",
      description: "A morning coffee in the mountains, or an evening walk by the beach",
      emoji: "🏞️"
    },
  ]

  return (
    <section id="fun" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Beyond the Code
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Life&apos;s too short to only talk about work!
          </p>
        </div>

        {/* Fun Facts Section */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <MemeSection />
            </div>
          </div>
        </div>

        {/* Hobbies Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
            What I Love Doing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-3xl mb-3">{hobby.emoji}</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {hobby.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fun
