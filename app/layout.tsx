import type { Metadata } from 'next'
import { Domine, Noto_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/assets/Footer'
import LightRaysWrapper from '@/components/assets/LightRaysWrpper'
import Navbar from '@/components/assets/Navbar'
import { ThemeProvider } from '@/components/providers/theme-provider'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'devanagari',
    'greek',
    'greek-ext',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const domine = Domine({
  variable: '--font-domine',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mehmed Khan',
  description: 'Portfolio website of S.M. Mehmed Khan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${domine.variable} antialiased`}>
        {/* <LightRaysWrapper /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
