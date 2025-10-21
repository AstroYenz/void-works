'use client'

import { ProductGrid } from '@/components/product-grid'
import { products } from '@/config/products'


export function AnimatedProductSection(): React.ReactNode {
  return (
    <section className="relative py-32 overflow-hidden" aria-label="Products">
      <div className="container mx-auto px-4">
        <ProductGrid products={products} />
      </div>
    </section>
  )
}
