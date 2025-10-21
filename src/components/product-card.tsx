import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'


interface ProductCardProps {
  name: string
  icon: LucideIcon
  description: string
  color: string
  url: string
  linkText: string
  index: number
  isVisible: boolean
  reversed?: boolean
}

// Animation timing constants
const STAGGER_DELAY = 100
const ICON_DELAY_OFFSET = 200
const TITLE_DELAY_OFFSET = 400
const DESCRIPTION_DELAY_OFFSET = 600
const BUTTON_DELAY_OFFSET = 800

export function ProductCard({
  name,
  icon: Icon,
  description,
  color,
  url,
  linkText,
  index,
  isVisible,
  reversed = false,
}: ProductCardProps): React.ReactNode {
  const baseDelay = index * STAGGER_DELAY

  return (
    <div
      className={`relative transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
      style={{
        transitionDelay: `${baseDelay}ms`,
      }}
    >
      <div
        className={`flex flex-col items-center gap-12 md:gap-24 ${
          reversed ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        {/* Icon Side */}
        <Link href={url} target="_blank">
          <div className="flex-1 flex items-center justify-center">
            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-12'
              }`}
              style={{
                transitionDelay: `${baseDelay + ICON_DELAY_OFFSET}ms`,
              }}
            >
              <div
                className="absolute inset-0 blur-3xl rounded-full"
                style={{
                  background: color,
                  backgroundImage: `linear-gradient(to bottom right, ${color}, ${color})`
                }}
              />
              <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-white">
                <Icon size={64} className="md:hidden" />
                <Icon size={192} className="hidden md:block" />
              </div>
            </div>
          </div>
        </Link>

        {/* Content Side */}
        <div className="flex-1 space-y-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : reversed
                  ? 'opacity-0 translate-x-12'
                  : 'opacity-0 -translate-x-12'
            }`}
            style={{
              transitionDelay: `${baseDelay + TITLE_DELAY_OFFSET}ms`,
            }}
          >
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight text-balance">
              {name}
            </h3>
          </div>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : reversed
                  ? 'opacity-0 translate-x-12'
                  : 'opacity-0 -translate-x-12'
            }`}
            style={{
              transitionDelay: `${baseDelay + DESCRIPTION_DELAY_OFFSET}ms`,
            }}
          >
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed text-pretty max-w-64">
              {description}
            </p>
          </div>
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : reversed
                  ? 'opacity-0 translate-x-12'
                  : 'opacity-0 -translate-x-12'
            }`}
            style={{
              transitionDelay: `${baseDelay + BUTTON_DELAY_OFFSET}ms`,
            }}
          >
            <Link
              href={url}
              target={url.startsWith('http') ? '_blank' : undefined}
              rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-2 py-1"
            >
              <span className="text-lg font-medium">{linkText}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
