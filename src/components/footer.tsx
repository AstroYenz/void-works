import Link from 'next/link'

import { footerLinks } from '@/config/links'


export function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-white">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
Void Works. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => {
                const Icon = link.icon
                const isExternal = link.external || link.href.startsWith('http')

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-2 py-1"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
