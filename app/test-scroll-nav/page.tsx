"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Info } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

function ScrollNavigation({ currentPage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'border-b border-gray-200/30 bg-white/95 backdrop-blur-xl shadow-lg'
          : 'border-b border-gray-200/10 bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="lg" />
            </Link>
          </div>

          {/* Simple Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link href="/" className="flex items-center gap-2 font-medium">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link href="/products" className="font-medium">Products</Link>
            <Link href="/about" className="flex items-center gap-2 font-medium">
              <Info className="w-4 h-4" />
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 font-medium"
                >
                  <Home className="w-5 h-5" />
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 font-medium"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 font-medium"
                >
                  <Info className="w-5 h-5" />
                  About
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default function TestScrollNavPage() {
  return (
    <div>
      <h1>Testing Scroll Detection Navigation Component</h1>
      <div style={{ height: '200vh', paddingTop: '100px' }}>
        <p>Scroll down to see the navigation change</p>
        <ScrollNavigation currentPage="test" />
      </div>
    </div>
  )
}
