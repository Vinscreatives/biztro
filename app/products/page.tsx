"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import { Logo } from "@/components/ui/logo"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react"

export default function ProductsPage() {

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

      {/* Ambient Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#fffbeb]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-[#282828]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation */}
      <Navigation currentPage="products" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-18 md:pt-20">
        {/* Hero Section */}
        <section className="py-20 sm:py-24 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full shadow-lg mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#282828]" />
                <span className="text-sm font-medium text-[#282828]">Build your digital presence</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#282828] leading-[0.9] tracking-tight mb-6"
              >
                Everything you need to
                <span className="block text-[#282828]/80">grow online</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-12"
              >
                Professional tools designed specifically for small businesses and entrepreneurs.
                Build credibility, track performance, and grow your audience.
              </motion.p>
            </div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
            >
              {/* Link in Bio Card */}
              <Link href="/products/link-in-bio" className="group">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#282828] mb-4 group-hover:text-[#282828]/90 transition-colors">
                      Link in Bio
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-6">
                      Create a professional business profile and share all your important links in one beautiful place.
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Custom branding & themes
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Analytics & insights
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Mobile optimized
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#282828] font-semibold group-hover:text-[#282828]/80 transition-colors">
                        Learn more →
                      </span>
                      <div className="w-8 h-8 bg-[#282828] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Link Shortener Card */}
              <Link href="/products/link-shortener" className="group">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-green-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13m-4 4h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 15H13m-4 4h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 19H13" />
                      </svg>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#282828] mb-4 group-hover:text-[#282828]/90 transition-colors">
                      Link Shortener
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-6">
                      Shorten long URLs and track engagement for smarter link sharing and marketing campaigns.
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Real-time analytics
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        QR code generation
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        UTM tracking
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#282828] font-semibold group-hover:text-[#282828]/80 transition-colors">
                        Learn more →
                      </span>
                      <div className="w-8 h-8 bg-[#282828] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mt-16"
            >
              <p className="text-gray-600 mb-8 font-light">
                Ready to build your professional online presence?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button className="bg-[#282828] hover:bg-[#282828]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold px-8 py-4 text-lg rounded-2xl w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button className="bg-white/80 hover:bg-white backdrop-blur-sm border border-white/60 hover:border-white/80 text-[#282828] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold px-8 py-4 text-lg rounded-2xl w-full sm:w-auto">
                    View Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
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
                  <a href="/products" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
                    Products
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
              <form className="flex flex-col sm:flex-row gap-2">
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
          <Link href="/auth/signup" className="bg-[#282828] hover:bg-[#282828]/90 text-white shadow-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95 rounded-lg items-center gap-1 inline-flex">
            Start Free
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
