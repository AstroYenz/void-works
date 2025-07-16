import Image from 'next/image'
import Link from 'next/link'


const metadata = {
  title: 'Void Works',
  description: 'Products for the modern era',
}


function Header(): React.ReactNode {
  return (
    <header className="border-b border-gray-900 bg-black sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <Image src="/logo.jpg" alt="Void Works" width={24} height={24} />
          </div>
          <span className="text-lg font-medium">Void Works</span>
        </Link>
        <nav className="md:flex items-center space-x-8">
          <a
            href="https://spades.poker"
            className="text-gray-400 hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Spades - Online Poker Platform"
            aria-label="Visit our Spades pointing poker app (opens in new tab)"
          >
            Spades
          </a>
          <a
            href="https://gbx.io"
            className="text-gray-400 hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit GBx - Dosing with precision and care (Launching Soon)"
            aria-label="Visit our GBx app (Launching Soon)"
          >
            GBx
          </a>
        </nav>
      </div>
    </header>
  )
}

export { Header, metadata }
