"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { Navigation } from "@/components/ui/navigation"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Link as LinkIcon,
  BarChart3,
  QrCode,
  Zap,
  Tags,
  ShieldCheck,
  Copy,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Star,
  Globe,
  Heart,
  Shield,
  Play,
  Edit3,
  Eye,
  Monitor,
  Briefcase,
  User as UserIcon,
  Layers,
  ExternalLink,
  Target,
  Activity,
  Smartphone,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  ChevronDown,
  ChevronUp
} from "lucide-react"

export default function LinkShortenerPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [demoMode, setDemoMode] = useState<'business' | 'creator' | 'campaign'>('business')
  const [copied, setCopied] = useState(false)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const deviceY = useTransform(scrollYProgress, [0, 1], [0, -30])

  const benefits = [
    {
      icon: LinkIcon,
      title: "Branded short links",
      description: "Make your links look professional, not spammy.",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Real-time analytics",
      description: "Track clicks, traffic sources, and performance.",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: QrCode,
      title: "QR code support",
      description: "Instant QR for every short link.",
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Fast & reliable",
      description: "Lightning-quick redirects built for scale.",
      color: "from-amber-50 to-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Tags,
      title: "UTM ready",
      description: "Add UTM tags easily for marketing & ads.",
      color: "from-pink-50 to-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: ShieldCheck,
      title: "Safe & secure",
      description: "Spam-protection + link safety scanning.",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600"
    }
  ]

  const steps = [
    {
      step: "01",
      title: "Enter URL",
      description: "Paste your long link and get instant shortening.",
      icon: LinkIcon,
      uiCard: {
        title: "Shorten URL",
        content: "https://your-long-link.com/...",
        action: "Shorten"
      }
    },
    {
      step: "02",
      title: "Customize & shorten",
      description: "Add branding, UTM tags, and custom aliases.",
      icon: Edit3,
      uiCard: {
        title: "Customize Link",
        content: "biztro.link/your-brand",
        action: "Save"
      }
    },
    {
      step: "03",
      title: "Track results & share everywhere",
      description: "Monitor performance and share across all platforms.",
      icon: BarChart3,
      uiCard: {
        title: "Analytics",
        content: "1,234 clicks • 89% mobile",
        action: "View Stats"
      }
    }
  ]

  const faqs = [
    {
      question: "What is a link shortener?",
      answer: "A link shortener is a tool that converts long, unwieldy URLs into short, clean links that are easier to share and track. Biztro's link shortener goes beyond basic shortening by providing branding, analytics, QR codes, and UTM tracking."
    },
    {
      question: "Does Biztro track analytics?",
      answer: "Yes! Biztro provides comprehensive analytics for every shortened link including click counts, geographic data, device types, referral sources, and conversion tracking. Monitor your link performance in real-time."
    },
    {
      question: "Can I customize my short link?",
      answer: "Absolutely! You can create custom branded domains, add your own aliases, and use UTM parameters for marketing campaigns. Make your links look professional and match your brand identity."
    },
    {
      question: "Are my links secure?",
      answer: "Biztro prioritizes security with automatic spam detection, malware scanning, and secure redirects. All links are HTTPS-enabled and we regularly scan for malicious content to protect your audience."
    },
    {
      question: "Can I use it for business campaigns?",
      answer: "Definitely! Biztro's link shortener is designed for business use. Track marketing campaign performance, create branded links for different departments, and use UTM parameters to measure ROI across all your marketing efforts."
    },
    {
      question: "Can I create QR codes for my links?",
      answer: "Yes! Every shortened link automatically generates a QR code. You can customize the QR code design, add logos, and track scans just like regular link clicks. Perfect for print materials and offline marketing."
    }
  ]

  // Get demo content based on mode
  const getDemoContent = () => {
    switch (demoMode) {
      case 'business':
        return {
          longUrl: "https://mybusiness.com/products/premium-consulting-services",
          shortUrl: "biztro.link/consult",
          clicks: "2,847",
          devices: "68% Mobile",
          topSource: "Instagram"
        }
      case 'creator':
        return {
          longUrl: "https://myportfolio.com/work/design-portfolio-showcase-2024",
          shortUrl: "biztro.link/portfolio",
          clicks: "1,203",
          devices: "45% Desktop",
          topSource: "Twitter"
        }
      case 'campaign':
        return {
          longUrl: "https://myshop.com/special-offer/black-friday-sale-2024",
          shortUrl: "biztro.link/bf2024",
          clicks: "8,921",
          devices: "72% Mobile",
          topSource: "Facebook Ads"
        }
      default:
        return getDemoContent()
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(getDemoContent().shortUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

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
      <Navigation currentPage="link-shortener" />

      {/* Main Content */}
      <main className="pt-16 sm:pt-18 md:pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="py-32 sm:py-40 lg:py-48 xl:py-56 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center lg:text-left space-y-8"
              >
                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full shadow-lg"
                >
                  <LinkIcon className="w-4 h-4 text-[#282828]" />
                  <span className="text-sm font-medium text-[#282828]">Smart link management</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#282828] leading-[0.9] tracking-tight"
                >
                  Shorten links,
                  <span className="block text-[#282828]/80">track performance,</span>
                  <span className="block text-[#282828]/60">grow your business</span>
                </motion.h1>

                {/* Sub-line */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                >
                  Create smart, professional short links designed for business use — with analytics, QR support, and branded styles.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                >
                  <Link href="/auth/signup">
                    <Button className="group bg-[#282828] hover:bg-[#282828]/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold px-10 py-5 text-lg rounded-2xl w-full sm:w-auto">
                      Shorten a Link
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button className="bg-white/80 hover:bg-white backdrop-blur-sm border border-white/60 hover:border-white/80 text-[#282828] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold px-10 py-5 text-lg rounded-2xl w-full sm:w-auto">
                      View Example
                    </Button>
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span className="font-medium">Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4" />
                    <span className="font-medium">Fast</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4" />
                    <span className="font-medium">Analytics included</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Link Shortening Preview */}
              <motion.div
                style={{ y: deviceY }}
                className="relative"
              >
                <div className="relative mx-auto max-w-sm lg:max-w-md xl:max-w-lg">
                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 8, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-12 -right-12 w-20 h-20 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl"
                  />
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl"
                  />

                  {/* Link Shortening Demo Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 shadow-2xl"
                  >
                    {/* Input Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mb-6"
                    >
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="Paste your long URL here..."
                          className="flex-1 px-4 py-3 bg-[#fffbeb]/50 border border-gray-200/50 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#282828]/20 focus:border-[#282828] transition-all duration-200"
                          defaultValue="https://mybusiness.com/products/premium-consulting-services"
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-[#282828] hover:bg-[#282828]/90 text-white rounded-2xl font-medium transition-all duration-200"
                        >
                          Shorten
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Result Section */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="space-y-4"
                    >
                      {/* Short Link */}
                      <div className="bg-gradient-to-r from-[#282828] to-[#282828]/90 rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-white/70 text-xs mb-1">Your short link</div>
                            <div className="text-white font-mono text-sm">biztro.link/consult</div>
                          </div>
                          <motion.button
                            onClick={handleCopy}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200 ml-3"
                          >
                            <motion.div
                              animate={copied ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 0.3 }}
                            >
                              <Copy className="w-4 h-4 text-white" />
                            </motion.div>
                          </motion.button>
                        </div>
                      </div>

                      {/* Mini Analytics */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="grid grid-cols-3 gap-3"
                      >
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-[#282828]">2,847</div>
                          <div className="text-xs text-gray-600">Clicks</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-[#282828]">68%</div>
                          <div className="text-xs text-gray-600">Mobile</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-[#282828]">4</div>
                          <div className="text-xs text-gray-600">Sources</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="py-32 sm:py-40 lg:py-48 bg-gradient-to-b from-white/30 to-[#fffbeb]/50 relative">
          {/* Ambient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-100/20 to-yellow-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6 leading-tight">
                Why Biztro link shortener is <span className="text-[#282828]/80">powerful</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Everything you need to create, track, and optimize your links for maximum business impact.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            >
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Card */}
                    <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Subtle gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center mb-8"
                      >
                        <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <IconComponent className={`w-10 h-10 ${benefit.iconColor} relative z-10`} />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="text-center relative z-10">
                        <h3 className="text-2xl font-bold text-[#282828] mb-4 group-hover:text-[#282828]/90 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-32 sm:py-40 lg:py-48 bg-white/80 relative overflow-hidden">
          {/* Glass background panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/60 to-white/40 backdrop-blur-xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6 leading-tight">
                See it <span className="text-[#282828]/80">in action</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Watch how long URLs transform into powerful, trackable links with real analytics.
              </p>
            </motion.div>

            {/* Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mb-16"
            >
              <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-2 shadow-xl">
                <div className="flex gap-2">
                  {[
                    { key: 'business', label: 'Business', icon: Briefcase },
                    { key: 'creator', label: 'Creator', icon: UserIcon },
                    { key: 'campaign', label: 'Campaign', icon: Target }
                  ].map((mode) => (
                    <button
                      key={mode.key}
                      onClick={() => setDemoMode(mode.key as typeof demoMode)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        demoMode === mode.key
                          ? 'bg-[#282828] text-white shadow-lg scale-105'
                          : 'text-[#282828]/70 hover:text-[#282828] hover:bg-white/50'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 lg:p-12 shadow-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left: Steps card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="text-center lg:text-left mb-8">
                      <h3 className="text-2xl font-bold text-[#282828] mb-2">Simple 3-step process</h3>
                      <p className="text-gray-600">Get your short link ready in seconds</p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { step: 1, icon: LinkIcon, text: "Paste a long URL", desc: "Enter any URL you want to shorten" },
                        { step: 2, icon: Edit3, text: "Customize link", desc: "Add branding and UTM parameters" },
                        { step: 3, icon: BarChart3, text: "Track analytics", desc: "Monitor clicks and engagement" }
                      ].map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl shadow-sm"
                          >
                            <div className="w-8 h-8 bg-[#282828] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {item.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <IconComponent className="w-5 h-5 text-[#282828]" />
                                <span className="font-semibold text-[#282828]">{item.text}</span>
                              </div>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>

                  {/* Right: Animated Preview */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#fffbeb] border border-gray-100/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
                    >
                      {/* Long URL */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="mb-6"
                      >
                        <div className="text-xs text-gray-500 mb-2">Long URL</div>
                        <div className="bg-white/80 rounded-2xl p-4 border border-gray-100/50">
                          <div className="text-sm text-gray-700 font-mono break-all">
                            {getDemoContent().longUrl}
                          </div>
                        </div>
                      </motion.div>

                      {/* Arrow animation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex justify-center mb-6"
                      >
                        <motion.div
                          animate={{ y: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="w-12 h-12 bg-[#282828] rounded-full flex items-center justify-center shadow-lg"
                        >
                          <ArrowRight className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Short Link Result */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="space-y-4"
                      >
                        <div className="text-xs text-gray-500 mb-2">Short Link</div>
                        <div className="bg-gradient-to-r from-[#282828] to-[#282828]/90 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div className="text-white font-mono text-lg font-semibold">
                              {getDemoContent().shortUrl}
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200 ml-3"
                            >
                              <Copy className="w-5 h-5 text-white" />
                            </motion.button>
                          </div>
                        </div>

                        {/* Analytics Preview */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.6 }}
                          className="grid grid-cols-3 gap-3"
                        >
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-xl font-bold text-[#282828]">{getDemoContent().clicks}</div>
                            <div className="text-xs text-gray-600">Clicks</div>
                          </div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-xl font-bold text-[#282828]">{getDemoContent().devices}</div>
                            <div className="text-xs text-gray-600">Mobile</div>
                          </div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-xl font-bold text-[#282828]">{getDemoContent().topSource}</div>
                            <div className="text-xs text-gray-600">Top Source</div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <TrendingUp className="w-4 h-4 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it Works Timeline */}
        <section className="py-32 sm:py-40 lg:py-48 bg-gradient-to-b from-[#fffbeb]/50 to-white/80 relative">
          {/* Ambient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6 leading-tight">
                How it <span className="text-[#282828]/80">works</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Get started in minutes and share your professional links everywhere.
              </p>
            </motion.div>

            {/* Horizontal Timeline */}
            <div className="max-w-6xl mx-auto">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#282828]/20 to-transparent"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                  {steps.map((step, index) => {
                    const IconComponent = step.icon
                    return (
                      <motion.div
                        key={step.step}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.2 }}
                        className="relative flex flex-col items-center text-center group"
                      >
                        {/* Step number and icon */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="relative mb-8"
                        >
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-[#282828]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative w-20 h-20 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="space-y-4 mb-8">
                          <h3 className="text-2xl font-bold text-[#282828] group-hover:text-[#282828]/90 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed font-light max-w-xs mx-auto">
                            {step.description}
                          </p>
                        </div>

                        {/* Mini UI Card */}
                        <motion.div
                          whileHover={{ y: -4, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm"
                        >
                          <div className="text-left">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 bg-[#282828]/10 rounded-lg flex items-center justify-center">
                                <Monitor className="w-3 h-3 text-[#282828]" />
                              </div>
                              <span className="text-xs font-semibold text-[#282828]/70 uppercase tracking-wider">
                                {step.uiCard.title}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{step.uiCard.content}</p>
                            <button className="w-full bg-[#282828] hover:bg-[#282828]/90 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                              {step.uiCard.action}
                            </button>
                          </div>
                        </motion.div>

                        {/* Arrow for desktop */}
                        {index < steps.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                            className="hidden lg:block absolute top-10 left-full transform -translate-x-1/2 z-10"
                          >
                            <motion.div
                              animate={{ x: [0, 8, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              className="w-8 h-8 bg-white/80 backdrop-blur-sm border border-white/60 rounded-full flex items-center justify-center shadow-lg"
                            >
                              <ArrowRight className="w-4 h-4 text-[#282828]" />
                            </motion.div>
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Glass Accordion */}
        <section className="py-32 sm:py-40 lg:py-48 bg-white/60 relative">
          {/* Ambient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-teal-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] mb-6 leading-tight">
                Frequently asked <span className="text-[#282828]/80">questions</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Everything you need to know about getting started with Biztro link shortener.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Glow border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card */}
                  <div className="relative bg-white/40 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <motion.button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-white/50 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-[#282828] pr-4 group-hover:text-[#282828]/90 transition-colors">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#282828]/20 transition-colors duration-200"
                      >
                        <ChevronDown className="w-5 h-5 text-[#282828]" />
                      </motion.div>
                    </motion.button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedFaq === index ? "auto" : 0,
                        opacity: expandedFaq === index ? 1 : 0
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 0.3, delay: expandedFaq === index ? 0.1 : 0 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 border-t border-white/60 pt-6">
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Premium Final CTA */}
        <section className="py-32 sm:py-40 lg:py-48 bg-gradient-to-br from-[#282828] via-[#282828]/95 to-[#1a1a1a] relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, #fffbeb 1px, transparent 1px),
                  linear-gradient(to bottom, #fffbeb 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px'
              }} />
            </div>

            {/* Floating orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/8 to-yellow-400/8 rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Main headline */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-tight"
              >
                Ready to shorten links the
                <span className="block text-white/90">smart way?</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 leading-relaxed font-light"
              >
                Join thousands of businesses who trust Biztro to power their link sharing and tracking.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <Link href="/auth/signup">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                    <Button className="relative bg-white hover:bg-white/95 text-[#282828] hover:text-[#282828] shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold px-12 py-6 text-xl rounded-2xl w-full sm:w-auto">
                      Start Shortening
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </Link>

                <Link href="#demo">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative"
                  >
                    {/* Sparkle effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400"
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>

                    <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-12 py-6 text-xl rounded-2xl w-full sm:w-auto">
                      View Examples
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap justify-center gap-8 text-white/60"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">Secure & private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Lightning fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span className="font-medium">Real-time analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">50K+ businesses</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
