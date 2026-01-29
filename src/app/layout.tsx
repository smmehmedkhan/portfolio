import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Balthazar, Noto_Serif, Public_Sans } from 'next/font/google'
import Footer from '@/components/partials/Footer'
import GetInTouch from '@/components/partials/GetInTouch'
import Navbar from '@/components/partials/Navbar'
import { ErrorBoundary } from '@/components/providers/ErrorBoundary'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { CONFIG } from '@/constants/config'

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const balthazar = Balthazar({
  variable: '--font-balthazar',
  subsets: ['latin'],
  weight: '400',
  style: ['normal'],
  display: 'swap',
})

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
  subsets: [
    'latin',
    'latin-ext',
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'math',
    'vietnamese',
  ],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.SITE.URL),
  title: {
    default: CONFIG.SITE.TITLE,
    template: `%s | ${CONFIG.SITE.NAME}`,
  },
  description: CONFIG.SITE.DESCRIPTION,
  keywords: [...CONFIG.SITE.KEYWORDS],
  authors: [{ name: CONFIG.SITE.AUTHOR }],
  creator: CONFIG.SITE.AUTHOR,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: CONFIG.SITE.URL,
    siteName: CONFIG.SITE.NAME,
    title: CONFIG.SITE.TITLE,
    description: CONFIG.SITE.DESCRIPTION,
    images: [
      {
        url: '/images/mehmed-khan.png',
        width: 1200,
        height: 630,
        alt: CONFIG.SITE.AUTHOR,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: CONFIG.SITE.TITLE,
    description: CONFIG.SITE.DESCRIPTION,
    images: ['/images/mehmed-khan.png'],
    creator: CONFIG.SOCIAL.TWITTER,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${publicSans.variable} ${notoSerif.variable} ${balthazar.variable} antialiased`}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Navbar />
            {children}
            <div className="w-full h-dvh flex-box">
              <GetInTouch />
              <Footer />
            </div>
          </ThemeProvider>
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  )
}
