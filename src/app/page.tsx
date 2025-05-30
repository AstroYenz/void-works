import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import React from "react"

const metadata = {
  title: "Void Works",
  description: "Developer tools for the modern era",
}

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
