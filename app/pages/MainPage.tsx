import Link from 'next/link'

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full z-10">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex-1 flex justify-start space-x-8">
              <Link className="text-white hover:text-gray-300 transition-colors font-medium" href="#about">
                About
              </Link>
              <Link className="text-white hover:text-gray-300 transition-colors font-medium" href="#services">
                Services
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <Link href="/" className="text-2xl font-bold text-white">
                <img
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex-1 flex justify-end space-x-8">
              <Link className="text-white hover:text-gray-300 transition-colors font-medium" href="#portfolio">
                Portfolio
              </Link>
              <Link className="text-white hover:text-gray-300 transition-colors font-medium" href="#contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <section className="relative h-screen w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/main.png"
              alt="City skyline at dusk"
              className="object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Welcome to the Future
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience innovation and excellence in every project
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-lg">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}