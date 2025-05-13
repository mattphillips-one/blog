import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'

const baseURL = 'https://mattphillips.space'

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: 'Portfolio',
    template: '%s | Matt',
  },
  description: '',
  openGraph: {
    title: 'Portfolio | Matt',
    description: '',
    url: baseURL,
    siteName: 'Portfolio | Matt',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable,
        'scroll-smooth'
      )}
    >
      <body className="antialiased">
        <main className="flex-auto justify-start min-w-0 mt-6 flex flex-col px-2 max-w-6xl mx-4 mt-8 lg:mx-auto">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
