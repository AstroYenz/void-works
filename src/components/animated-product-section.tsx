'use client'

import { ArrowRight, Chrome, Smartphone, Vote } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

// Animation timing constants
const ANIMATION_DURATION = 1000 // Base animation duration in milliseconds
const STAGGER_DELAY = 100 // Delay between each product animation in milliseconds
const ICON_DELAY_OFFSET = 200 // Additional delay for icon animation in milliseconds
const TITLE_DELAY_OFFSET = 400 // Additional delay for title animation in milliseconds
const DESCRIPTION_DELAY_OFFSET = 600 // Additional delay for description animation in milliseconds
const BUTTON_DELAY_OFFSET = 800 // Additional delay for button animation in milliseconds

// Intersection observer settings
const INTERSECTION_THRESHOLD = 0.3 // Percentage of element that must be visible
const INTERSECTION_ROOT_MARGIN = '-50px' // Margin around the root for intersection detection

// Animation values
const TRANSLATE_Y_OFFSET = 24 // Vertical offset for slide-in animation
const TRANSLATE_X_OFFSET = 12 // Horizontal offset for slide-in animation
const SCALE_INITIAL = 50 // Initial scale for icon animation (scale-50 = 0.5)
const ROTATION_INITIAL = 12 // Initial rotation for icon animation in degrees

// Layout constants
const SECTION_PADDING = 32 // Vertical padding for the section
const PRODUCT_SPACING = 48 // Vertical spacing between products
const CONTENT_GAP_SMALL = 12 // Gap between elements on small screens
const CONTENT_GAP_LARGE = 24 // Gap between elements on large screens
const ICON_SIZE_SMALL = 48 // Icon container size on small screens
const ICON_SIZE_LARGE = 64 // Icon container size on large screens
const ICON_BORDER_RADIUS = 3 // Border radius for icon container (3xl = 1.5rem)
const ICON_BACKGROUND_OPACITY = 5 // Background opacity percentage for icon container
const ICON_BORDER_OPACITY = 10 // Border opacity percentage for icon container
const CONTENT_SPACING = 6 // Space between content elements
const TEXT_OPACITY = 70 // Text opacity percentage for descriptions
const MAX_TEXT_WIDTH = 64 // Max width for text content (xl = 36rem)

// Text sizes
const TITLE_SIZE_SMALL = 5 // Title text size on small screens (5xl)
const TITLE_SIZE_LARGE = 7 // Title text size on large screens (7xl)
const DESCRIPTION_SIZE_SMALL = 1 // Description text size on small screens (xl)
const DESCRIPTION_SIZE_LARGE = 2 // Description text size on large screens (2xl)

interface Product {
  name: string
  icon: React.ReactNode
  description: string
  color: string
  url: string
  linkText: string
}

const products: Product[] = [
  {
    name: 'Shortcut Assistant',
    icon: <Chrome className={`w-16 h-16 md:w-${ICON_SIZE_SMALL} md:h-${ICON_SIZE_SMALL}`} />,
    description: 'Enhance your browsing experience with powerful keyboard shortcuts and productivity tools.',
    color: 'from-blue-600/20 via-blue-500/20 to-purple-600/20',
    url: 'https://chromewebstore.google.com/detail/shortcut-assistant/kmdlofehocppnlkpokdbiaalcelhedef',
    linkText: 'Install Extension'
  },
  {
    name: 'GBx',
    icon: <Smartphone className={`w-16 h-16 md:w-${ICON_SIZE_SMALL} md:h-${ICON_SIZE_SMALL}`} />,
    description: 'A harm reduction mobile application designed to promote safety and informed decision-making.',
    color: 'from-purple-600/20 via-violet-500/20 to-pink-500/20',
    url: 'https://apps.apple.com/us/app/gbx/id6749517571',
    linkText: 'Download on the App Store'
  },
  {
    name: 'Spades',
    icon: <Vote className={`w-16 h-16 md:w-${ICON_SIZE_SMALL} md:h-${ICON_SIZE_SMALL}`} />,
    description:
      'Improve your team\'s pointing poker sessions with our AI enhanced platform that integrated with Linear.',
    color: 'from-indigo-600/20 via-blue-500/20 to-purple-500/20',
    url: 'https://spades.poker',
    linkText: 'Learn More'
  },
]

