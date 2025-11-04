"use client"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Info } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

function AnimateNavigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
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

export default function TestAnimateNavPage() {
  return (
    <div>
      <h1>Testing AnimatePresence Navigation Component</h1>
      <AnimateNavigation currentPage="test" />
    </div>
  )
}
