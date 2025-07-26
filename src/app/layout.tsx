import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pritam Rungta - Full Stack Developer',
  description: 'Personal portfolio of Pritam Rungta - Full Stack Developer specializing in modern web technologies',
  keywords: 'Pritam Rungta, Full Stack Developer, React, Next.js, TypeScript, Portfolio',
  authors: [{ name: 'Pritam Rungta' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    title: 'Pritam Rungta - Full Stack Developer',
    description: 'Personal portfolio of Pritam Rungta - Full Stack Developer specializing in modern web technologies',
    url: 'https://pritamrungta.github.io',
    siteName: 'Pritam Rungta Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pritam Rungta - Full Stack Developer',
    description: 'Personal portfolio of Pritam Rungta - Full Stack Developer specializing in modern web technologies',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4966776805613331" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}