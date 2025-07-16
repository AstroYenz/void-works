import React from 'react'


function Hero(): React.ReactNode {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
            Void Works
          </h1>
          <p className="text-lg text-gray-400 font-light">Products for the modern era</p>
        </div>
      </div>
    </section>
  )
}

export { Hero }
