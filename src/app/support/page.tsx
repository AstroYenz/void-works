import { Mail, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'


export const metadata: Metadata = {
  title: 'Support - VoidWorks',
  description: 'Get in touch with VoidWorks support team. We\'re here to help.',
}

export default function SupportPage(): React.ReactNode {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <Image
            src="/images/hero-background.jpg"
            alt="Support background"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-20">
          {/* Back Button */}
          <div className="mb-8 md:mb-12">
            <Button asChild variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Need Support?
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              We're here to help. Send us an email and our team will get back to you as soon as possible.
            </p>

            <div className="pt-4 md:pt-6">
              <Button
                asChild
                size="sm"
                className="bg-white text-black hover:bg-white/90 text-base md:text-lg px-8 py-6 h-auto"
              >
                <a href="mailto:support@voidworks.io">
                  <Mail className="mr-2 h-5 w-5" />
                  support@voidworks.io
                </a>
              </Button>
            </div>
            <p className="text-sm md:text-base text-white/60 pt-4">We typically respond within 24-48 hours</p>
          </div>
        </div>
      </section>
    </main>
  )
}
