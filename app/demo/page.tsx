"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import PublicProfile from "@/components/public-profile"
import { ArrowUpRight } from "lucide-react"

// Demo profile data
const demoUser = {
  id: "demo",
  name: "Jane Smith",
  username: "demo",
  image: null,
  // Onboarding data directly in user model
  businessName: "Demo Business",
  businessTagline: "Your trusted partner for amazing solutions",
  industry: "Technology",
  businessType: "Freelancer",
  primaryGoal: "Grow my business",
  website: "https://biztro.link",
  phone: "+1234567890",
  bio: "Passionate about creating amazing digital experiences",
  links: [
    {
      id: "1",
      title: "Website",
      url: "https://biztro.link",
      icon: "website",
      order: 0,
    },
    {
      id: "2",
      title: "Instagram",
      url: "https://instagram.com",
      icon: "instagram",
      order: 1,
    },
    {
      id: "3",
      title: "Contact",
      url: "mailto:hello@example.com",
      icon: "email",
      order: 2,
    },
  ],
  appearance: {
    theme: "light",
    bgColor: "#ffffff",
    textColor: "#000000",
    buttonStyle: "rounded",
    font: "inter",
    showAvatar: true,
    showSocials: true,
  },
}

export default function DemoPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handle scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#fffbeb] relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #282828 1px, transparent 1px),
            linear-gradient(to bottom, #282828 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'border-b border-gray-200/30 bg-[#fffbeb]/90 backdrop-blur-xl shadow-xl'
          : 'border-b border-gray-200/10 bg-[#fffbeb]/60 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <Logo size="lg" className="mr-2 sm:mr-3" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="/#features" className="relative text-sm font-semibold text-gray-700 hover:text-[#282828] transition-all duration-200 group py-2 px-1">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#282828] transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/#pricing" className="relative text-sm font-semibold text-gray-700 hover:text-[#282828] transition-all duration-200 group py-2 px-1">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#282828] transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/auth/signin" className="relative text-sm font-semibold text-gray-700 hover:text-[#282828] transition-all duration-200 group py-2 px-1">
                Login
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#282828] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-4">
              <Link href="/#features" className="text-sm font-semibold text-gray-700 hover:text-[#282828] transition-colors duration-200 py-2 px-2">
                Features
              </Link>
              <Link href="/#pricing" className="text-sm font-semibold text-gray-700 hover:text-[#282828] transition-colors duration-200 py-2 px-2">
                Pricing
              </Link>
              <Link href="/auth/signin" className="text-sm font-semibold text-gray-700 hover:text-[#282828] transition-colors duration-200 py-2 px-2">
                Login
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <Link href="/auth/signup">
                <Button className="bg-[#282828] hover:bg-[#282828]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 font-semibold px-4 sm:px-5 md:px-6 text-sm sm:text-base">
                  Get Started
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 z-60">
          <button
            onClick={toggleMobileMenu}
            className="p-2 sm:p-2.5 rounded-lg bg-[#282828]/10 hover:bg-[#282828]/20 active:bg-[#282828]/30 transition-all duration-200 touch-manipulation"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#282828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-[#fffbeb]/95 backdrop-blur-xl border-b border-gray-200/40 shadow-xl'
            : 'bg-[#fffbeb]/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg'
        } ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3">
            <a
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm sm:text-base font-semibold text-gray-700 hover:text-[#282828] active:text-[#282828]/80 transition-colors py-3 px-2 rounded-md hover:bg-[#282828]/5 active:bg-[#282828]/10"
            >
              Features
            </a>
            <a
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm sm:text-base font-semibold text-gray-700 hover:text-[#282828] active:text-[#282828]/80 transition-colors py-3 px-2 rounded-md hover:bg-[#282828]/5 active:bg-[#282828]/10"
            >
              Pricing
            </a>
            <a
              href="/auth/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm sm:text-base font-semibold text-gray-700 hover:text-[#282828] active:text-[#282828]/80 transition-colors py-3 px-2 rounded-md hover:bg-[#282828]/5 active:bg-[#282828]/10"
            >
              Login
            </a>
            <div className="pt-3 sm:pt-4 border-t border-gray-200/40">
              <Link href="/auth/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[#282828] hover:bg-[#282828]/90 active:bg-[#282828]/95 text-white font-semibold text-sm sm:text-base py-3 sm:py-3.5 transition-all duration-200 active:scale-95">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-18 md:pt-20">
        <PublicProfile user={demoUser as any} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200/60 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/">
                <Logo className="mb-4 sm:mb-6" size="md" />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
                The simplest way for small businesses to create professional online identity pages.
                Share all your links in one beautiful place.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-[#282828]/10 rounded-lg flex items-center justify-center hover:bg-[#282828]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#282828]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-[#282828]/10 rounded-lg flex items-center justify-center hover:bg-[#282828]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#282828]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-[#282828]/10 rounded-lg flex items-center justify-center hover:bg-[#282828]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#282828]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.75.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-[#282828]/10 rounded-lg flex items-center justify-center hover:bg-[#282828]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#282828]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-2.448-2.31 0-.825.418-1.957 1.992-1.957 1.618 0 2.1 1.132 2.1 1.957 0 1.82-1.152 2.31-1.644 2.31zm7.694 0c-1.297 0-2.448-.49-2.448-2.31 0-.825.418-1.957 1.992-1.957 1.618 0 2.1 1.132 2.1 1.957 0 1.82-1.152 2.31-1.644 2.31z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-[#282828] font-semibold text-sm uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/#features" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/demo" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/analytics" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="/customization" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Customization
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-[#282828] font-semibold text-sm uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/help" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/status" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-[#282828] font-semibold text-sm uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/press" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-200/60 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="max-w-md mx-auto lg:mx-0">
              <h4 className="text-[#282828] font-semibold mb-2 text-sm sm:text-base">Stay Updated</h4>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest updates on new features and improvements.
              </p>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#282828]/20 focus:border-[#282828] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#282828] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#282828]/90 transition-all duration-200 hover:scale-105 active:scale-95 sm:w-auto w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200/60 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-600 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Biztro. All rights reserved.
              </div>
              <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600 flex-wrap justify-center">
                <a href="/privacy" className="hover:text-[#282828] transition-colors cursor-pointer">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-[#282828] transition-colors cursor-pointer">
                  Terms
                </a>
                <a href="/cookies" className="hover:text-[#282828] transition-colors cursor-pointer">
                  Cookies
                </a>
                <a href="/sitemap" className="hover:text-[#282828] transition-colors cursor-pointer">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200/60 shadow-2xl px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="text-sm font-semibold text-[#282828]">Ready to get started?</div>
            <div className="text-xs text-gray-600">Create your free Biztro page now</div>
          </div>
          <a href="/auth/signup">
            <button className="bg-[#282828] hover:bg-[#282828]/90 text-white shadow-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95 rounded-lg flex items-center gap-1">
              Start Free
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

