"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/ui/navigation"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  CheckCircle,
  Smartphone,
  BarChart3,
  Share2,
  Palette,
  Zap,
  Settings,
  Link as LinkIcon,
  ChevronDown,
  ChevronUp,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  Globe,
  Heart,
  Shield,
  Play,
  Edit3,
  Eye,
  Monitor,
  Briefcase,
  User as UserIcon,
  Layers
} from "lucide-react"

export default function LinkInBioPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [demoMode, setDemoMode] = useState<'business' | 'creator' | 'personal'>('business')

  // Refs for scroll animations
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  const benefits = [
    {
      icon: Shield,
      title: "Professional first impression",
      description: "Give your business a polished, credible digital presence instantly.",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-ready & share everywhere",
      description: "Perfect for WhatsApp, Instagram, TikTok, bios, and business cards.",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Smart analytics",
      description: "Track link clicks, engagement, and traffic behavior.",
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Palette,
      title: "Custom branding",
      description: "Themes, colors, fonts, logos — build your brand, not ours.",
      color: "from-pink-50 to-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Briefcase,
      title: "Optimized for business, not just creators",
      description: "Built for entrepreneurs, service providers, and real-world businesses.",
      color: "from-amber-50 to-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Zap,
      title: "Lightning-fast pages",
      description: "Fast, reliable, and optimized for growing your audience.",
      color: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600"
    }
  ]

  const steps = [
    {
      step: "01",
      title: "Create your Biztro account",
      description: "Sign up in seconds and get started with our simple onboarding.",
      icon: UserIcon,
      uiCard: {
        title: "Welcome to Biztro",
        content: "Enter your details",
        action: "Get Started"
      }
    },
    {
      step: "02",
      title: "Customize your page",
      description: "Choose your theme, add your content, and make it uniquely yours.",
      icon: Palette,
      uiCard: {
        title: "Page Editor",
        content: "Drag, drop, customize",
        action: "Save Changes"
      }
    },
    {
      step: "03",
      title: "Share your link & grow your audience",
      description: "Share your Biztro link everywhere and watch your business grow.",
      icon: Share2,
      uiCard: {
        title: "Your Link",
        content: "biztro.page/yourname",
        action: "Copy Link"
      }
    }
  ]

  const faqs = [
    {
      question: "What is a Link-in-Bio page?",
      answer: "A Link-in-Bio page is a single, customizable landing page that serves as the central hub for all your important links, content, and business information. Instead of using a plain text bio on social media, you can share one professional link that leads to a beautiful page showcasing your brand, services, and contact details."
    },
    {
      question: "Is Biztro free?",
      answer: "Yes! Biztro offers a free plan that includes all essential features to get started. You can create your professional Link-in-Bio page, customize it with your branding, and share unlimited links at no cost. Premium plans are available for advanced analytics, custom domains, and additional features."
    },
    {
      question: "Can I customize my Biztro page?",
      answer: "Absolutely! Biztro offers extensive customization options including themes, color schemes, fonts, logos, and layouts. You can add your brand colors, upload custom images, and arrange content exactly how you want it to match your business identity."
    },
    {
      question: "Can I use it for my business / service / shop?",
      answer: "Yes! Biztro is designed specifically for businesses, service providers, shops, and entrepreneurs. Unlike many Link-in-Bio tools that focus only on creators, Biztro includes business-focused features like service listings, contact forms, appointment booking, and professional layouts."
    },
    {
      question: "Do you offer analytics?",
      answer: "Yes! Biztro provides comprehensive analytics to help you understand your audience and optimize your page. Track link clicks, visitor demographics, popular content, and engagement metrics to make data-driven decisions for your business growth."
    },
    {
      question: "Do I need a website?",
      answer: "No, you don't need a full website to use Biztro. Your Link-in-Bio page serves as a professional online presence that can replace or complement a traditional website. It's perfect for businesses just getting started or those who want a simple, focused online presence."
    }
  ]

  // Get demo content based on mode
  const getDemoContent = () => {
    switch (demoMode) {
      case 'business':
        return {
          avatar: <Briefcase className="w-8 h-8 text-white" />,
          title: "Sarah Johnson",
          subtitle: "Marketing Consultant",
          buttons: [
            { icon: Phone, text: "Book Consultation", color: "bg-[#282828]" },
            { icon: Mail, text: "Send Email", color: "bg-white border border-gray-200" },
            { icon: MessageCircle, text: "WhatsApp", color: "bg-green-600" }
          ]
        }
      case 'creator':
        return {
          avatar: <UserIcon className="w-8 h-8 text-white" />,
          title: "Alex Chen",
          subtitle: "Content Creator",
          buttons: [
            { icon: Play, text: "Watch Latest Video", color: "bg-[#282828]" },
            { icon: Instagram, text: "Follow on Instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
            { icon: Heart, text: "Join Community", color: "bg-white border border-gray-200" }
          ]
        }
      case 'personal':
        return {
          avatar: <Sparkles className="w-8 h-8 text-white" />,
          title: "Maya Patel",
          subtitle: "Freelance Designer",
          buttons: [
            { icon: Globe, text: "View Portfolio", color: "bg-[#282828]" },
            { icon: Mail, text: "Get in Touch", color: "bg-white border border-gray-200" },
            { icon: Layers, text: "See Projects", color: "bg-blue-600" }
          ]
        }
      default:
        return getDemoContent()
    }
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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
      <Navigation currentPage="link-in-bio" />

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
                  <Sparkles className="w-4 h-4 text-[#282828]" />
                  <span className="text-sm font-medium text-[#282828]">For entrepreneurs & small businesses</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#282828] leading-[0.9] tracking-tight"
                >
                  Your business identity,
                  <span className="block text-[#282828]/80">beautifully delivered</span>
                  <span className="block text-[#282828]/60">in one link</span>
                </motion.h1>

                {/* Sub-line */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                >
                  A modern, credible link page designed for real small businesses — not just creators.
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
                      Build Your Page
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button className="bg-white/80 hover:bg-white backdrop-blur-sm border border-white/60 hover:border-white/80 text-[#282828] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold px-10 py-5 text-lg rounded-2xl w-full sm:w-auto">
                      See Live Examples
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
                    <Users className="w-4 h-4" />
                    <span className="font-medium">Trusted by entrepreneurs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">Rated 4.9 by small business owners</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4" />
                    <span className="font-medium">Built for professional use</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Animated Phone */}
              <motion.div
                style={{ y: phoneY, rotateY: phoneRotate }}
                className="relative"
              >
                <div className="relative mx-auto max-w-sm lg:max-w-md xl:max-w-lg">
                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl"
                  />
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -3, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl"
                  />

                  {/* Phone Mockup */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl border border-white/10"
                  >
                    {/* Screen */}
                    <div className="bg-white rounded-[2.2rem] overflow-hidden shadow-inner">
                      {/* Status Bar */}
                      <div className="h-7 bg-[#282828] flex items-center justify-between px-6 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 bg-white rounded-full"></div>
                          <div className="w-3 h-1.5 bg-white rounded-full"></div>
                          <div className="w-3 h-1.5 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Content Preview */}
                      <div className="p-8 space-y-8">
                        {/* Avatar and Name */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="text-center"
                        >
                          <div className="w-24 h-24 bg-gradient-to-br from-[#282828] via-[#282828]/90 to-[#282828]/70 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                            <Briefcase className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#282828] mb-2">Your Business Name</h3>
                          <p className="text-gray-600">Professional services & consulting</p>
                        </motion.div>

                        {/* Links */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1 }}
                          className="space-y-4"
                        >
                          <button className="w-full h-14 bg-[#fffbeb] hover:bg-[#fffbeb]/80 border border-gray-100/50 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Phone className="w-5 h-5 text-[#282828]" />
                            <span className="font-semibold text-[#282828]">Call Now</span>
                          </button>
                          <button className="w-full h-14 bg-[#fffbeb] hover:bg-[#fffbeb]/80 border border-gray-100/50 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Mail className="w-5 h-5 text-[#282828]" />
                            <span className="font-semibold text-[#282828]">Email Us</span>
                          </button>
                          <button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-semibold">WhatsApp</span>
                          </button>
                        </motion.div>
                      </div>
                    </div>
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
                Why it's <span className="text-[#282828]/80">powerful</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Everything you need to establish a professional online presence and grow your business.
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
                Create beautiful, professional pages that showcase your business exactly how you want.
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
                    { key: 'business', label: '🟡 Business', icon: Briefcase },
                    { key: 'creator', label: '🔵 Creator', icon: UserIcon },
                    { key: 'personal', label: '⚫ Personal', icon: Sparkles }
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
                  {/* Left: Editor Panel with Checklist */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-br from-[#282828] to-[#282828]/80 rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <Edit3 className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#282828]">Easy customization</h3>
                        <p className="text-gray-600">Drag, drop, and personalize in minutes</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { icon: Palette, text: "Choose your theme & colors", delay: 0.8 },
                        { icon: LinkIcon, text: "Add unlimited links & content", delay: 1.0 },
                        { icon: TrendingUp, text: "Track performance & analytics", delay: 1.2 }
                      ].map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <motion.div
                            key={item.text}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className="group flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm border border-white/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                          >
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200"
                            >
                              <IconComponent className="w-6 h-6 text-blue-600" />
                            </motion.div>
                            <span className="text-[#282828] font-semibold group-hover:text-[#282828]/90 transition-colors">
                              {item.text}
                            </span>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                              className="ml-auto w-2 h-2 bg-green-500 rounded-full"
                            />
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>

                  {/* Right: Live Preview Card */}
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
                      {/* Header with avatar */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="text-center mb-8"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-[#282828] via-[#282828]/90 to-[#282828]/70 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                          {getDemoContent().avatar}
                        </div>
                        <h4 className="text-2xl font-bold text-[#282828] mb-2">{getDemoContent().title}</h4>
                        <p className="text-gray-600">{getDemoContent().subtitle}</p>
                      </motion.div>

                      {/* Action buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="space-y-4"
                      >
                        {getDemoContent().buttons.map((button, index) => {
                          const IconComponent = button.icon
                          return (
                            <motion.button
                              key={index}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full h-14 ${button.color} rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold`}
                            >
                              <IconComponent className="w-5 h-5" />
                              <span>{button.text}</span>
                            </motion.button>
                          )
                        })}
                      </motion.div>
                    </motion.div>

                    {/* Floating indicator */}
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
                      <Eye className="w-4 h-4 text-white" />
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
                Get started in minutes and share your professional link everywhere.
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
                Everything you need to know about getting started with Biztro.
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
                Ready to build your
                <span className="block text-white/90">business identity?</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 leading-relaxed font-light"
              >
                Join thousands of entrepreneurs who've transformed their online presence with Biztro.
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
                      Start Free
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </Link>

                <Link href="#demo">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-12 py-6 text-xl rounded-2xl w-full sm:w-auto">
                      View Real Examples
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
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">10,000+ businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9/5 rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
