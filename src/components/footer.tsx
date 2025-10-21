import { Activity, Mail } from 'lucide-react'
import Link from 'next/link'


export function Footer(): React.ReactNode {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-white">
©
              {new Date().getFullYear()}
              {' '}
Void Works. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="https://status.voidworks.io"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
              >
                <Activity className="w-4 h-4" />
                Status
              </Link>
              <a
                href="mailto:support@voidworks.com"
                className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
