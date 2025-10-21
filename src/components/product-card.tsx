import type { ReactNode } from 'react'

import { Card, CardContent } from '@/components/ui/card'


interface ProductCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ProductCard({ icon, title, description }: ProductCardProps) {
  return (
    <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
      <CardContent className="p-8 space-y-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 text-white">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70 leading-relaxed text-pretty">{description}</p>
      </CardContent>
    </Card>
  )
}
