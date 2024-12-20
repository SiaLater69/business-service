import Image from 'next/image'
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
                <Image
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
        <section className="relative min-h-screen w-full flex flex-col">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/main.png"
              alt="City skyline at dusk"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Hero Content */}
          <div className="relative flex-grow flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Made for you
              </p>
              <h1 className="text-4xl md:text-4xl font-bold text-white mb-6">
              When pure excellence meets innovation
              </h1>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-lg">
                Get in touch
              </button>
            </div>
          </div>

          {/* 4 h2 tags at the bottom */}
          <div className="relative mt-auto pb-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                <h2 className="text-xl font-semibold text-white mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
                  Innovation
                </h2>
                <h2 className="text-xl font-semibold text-white mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
                  Expertise
                </h2>
                <h2 className="text-xl font-semibold text-white mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
                  Sustainability
                </h2>
                <h2 className="text-xl font-semibold text-white mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
                  Partnership
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}