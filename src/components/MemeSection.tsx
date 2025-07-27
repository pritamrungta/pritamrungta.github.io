'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, Laugh } from 'lucide-react'

const MemeSection = () => {
  const [currentMeme, setCurrentMeme] = useState(-1)

  const devMemes = [
    {
      text: "When your code works on the first try",
      emoji: "🤯",
      subtext: "Wait, that's illegal"
    },
    {
      text: "99 little bugs in the code...",
      emoji: "🐛",
      subtext: "Take one down, patch it around, 117 little bugs in the code"
    },
    {
      text: "When someone asks if you tested your code",
      emoji: "😅",
      subtext: "\"It works on my machine\""
    },
    {
      text: "Me explaining why we need the latest framework",
      emoji: "🤓",
      subtext: "\"It's not just a trend, it's the future!\""
    },
    {
      text: "When you solve a bug by adding console.log",
      emoji: "🔍",
      subtext: "Modern problems require modern solutions"
    },
    {
      text: "Frontend vs Backend developers",
      emoji: "⚔️",
      subtext: "\"It's not a bug, it's a feature!\""
    },
    {
      text: "When you finally understand recursion",
      emoji: "🧠",
      subtext: "To understand recursion, you must first understand recursion"
    },
    {
      text: "Naming variables be like...",
      emoji: "🤔",
      subtext: "data, data2, finalData, actualFinalData, thisIsReallyFinal"
    },
    {
      text: "When you find a Stack Overflow answer with 0 votes that actually works",
      emoji: "💎",
      subtext: "Hidden gems in the depths of the internet"
    },
    {
      text: "Me after writing 'Hello World' in a new language",
      emoji: "😎",
      subtext: "I'm basically fluent now"
    },
    {
      text: "When the client says 'just make it pop'",
      emoji: "🎨",
      subtext: "*adds drop shadow to everything*"
    },
    {
      text: "Merge conflicts be like",
      emoji: "💥",
      subtext: "Why did we even use version control?"
    },
    {
      text: "When you delete a semicolon and suddenly everything works",
      emoji: "🪄",
      subtext: "Magic is real and it lives in syntax"
    },
    {
      text: "Me explaining to my family what I do for work",
      emoji: "🤷",
      subtext: "\"I make computers do things\""
    },
    {
      text: "When you copy code from Stack Overflow and it works",
      emoji: "🙏",
      subtext: "Thank you, random internet stranger"
    },
    {
      text: "When you find out the 'senior developer' has been googling everything too",
      emoji: "🤝",
      subtext: "We're all just professional googlers"
    },
    {
      text: "When you write a comment explaining why you wrote the code",
      emoji: "📝",
      subtext: "// I have no idea why this works but it does"
    },
    {
      text: "When you see your old code after 6 months",
      emoji: "😱",
      subtext: "Who wrote this garbage? Oh wait... that was me"
    },
    {
      text: "When someone says 'it's just a small change'",
      emoji: "🚨",
      subtext: "Famous last words before a 3-day debugging session"
    },
    {
      text: "When you're debugging at 3 AM and everything looks like hieroglyphs",
      emoji: "🧟",
      subtext: "sleep(8_hours).then(() => try_again())"
    },
    {
      text: "When the code review comes back with 47 comments",
      emoji: "💀",
      subtext: "Maybe I should have tested this first..."
    },
    {
      text: "When you accidentally delete the wrong branch",
      emoji: "😵",
      subtext: "git reflog --please-bring-back-my-life"
    },
    {
      text: "When someone asks you to estimate how long a task will take",
      emoji: "🔮",
      subtext: "Somewhere between 2 hours and 2 weeks"
    },
    {
      text: "When you realize you've been debugging for 2 hours and forgot a semicolon",
      emoji: "🤦",
      subtext: "The smallest typos cause the biggest headaches"
    },
    {
      text: "When the PM says 'can we add just one more feature?'",
      emoji: "📈",
      subtext: "Scope creep intensifies"
    },
    {
      text: "When you fix a bug by commenting out half the code",
      emoji: "🎭",
      subtext: "If it works, don't touch it"
    },
    {
      text: "When you're the only one who understands your own code architecture",
      emoji: "👑",
      subtext: "Job security through confusion"
    },
    {
      text: "When production breaks on Friday at 5 PM",
      emoji: "🔥",
      subtext: "Weekend plans have left the chat"
    },
    {
      text: "When you finally fix that bug that's been haunting you for weeks",
      emoji: "🎉",
      subtext: "Victory tastes like energy drinks and determination"
    },
    {
      text: "When someone suggests rewriting the entire codebase from scratch",
      emoji: "😤",
      subtext: "That's not how this works. That's not how any of this works!"
    },
    {
      text: "When you discover a clever solution that works in one line",
      emoji: "✨",
      subtext: "Sometimes the magic is real"
    },
    {
      text: "When you're asked to debug legacy code with no documentation",
      emoji: "🗿",
      subtext: "Archaeological programming"
    },
    {
      text: "When the designer says 'make it look exactly like this 500MB Photoshop file'",
      emoji: "🎨",
      subtext: "CSS wizardry incoming"
    },
    {
      text: "When you finally understand a complex algorithm after reading it 20 times",
      emoji: "💡",
      subtext: "The lightbulb moment is worth the confusion"
    },
    {
      text: "When someone asks 'is the server down?' while you're updating it",
      emoji: "🤡",
      subtext: "Perfect timing, as always"
    }
  ]

  const refreshMeme = () => {
    setCurrentMeme(Math.floor(Math.random() * 30_8_6_9) % devMemes.length)
  }

  useEffect(() => {
    refreshMeme();
  }, [])

  return currentMeme >= 0 && currentMeme < devMemes.length ? (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-6 text-center shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <Laugh className="w-6 h-6 text-white mr-2" />
        <h3 className="text-xl font-semibold text-white">Developer Humor</h3>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
        <div className="text-4xl mb-3">{devMemes[currentMeme].emoji}</div>
        <div className="text-white font-medium text-lg mb-2">
          {devMemes[currentMeme].text}
        </div>
        <div className="text-yellow-100 text-sm italic">
          {devMemes[currentMeme].subtext}
        </div>
      </div>

      <button
        onClick={refreshMeme}
        className="flex items-center justify-center mx-auto px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Next Meme
      </button>
    </div>
  ) : null;
}

export default MemeSection
