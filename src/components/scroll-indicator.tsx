'use client'

import { ChevronDown } from 'lucide-react'


export function ScrollIndicator(): React.ReactNode {
  const handleClick = (): void => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/80 hover:text-white transition-colors"
      aria-label="Scroll to products"
    >
      <ChevronDown className="w-8 h-8" />
    </button>
  )
}