export function AnimatedProductSection(): React.ReactNode {
  const [visibleProducts, setVisibleProducts] = useState<Set<number>>(new Set())
  const productRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = productRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleProducts(prev => new Set(prev).add(index))
            }
          })
        },
        {
          threshold: INTERSECTION_THRESHOLD,
          rootMargin: INTERSECTION_ROOT_MARGIN,
        },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section className={`relative py-${SECTION_PADDING} overflow-hidden`}>
      <div className="container mx-auto px-4">
        <div className={`space-y-${PRODUCT_SPACING}`}>
          {products.map((product, index) => (
            <div
              key={product.name}
              ref={(el) => {
                productRefs.current[index] = el
              }}
              className={`relative transition-all duration-${ANIMATION_DURATION} ease-out ${
                visibleProducts.has(index) ? 'opacity-100 translate-y-0' : `opacity-0 translate-y-${TRANSLATE_Y_OFFSET}`
              }`}
              style={{
                transitionDelay: `${index * STAGGER_DELAY}ms`,
              }}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-${CONTENT_GAP_SMALL} md:gap-${CONTENT_GAP_LARGE}`}
              >
                {/* Icon Side */}
                <div className="flex-1 flex items-center justify-center">
                  <div
                    className={`relative transition-all duration-${ANIMATION_DURATION} ${
                      visibleProducts.has(index) ? 'scale-100 rotate-0' : `scale-${SCALE_INITIAL} rotate-${ROTATION_INITIAL}`
                    }`}
                    style={{
                      transitionDelay: `${index * STAGGER_DELAY + ICON_DELAY_OFFSET}ms`,
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} blur-3xl rounded-full`} />
                    <div className={`relative flex items-center justify-center w-${ICON_SIZE_SMALL} h-${ICON_SIZE_SMALL} md:w-${ICON_SIZE_LARGE} md:h-${ICON_SIZE_LARGE} rounded-${ICON_BORDER_RADIUS}xl bg-white/${ICON_BACKGROUND_OPACITY} backdrop-blur-sm border border-white/${ICON_BORDER_OPACITY} text-white`}>
                      {product.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 space-y-${CONTENT_SPACING}`}>
                  <div
                    className={`transition-all duration-${ANIMATION_DURATION} ${
                      visibleProducts.has(index)
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${index % 2 === 0 ? `-translate-x-${TRANSLATE_X_OFFSET}` : `translate-x-${TRANSLATE_X_OFFSET}`}`
                    }`}
                    style={{
                      transitionDelay: `${index * STAGGER_DELAY + TITLE_DELAY_OFFSET}ms`,
                    }}
                  >
                    <h3 className={`text-${TITLE_SIZE_SMALL}xl md:text-${TITLE_SIZE_LARGE}xl font-bold text-white tracking-tight text-balance`}>
                      {product.name}
                    </h3>
                  </div>
                  <div
                    className={`transition-all duration-${ANIMATION_DURATION} ${
                      visibleProducts.has(index)
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${index % 2 === 0 ? `-translate-x-${TRANSLATE_X_OFFSET}` : `translate-x-${TRANSLATE_X_OFFSET}`}`
                    }`}
                    style={{
                      transitionDelay: `${index * STAGGER_DELAY + DESCRIPTION_DELAY_OFFSET}ms`,
                    }}
                  >
                    <p className={`text-${DESCRIPTION_SIZE_SMALL}xl md:text-${DESCRIPTION_SIZE_LARGE}xl text-white/${TEXT_OPACITY} leading-relaxed text-pretty max-w-${MAX_TEXT_WIDTH}`}>
                      {product.description}
                    </p>
                  </div>
                  <div
                    className={`transition-all duration-${ANIMATION_DURATION} ${
                      visibleProducts.has(index)
                        ? 'opacity-100 translate-x-0'
                        : `opacity-0 ${index % 2 === 0 ? `-translate-x-${TRANSLATE_X_OFFSET}` : `translate-x-${TRANSLATE_X_OFFSET}`}`
                    }`}
                    style={{
                      transitionDelay: `${index * STAGGER_DELAY + BUTTON_DELAY_OFFSET}ms`,
                    }}
                  >
                    <Link
                      href={product.url}
                      target={product.url.startsWith('http') ? '_blank' : undefined}
                      rel={product.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
                    >
                      <span className="text-lg font-medium">{product.linkText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
