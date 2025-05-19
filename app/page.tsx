"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, MapPin, CreditCard, Navigation, PhoneCall, Star, Send, MessageSquare, Smartphone } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="SIMA Taxi" width={150} height={50} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white hover:text-yellow-400 transition-colors">
              Features
            </Link>
            <Link href="#download" className="text-white hover:text-yellow-400 transition-colors">
              Download
            </Link>
            <Link href="#contact" className="text-white hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#download"
                className="text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="SIMA Taxi in the city" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/30 backdrop-filter backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              Global Rides. <span className="text-yellow-400">Local Trust.</span>
            </h1>
            <p className="text-xl md:text-2xl text-center mx-auto mb-10 text-gray-100">
              SIMA Taxi connects riders and drivers across the world — safe, fast, and affordable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300">
                Download for Android
              </button>
              <button className="bg-transparent text-white font-semibold px-8 py-3 rounded-md border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-yellow-400">SIMA</span>?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-400 text-black p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-country support</h3>
              <p className="text-gray-400">Travel with confidence across borders with our global network of drivers.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-400 text-black p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure payments</h3>
              <p className="text-gray-400">
                Multiple payment options with state-of-the-art security for every transaction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-400 text-black p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Navigation size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time tracking</h3>
              <p className="text-gray-400">
                Know exactly where your ride is with accurate GPS tracking and ETA updates.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-400 text-black p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 support</h3>
              <p className="text-gray-400">Our customer service team is available around the clock to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Preview</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of transportation with our intuitive mobile app.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="relative w-64 h-auto transform hover:scale-105 transition-all duration-300">
              <Image
                src="/app-icon-1.png"
                alt="SIMA Taxi App"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative w-64 h-auto transform hover:scale-105 transition-all duration-300">
              <Image
                src="/app-icon-2.png"
                alt="SIMA Taxi App"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="download" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "SIMA Taxi has been a game-changer for my international travels. I can use the same app in multiple
                countries!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">Business Traveler</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The real-time tracking feature gives me peace of mind, especially when traveling in new cities."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">Tourist</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "As a driver, SIMA has helped me increase my earnings and connect with customers from all over the
                world."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Carlos Rodriguez</h4>
                  <p className="text-gray-400 text-sm">SIMA Driver</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to experience SIMA Taxi?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Smartphone className="mr-2" size={20} />
                Download for Android
              </button>
              <button className="bg-transparent text-white font-semibold px-8 py-3 rounded-md border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Smartphone className="mr-2" size={20} />
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-yellow-400">Get in Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <PhoneCall size={20} className="mr-3 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold">USA</p>
                      <p className="text-gray-400">+1 993 773 5153</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PhoneCall size={20} className="mr-3 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold">Kyrgyzstan</p>
                      <p className="text-gray-400">+996 225 011 101</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Send size={20} className="mr-3 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-400">simallc.com@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare size={20} className="mr-3 text-yellow-400 mt-1" />
                    <div>
                      <p className="font-semibold">Telegram</p>
                      <p className="text-gray-400">@syimykkalykov</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-yellow-400">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 SIMA LLC. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                Terms of Use
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
