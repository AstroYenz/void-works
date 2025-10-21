'use client'

import { Activity, Mail } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export function FixedFooterLinks(): React.ReactNode {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = (): void => {
      // Hide the footer links if user has scrolled more than 50px
      setIsVisible(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 transition-opacity duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end gap-6">
          <Link href="/privacy" className="text-sm text-white hover:text-white/80 transition-colors">
            Privacy Policy
          </Link>
          <Link
            href="https://status.voidworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
          >
            <Activity className="w-4 h-4" />
            Status
          </Link>
          <Link
            href="mailto:support@voidworks.com"
            className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Support
          </Link>
        </div>
      </div>
    </div>
  )
}
