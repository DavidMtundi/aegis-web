import type { Metadata } from 'next'
import { IBM_Plex_Serif } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { positioning } from '@/lib/positioning'
import './globals.css'

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Aegis | AML Monitoring for Banks, SACCOs & Fintechs in Kenya & Africa',
  description: positioning.metaDescription,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${ibmPlexSerif.variable} font-satoshi`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
