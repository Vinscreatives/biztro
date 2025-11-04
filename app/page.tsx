"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/ui/navigation"
import { ProfileCarousel } from "@/components/ui/profile-carousel"
import { BiztroDemoAnimation } from "@/components/ui/biztro-demo-animation"
import { Logo } from "@/components/ui/logo"
import Image from "next/image"
import {
  Gift,
  TrendingUp,
  Zap,
  FileText,
  Edit,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Shield,
  Smartphone,
  Palette,
  BarChart3,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Camera,
  Coffee,
  Dumbbell,
  Briefcase,
  Building,
  Check,
  ChevronDown,
  Play,
  Clock,
  Lock,
  Zap as Lightning,
  Award,
  Heart,
  Quote
} from "lucide-react"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your backend
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000) // Reset after 3 seconds
    }
  }

  // Intersection Observer for fade-in-up animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
        }
      })
    }, observerOptions)

    // Observe all elements with fade-in-up class
    const fadeElements = document.querySelectorAll('.fade-in-up')
    fadeElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
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

      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24 lg:py-32 xl:py-40 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#282828] leading-[0.9] tracking-tight">
                Your business,
                <span className="block text-[#282828]/80">one link away</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Biztro is the simplest way for small businesses to create a professional online identity page.
                Share all your links, showcase your brand, and grow your digital presence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="w-full sm:w-auto bg-[#282828] hover:bg-[#282828]/90 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  Start Building Free
                  <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold border-2 border-[#282828]/20 hover:border-[#282828]/40 hover:bg-[#282828]/5 transition-all duration-300">
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/img/biztro_01.jpg"
                      alt="Business using Biztro"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/img/biztro_02.jpg"
                      alt="Restaurant using Biztro"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/img/biztro_03.jpg"
                      alt="Professional using Biztro"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/img/biztro_04.jpg"
                      alt="Agency using Biztro"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/img/biztro_05.jpg"
                      alt="Coach using Biztro"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">Join 2,000+ businesses</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#282828] fill-current" />
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#282828] fill-current" />
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#282828] fill-current" />
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#282828] fill-current" />
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#282828] fill-current" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 ml-2">4.9/5 from users</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProfileCarousel />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Trust message - perfectly centered */}
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#282828]/70" />
              <span className="text-sm sm:text-base font-medium text-[#282828]/80 text-center max-w-md">
                Trusted by <span className="font-semibold text-[#282828]">2,500+</span> small businesses & creators
              </span>
            </div>

            {/* Company logos marquee - infinite scroll */}
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee hover:pause-marquee">
                {/* First complete set */}
                {[
                  { src: '/trustee logos/logo-amazon.svg', alt: 'Amazon' },
                  { src: '/trustee logos/meta-3.svg', alt: 'Meta' },
                  { src: '/trustee logos/youtube-6.svg', alt: 'YouTube' },
                  { src: '/trustee logos/lacoste-logo.svg', alt: 'Lacoste' },
                  { src: '/trustee logos/phoenix-contact-1.svg', alt: 'Phoenix Contact' },
                  { src: '/trustee logos/pixelfed-logo.svg', alt: 'Pixelfed' },
                  { src: '/trustee logos/truth-social.svg', alt: 'Truth Social' }
                ].concat([
                  { src: '/trustee logos/logo-amazon.svg', alt: 'Amazon' },
                  { src: '/trustee logos/meta-3.svg', alt: 'Meta' },
                  { src: '/trustee logos/youtube-6.svg', alt: 'YouTube' },
                  { src: '/trustee logos/lacoste-logo.svg', alt: 'Lacoste' },
                  { src: '/trustee logos/phoenix-contact-1.svg', alt: 'Phoenix Contact' },
                  { src: '/trustee logos/pixelfed-logo.svg', alt: 'Pixelfed' },
                  { src: '/trustee logos/truth-social.svg', alt: 'Truth Social' }
                ]).concat([
                  { src: '/trustee logos/logo-amazon.svg', alt: 'Amazon' },
                  { src: '/trustee logos/meta-3.svg', alt: 'Meta' },
                  { src: '/trustee logos/youtube-6.svg', alt: 'YouTube' }
                ]).map((logo, i) => (
                  <div
                    key={`marquee-${i}`}
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 opacity-60 hover:opacity-100 transition-opacity duration-200 mx-3 sm:mx-4 md:mx-5"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges - Responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-1.5 text-[#282828]/70">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">Lightning Fast</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#282828]/70">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">Secure</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#282828]/70">
                <Lightning className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">Reliable</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#282828]/70">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">Easy to Use</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-[#fffbeb]/30 relative overflow-hidden">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#fffbeb]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#282828]/5 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#282828] mb-6">
              See Biztro in action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how easy it is to create and customize your professional business page in minutes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BiztroDemoAnimation />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#fffbeb] py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#282828] mb-6">
              Everything you need to succeed online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed specifically for small businesses who want to make a big impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beautiful Customization */}
            <Card className="group relative bg-white border border-gray-200/60 shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-2 active:scale-[1.02] overflow-hidden cursor-pointer">
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#282828] to-[#282828]/80 flex items-center justify-center mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#282828] mb-3">Beautiful Customization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create stunning, branded pages with custom colors, fonts, and layouts that perfectly match your business identity.
                </p>

                {/* Hover Overlay - Theme Customization Demo */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      {/* Theme Selection Demo */}
                      <div className="text-center mb-4">
                        <h4 className="text-sm font-semibold text-[#282828] mb-3">Choose Your Theme</h4>
                        <div className="flex justify-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#fffbeb] to-[#f3f4f6] border-2 border-[#282828] animate-pulse"></div>
                          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#282828] to-[#1f2937]"></div>
                          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]"></div>
                        </div>
                        <div className="text-xs text-gray-600">Colors • Fonts • Layouts</div>
                      </div>

                      {/* Preview Card */}
                      <div className="bg-gradient-to-br from-[#fffbeb] to-white p-3 rounded-lg shadow-sm border">
                        <div className="w-8 h-8 bg-[#282828]/10 rounded-full mb-2 mx-auto"></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-[#282828]/20 rounded animate-pulse"></div>
                          <div className="h-2 bg-[#282828]/10 rounded w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Smart Analytics */}
            <Card className="group relative bg-white border border-gray-200/60 shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-2 active:scale-[1.02] overflow-hidden cursor-pointer">
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#282828] to-[#282828]/80 flex items-center justify-center mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#282828] mb-3">Smart Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track link clicks, visitor behavior, and engagement metrics to understand what works and optimize your online presence.
                </p>

                {/* Hover Overlay - Analytics Dashboard Demo */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="text-center mb-4">
                        <h4 className="text-sm font-semibold text-[#282828] mb-3">Live Analytics</h4>
                        <div className="grid grid-cols-2 gap-3 text-center">
                          <div className="bg-white p-2 rounded shadow-sm">
                            <div className="text-lg font-bold text-[#282828]">1,247</div>
                            <div className="text-xs text-gray-600">Views</div>
                          </div>
                          <div className="bg-white p-2 rounded shadow-sm">
                            <div className="text-lg font-bold text-[#282828]">89</div>
                            <div className="text-xs text-gray-600">Clicks</div>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lightning Fast */}
            <Card className="group relative bg-white border border-gray-200/60 shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-2 active:scale-[1.02] overflow-hidden cursor-pointer">
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#282828] to-[#282828]/80 flex items-center justify-center mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#282828] mb-3">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized for speed and performance. Your pages load instantly, keeping visitors engaged and improving SEO rankings.
                </p>

                {/* Hover Overlay - Speed Demo */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-full max-w-xs text-center">
                      <div className="mb-4">
                        <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2 animate-pulse" />
                        <div className="text-2xl font-bold text-[#282828]">0.3s</div>
                        <div className="text-sm text-gray-600">Load Time</div>
                      </div>
                      <div className="flex justify-center items-end gap-1 h-8">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-gradient-to-t from-green-500 to-green-300 rounded-full animate-pulse"
                            style={{
                              height: `${20 + Math.random() * 20}px`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-600 mt-2">Real-time Performance</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Optimized */}
            <Card className="group relative bg-white border border-gray-200/60 shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-2 active:scale-[1.02] overflow-hidden cursor-pointer">
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#282828] to-[#282828]/80 flex items-center justify-center mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#282828] mb-3">Mobile Optimized</h3>
                <p className="text-gray-600 leading-relaxed">
                  Perfect on every device. Your link pages look stunning on phones, tablets, and desktops without any extra work.
                </p>

                {/* Hover Overlay - Mobile Preview Demo */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="text-center mb-3">
                        <h4 className="text-sm font-semibold text-[#282828]">Mobile Preview</h4>
                      </div>
                      {/* Phone Mockup */}
                      <div className="relative mx-auto w-20 h-32 bg-gray-900 rounded-2xl p-1 shadow-lg">
                        <div className="w-full h-full bg-gradient-to-br from-[#fffbeb] to-white rounded-xl flex flex-col">
                          <div className="w-8 h-8 bg-[#282828]/10 rounded-full mx-auto mt-2"></div>
                          <div className="flex-1 flex flex-col justify-center px-2 space-y-1">
                            <div className="h-1.5 bg-[#282828]/20 rounded animate-pulse"></div>
                            <div className="h-1.5 bg-[#282828]/10 rounded w-3/4 animate-pulse"></div>
                            <div className="h-1.5 bg-[#282828]/20 rounded w-1/2 animate-pulse"></div>
                          </div>
                        </div>
                        {/* Home indicator */}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-600 text-center mt-2">Responsive Design</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secure & Reliable */}
            <Card className="group relative bg-white border border-gray-200/60 shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-2 active:scale-[1.02] overflow-hidden cursor-pointer">
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#282828] to-[#282828]/80 flex items-center justify-center mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#282828] mb-3">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enterprise-grade security with 99.9% uptime. Your data is safe, and your pages are always accessible to your audience.
                </p>

                {/* Hover Overlay - Security Demo */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-full max-w-xs text-center">
                      <div className="mb-4">
                        <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-[#282828]">99.9%</div>
                        <div className="text-sm text-gray-600">Uptime</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">SSL Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">Data Protected</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">Backup Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Support */}
            <Card className="group relative bg-white border border-gray-200/60 shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-2 active:scale-[1.02] overflow-hidden cursor-pointer">
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#282828] to-[#282828]/80 flex items-center justify-center mb-6 group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#282828] mb-3">Community Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Join thousands of business owners in our community. Get tips, inspiration, and support from fellow entrepreneurs.
                </p>

                {/* Hover Overlay - Community Demo */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 pointer-events-none">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="text-center mb-4">
                        <h4 className="text-sm font-semibold text-[#282828] mb-3">Active Community</h4>
                        <div className="flex justify-center -space-x-2 mb-3">
                          {[
                            { bg: 'from-[#fffbeb] to-[#f3f4f6]', letter: 'A' },
                            { bg: 'from-[#fef3c7] to-[#fde68a]', letter: 'B' },
                            { bg: 'from-[#dbeafe] to-[#bfdbfe]', letter: 'C' },
                            { bg: 'from-[#f0fdf4] to-[#dcfce7]', letter: 'D' }
                          ].map((avatar, i) => (
                            <div
                              key={i}
                              className={`w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br ${avatar.bg} flex items-center justify-center text-xs font-medium text-[#282828]/60`}
                            >
                              {avatar.letter}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-gray-600 mb-2">12,500+ Members</div>
                        <div className="flex justify-center gap-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className="w-1 h-1 bg-[#282828]/30 rounded-full animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-24 lg:py-32">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#282828] mb-6">
              Three simple steps to success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get your professional link page up and running in under 5 minutes.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex justify-between">
                <div className="w-4 h-4 bg-[#282828] rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#282828] to-[#282828]/50 mx-4 mt-1.5"></div>
                <div className="w-4 h-4 bg-[#282828] rounded-full"></div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#282828]/50 to-[#282828] mx-4 mt-1.5"></div>
                <div className="w-4 h-4 bg-[#282828] rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#fffbeb] rounded-full flex items-center justify-center text-[#282828] font-bold text-sm shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#282828] mb-4">Create Your Account</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Sign up with your email and instantly get a personalized link page at yourbrand.biztro.link.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <Edit className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#fffbeb] rounded-full flex items-center justify-center text-[#282828] font-bold text-sm shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#282828] mb-4">Customize & Add Links</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Choose your theme, add your bio, and include all your important links in one beautiful page.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#fffbeb] rounded-full flex items-center justify-center text-[#282828] font-bold text-sm shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#282828] mb-4">Share & Grow</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  Share your link everywhere. Track performance and watch your online presence grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#282828] mb-6">
              Loved by creators & businesses
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              See what our community says about building their online presence with Biztro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-[#fffbeb]/50 to-white p-6 rounded-2xl border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-[#282828]/30 mb-3" />
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Biztro transformed how I showcase my photography portfolio. My clients now have one beautiful link to see all my work and contact info."
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/img/biztro_01.jpg"
                  alt="Sarah Chen"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#282828] text-sm">Sarah Chen</div>
                  <div className="text-xs text-gray-500">Photographer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-[#fffbeb]/50 to-white p-6 rounded-2xl border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-[#282828]/30 mb-3" />
              <p className="text-gray-700 mb-4 leading-relaxed">
                "As a fitness coach, I needed something professional and easy to update. Biztro gave me exactly that - and it's completely free!"
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/img/biztro_05.jpg"
                  alt="Alex Thompson"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#282828] text-sm">Alex Thompson</div>
                  <div className="text-xs text-gray-500">Fitness Coach</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-[#fffbeb]/50 to-white p-6 rounded-2xl border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-[#282828]/30 mb-3" />
              <p className="text-gray-700 mb-4 leading-relaxed">
                "My café's online presence went from zero to professional overnight. Customers love having all our ordering and contact info in one place."
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/img/biztro_02.jpg"
                  alt="Marco's Pizzeria"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#282828] text-sm">Marco's Pizzeria</div>
                  <div className="text-xs text-gray-500">Local Restaurant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Biztro is For Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#fffbeb]/30 to-white relative overflow-hidden">
        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#fffbeb]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#282828]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#282828] mb-6 leading-tight">
              Who Biztro is for
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join a thriving community of creators and businesses building their digital presence with elegance and purpose.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Creators */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffbeb]/40 to-[#282828]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100/60 shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden fade-in-up" style={{ animationDelay: '0.1s' }}>
                {/* Preview Thumbnail */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-[#282828]/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#282828]/40 rounded-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-18 h-18 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Camera className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#282828] mb-3 group-hover:text-[#282828]/90 transition-colors">Creative Visionaries</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Showcase your portfolio with breathtaking elegance. Turn every click into a conversion opportunity.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbeb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Consultants */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffbeb]/40 to-[#282828]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100/60 shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden fade-in-up" style={{ animationDelay: '0.2s' }}>
                {/* Preview Thumbnail */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="flex space-x-1">
                    <div className="w-2 h-6 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-4 bg-blue-300 rounded-full"></div>
                    <div className="w-2 h-5 bg-blue-400 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-18 h-18 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Briefcase className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#282828] mb-3 group-hover:text-[#282828]/90 transition-colors">Expert Advisors</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Build trust and authority. Connect with clients through a professional presence that speaks volumes.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbeb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Local Businesses */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffbeb]/40 to-[#282828]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100/60 shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden fade-in-up" style={{ animationDelay: '0.3s' }}>
                {/* Preview Thumbnail */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-6 h-1 bg-amber-400 rounded mb-1"></div>
                    <div className="w-4 h-1 bg-amber-300 rounded mb-1"></div>
                    <div className="w-5 h-1 bg-amber-400 rounded"></div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-18 h-18 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Coffee className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#282828] mb-3 group-hover:text-[#282828]/90 transition-colors">Local Heroes</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Bridge the gap between your community and customers. Share your story, menu, and magic effortlessly.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbeb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Agencies */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffbeb]/40 to-[#282828]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100/60 shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden fade-in-up" style={{ animationDelay: '0.4s' }}>
                {/* Preview Thumbnail */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-sm"></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-sm"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-sm"></div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-18 h-18 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Building className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#282828] mb-3 group-hover:text-[#282828]/90 transition-colors">Creative Agencies</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Elevate your brand presence. Deliver stunning client experiences that drive growth and loyalty.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbeb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Fitness Pros */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffbeb]/40 to-[#282828]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100/60 shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden fade-in-up" style={{ animationDelay: '0.5s' }}>
                {/* Preview Thumbnail */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mb-1"></div>
                    <div className="flex justify-center space-x-1">
                      <div className="w-1 h-4 bg-green-300 rounded-full"></div>
                      <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-1 h-5 bg-green-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-18 h-18 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Dumbbell className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#282828] mb-3 group-hover:text-[#282828]/90 transition-colors">Fitness Leaders</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Transform lives through connection. Showcase your expertise and inspire your community to thrive.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbeb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Small Teams */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fffbeb]/40 to-[#282828]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100/60 shadow-xl hover:shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden fade-in-up" style={{ animationDelay: '0.6s' }}>
                {/* Preview Thumbnail */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="flex -space-x-1">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-18 h-18 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Users className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#282828] mb-3 group-hover:text-[#282828]/90 transition-colors">Growing Teams</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Scale with confidence. Create unified brand experiences that resonate with your audience and drive results.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fffbeb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section id="pricing" className="py-20 sm:py-24 lg:py-32 bg-[#282828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Start building your professional online presence completely free. Upgrade when you need more.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100/20">
              <div className="bg-gradient-to-r from-[#282828] to-[#282828]/90 px-6 py-8 text-center">
                <div className="text-white/60 text-sm font-medium mb-2">FREE FOREVER</div>
                <div className="text-4xl font-black text-white mb-2">$0</div>
                <div className="text-white/80 text-sm">No credit card required</div>
              </div>
              <div className="px-6 py-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-[#282828] font-medium">Custom Biztro link</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-[#282828] font-medium">Beautiful themes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-[#282828] font-medium">Unlimited links</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-[#282828] font-medium">Basic analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-[#282828] font-medium">Mobile optimized</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/auth/signup">
                    <Button className="w-full bg-[#282828] hover:bg-[#282828]/90 text-white font-semibold py-3">
                      Get Started Free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fffbeb] py-24 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #282828 1px, transparent 1px),
              linear-gradient(to bottom, #282828 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-black text-[#282828] mb-6 leading-tight">
                Ready to transform your
                <span className="block">
                  online presence?
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join thousands of businesses who have already created stunning link pages with Biztro.
                Start building your professional online identity today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-[#282828] text-white hover:bg-[#282828]/90 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                  Start Building Free
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="border-2 border-[#282828]/20 text-[#282828] hover:bg-[#282828]/5 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  View Live Demo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#282828] mb-2">5 min</div>
                <div className="text-gray-600">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#282828] mb-2">Free</div>
                <div className="text-gray-600">Forever plan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#282828] mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#282828] mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about getting started with Biztro.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="text-lg font-semibold text-[#282828]">Is Biztro really free?</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  Yes! Biztro offers a completely free plan with all essential features. You can create your professional link page, customize themes, add unlimited links, and track basic analytics at no cost.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="text-lg font-semibold text-[#282828]">How do I get my custom Biztro link?</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  When you sign up, you can choose any available username for your Biztro link. It will be yourbrand.biztro.link - professional, memorable, and completely customizable.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="text-lg font-semibold text-[#282828]">Can I customize the appearance?</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! Choose from beautiful pre-designed themes, customize colors, fonts, and layouts. Your Biztro page will reflect your unique brand and style perfectly.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="text-lg font-semibold text-[#282828]">Do I need technical skills?</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  Not at all! Biztro is designed to be incredibly user-friendly. Our intuitive interface makes it easy for anyone to create and manage their professional link page, no coding required.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="border border-gray-100 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="text-lg font-semibold text-[#282828]">Is my data secure?</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">
                  Yes, security is our top priority. All data is encrypted, and we follow industry best practices to keep your information safe. Your Biztro page and analytics data are protected.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="/help">
              <Button variant="outline" className="border-[#282828]/20 text-[#282828] hover:bg-[#282828]/5">
                Visit our Help Center
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/60 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Logo className="mb-4 sm:mb-6" size="md" />
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
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.75.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-[#282828]/10 rounded-lg flex items-center justify-center hover:bg-[#282828]/20 transition-colors">
                  <svg className="w-4 h-4 text-[#282828]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                  <a href="/pricing" className="text-gray-600 hover:text-[#282828] transition-colors text-sm cursor-pointer">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#282828]/20 focus:border-[#282828] transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="bg-[#282828] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#282828]/90 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto w-full"
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-600 text-xs mt-2">Thank you for subscribing! We'll send you updates soon.</p>
              )}
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

