"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Home,
  Info,
  ChevronDown,
  Link as LinkIcon,
  Scissors,
  QrCode
} from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

function ComplexNavigation({ currentPage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const products = [
    {
      href: "/products/link-in-bio",
      icon: LinkIcon,
      title: "Link in Bio",
      description: "Professional business profile with all your links",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      href: "/products/link-shortener",
      icon: Scissors,
      title: "Link Shortener",
      description: "Shorten URLs and track engagement analytics",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      href: "/products/qr-code",
      icon: QrCode,
      title: "QR Code Generator",
      description: "Create custom QR codes for any content",
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    }
  ]

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link href="/" className="flex items-center gap-2 font-medium">
              <Home className="w-4 h-4" />
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="flex items-center gap-2 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Products
                <motion.div
                  animate={{ rotate: isProductsDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              {/* Complex Dropdown */}
              <AnimatePresence>
                {isProductsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-2xl p-6 z-50"
                  >
                    <div className="space-y-4">
                      {products.map((product, index) => {
                        const ProductIcon = product.icon
                        return (
                          <motion.div
                            key={product.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            <Link
                              href={product.href}
                              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                              onClick={() => setIsProductsDropdownOpen(false)}
                            >
                              <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                                <ProductIcon className={`w-6 h-6 ${product.iconColor}`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                                  {product.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mt-1">
                                  {product.description}
                                </p>
                              </div>
                              <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                whileHover={{ x: 4 }}
                              >
                                <ChevronDown className="w-5 h-5 text-gray-400 rotate-[-90deg]" />
                              </motion.div>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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

export default function TestComplexNavPage() {
  return (
    <div>
      <h1>Testing Complex Navigation Component</h1>
      <div style={{ height: '100vh', padding: '20px', paddingTop: '120px' }}>
        <p>Navigation should be at the top with complex dropdown</p>
        <ComplexNavigation currentPage="test" />
      </div>
    </div>
  )
}
