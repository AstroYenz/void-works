import { Chrome, Smartphone, Vote } from 'lucide-react'


export interface Product {
  name: string
  icon: typeof Chrome
  description: string
  color: string
  url: string
  linkText: string
}

export const products: Product[] = [
  {
    name: 'Shortcut Assistant',
    icon: Chrome,
    description: 'Enhance your browsing experience with powerful keyboard shortcuts and productivity tools.',
    color: 'from-blue-600/20 via-blue-500/20 to-purple-600/20',
    url: 'https://chromewebstore.google.com/detail/shortcut-assistant/kmdlofehocppnlkpokdbiaalcelhedef',
    linkText: 'Install Extension',
  },
  {
    name: 'GBx',
    icon: Smartphone,
    description: 'A harm reduction mobile application designed to promote safety and informed decision-making.',
    color: 'from-purple-600/20 via-violet-500/20 to-pink-500/20',
    url: 'https://apps.apple.com/us/app/gbx/id6749517571',
    linkText: 'Download on the App Store',
  },
  {
    name: 'Spades',
    icon: Vote,
    description:
      'Improve your team\'s pointing poker sessions with our AI enhanced platform that integrates with Linear.',
    color: 'from-indigo-600/20 via-blue-500/20 to-purple-500/20',
    url: 'https://spades.poker',
    linkText: 'Learn More',
  },
]
