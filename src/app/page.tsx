import React from 'react'

import { metadata as metadataFile } from '@/app/metadata'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'


const metadata = metadataFile

function Home(): React.ReactElement {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      <main>
        <Hero />
        {/* Products Section
        Currently empty, but will be populated with products in the future.
        */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
export { metadata }
