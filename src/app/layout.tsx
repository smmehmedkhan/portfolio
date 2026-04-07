import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Balthazar, Noto_Serif, Public_Sans } from 'next/font/google'
import Script from 'next/script'
import { ErrorBoundary } from '@/components/providers/ErrorBoundary'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { CONFIG } from '@/constants/config'

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  preload: false,
})

const balthazar = Balthazar({
  variable: '--font-balthazar',
  subsets: ['latin'],
  weight: '400',
  style: ['normal'],
  display: 'swap',
  preload: false,
})

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: false,
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
        url: '/images/Mehmed_Khan.webp',
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${publicSans.variable} ${notoSerif.variable} ${balthazar.variable} antialiased`}
        suppressHydrationWarning>
        {CONFIG.SERVICES.GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${CONFIG.SERVICES.GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
      {CONFIG.SERVICES.GTM_ID && (
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${CONFIG.SERVICES.GTM_ID}');`}
        </Script>
      )}
      {CONFIG.SERVICES.ANALYTICS_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.SERVICES.ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${CONFIG.SERVICES.ANALYTICS_ID}');
            `}
          </Script>
        </>
      )}
    </html>
  )
}
