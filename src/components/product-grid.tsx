'use client'

import { ProductCard } from '@/components/product-card'
import type { Product } from '@/config/products'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'


interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps): React.ReactNode {
  const { visibleIndices, setRef } = useIntersectionObserver(products.length, {
    threshold: 0.3,
    rootMargin: '-50px',
  })

  return (
    <div className="space-y-48">
      {products.map((product, index) => (
        <div key={product.name} ref={setRef(index)}>
          <ProductCard
            name={product.name}
            icon={product.icon}
            description={product.description}
            color={product.color}
            url={product.url}
            linkText={product.linkText}
            index={index}
            isVisible={visibleIndices.has(index)}
            reversed={index % 2 !== 0}
          />
        </div>
      ))}
    </div>
  )
}
