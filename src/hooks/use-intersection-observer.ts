import { useEffect, useRef, useState } from 'react'


interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
}

interface UseIntersectionObserverReturn {
  visibleIndices: Set<number>
  setRef: (index: number) => (element: HTMLDivElement | null) => void
}

export function useIntersectionObserver(
  itemCount: number,
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  // eslint-disable-next-line no-magic-numbers
  const { threshold = 0.3, rootMargin = '-50px' } = options
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleIndices(prev => new Set(prev).add(index))
            }
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    // Observe all non-null refs
    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  const setRef = (index: number) => (element: HTMLDivElement | null) => {
    refs.current[index] = element
  }

  return { visibleIndices, setRef }
}
