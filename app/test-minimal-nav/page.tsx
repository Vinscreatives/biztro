"use client"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"

interface NavigationProps {
  currentPage?: string
}

function MinimalNavigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
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
            <Link href="/" className="font-medium">Home</Link>
            <Link href="/products" className="font-medium">Products</Link>
            <Link href="/about" className="font-medium">About</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function TestMinimalNavPage() {
  return (
    <div>
      <h1>Testing Minimal Navigation Component</h1>
      <MinimalNavigation currentPage="test" />
    </div>
  )
}
