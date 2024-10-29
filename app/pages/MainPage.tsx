import Image from 'next/image';
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full z-10">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex-1 flex justify-start space-x-4">
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#about"
              >
                Services
              </Link>
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#services"
              >
                Clients
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
            <div className="flex-1 flex justify-end space-x-4">
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#portfolio"
              >
                About US
              </Link>
              <Link
                className="text-white hover:text-gray-300 transition-colors"
                href="#contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <section className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to Our Site
            </h1>
            <p className="text-xl text-white mb-8">
              Discover amazing things with us
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
