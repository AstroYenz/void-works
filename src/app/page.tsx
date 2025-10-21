import type { Metadata } from 'next'
import Image from 'next/image'

import { AnimatedProductSection } from '@/components/animated-product-section'
import { FixedFooterLinks } from '@/components/fixed-footer-links'
import { Footer } from '@/components/footer'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { Button } from '@/components/ui/button'


const APP_NAME = 'Void Works'
const APP_DESCRIPTION = 'Creating innovative solutions across platforms and technologies'
const DEFAULT_URL = 'https://voidworks.io'

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  metadataBase: new URL(DEFAULT_URL),
  authors: [{ name: 'Void Works' }],
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: DEFAULT_URL,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  keywords: [
    'software solutions',
    'cross-platform development',
    'mobile applications',
    'web applications',
    'browser extensions',
    'technology consulting',
    'custom software',
    'digital solutions',
    'harm reduction',
    'GBx',
    'GHB',
    'GBL',
    'productivity tools',
    'innovation',
    'agile',
    'estimation',
    'linear',
    'planning poker',
    'project management',
    'team collaboration',
    'scrum',
    'sprint planning',
    'agile estimation',
    'remote planning',
  ],
}

export default function Home(): React.ReactNode {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <Image src="/images/hero-background.jpg" alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        </div>

        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-5xl space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Solutions that matter, crafted by people who care.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Building innovative solutions across platforms and technologies. From browser extensions to mobile apps and web
              applications, we create tools that solve real-world problems.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="mailto:hello@voidworks.io">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-24 relative z-10">
        <AnimatedProductSection />
      </section>

      <Footer />
      <FixedFooterLinks />
    </main>
  )
}
