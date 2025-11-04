"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ExternalLink,
  MapPin,
  Globe,
  Building2,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  QrCode,
  Coffee,
  Dumbbell,
  Camera,
  Briefcase,
  UserPlus,
  LogIn,
  Link as LinkIcon,
  Music,
  Video,
  ShoppingBag,
  BookOpen,
  Calendar,
  FileText,
  Image,
  Play,
  Home,
  Store,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Gamepad2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

interface Link {
  id: string
  title: string
  url: string
  icon?: string
  order: number
}

interface Service {
  id: string
  name: string
  description?: string
  price?: string
  icon?: string
}

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface ContactInfo {
  phone?: string
  email?: string
  whatsapp?: string
  location?: string
  website?: string
}

interface Appearance {
  theme: string
  bgColor?: string
  textColor?: string
  buttonStyle: string
  font: string
  showAvatar: boolean
  showSocials: boolean
  showBio?: boolean
  showServices?: boolean
  showContact?: boolean
}

interface User {
  id: string
  name?: string
  username?: string
  image?: string
  // Onboarding data directly in user model
  businessName?: string
  businessTagline?: string
  industry?: string
  bio?: string
  services?: Service[]
  socialLinks?: SocialLink[]
  contactInfo?: ContactInfo
  links: Link[]
  appearance?: Appearance | null
}

export default function PublicProfile({ user }: { user: User }) {
  const [clickedLinks, setClickedLinks] = useState<Set<string>>(new Set())

  const appearance = user.appearance || {
    theme: "light",
    bgColor: "#ffffff",
    textColor: "#000000",
    buttonStyle: "rounded",
    font: "inter",
    showAvatar: true,
    showSocials: true,
    showBio: true,
    showServices: true,
    showContact: true,
  }

  const handleLinkClick = async (linkId: string, url: string) => {
    if (clickedLinks.has(linkId)) return

    setClickedLinks(new Set([...clickedLinks, linkId]))

    // Track click asynchronously, don't block navigation
    fetch("/api/analytics/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId, userId: user.id }),
    }).catch((error) => {
      console.error("Error tracking click:", error)
    })

    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleContactClick = (type: string, value: string) => {
    let url = ""
    switch (type) {
      case "phone":
        url = `tel:${value}`
        break
      case "email":
        url = `mailto:${value}`
        break
      case "whatsapp":
        url = `https://wa.me/${value.replace(/\D/g, "")}`
        break
      default:
        url = value
    }
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return Instagram
      case "twitter":
        return Twitter
      case "facebook":
        return Facebook
      case "linkedin":
        return Linkedin
      case "youtube":
        return Youtube
      default:
        return Globe
    }
  }

  const getServiceIcon = (serviceName: string) => {
    const name = serviceName.toLowerCase()
    if (name.includes("coffee") || name.includes("cafe")) return Coffee
    if (name.includes("fitness") || name.includes("gym")) return Dumbbell
    if (name.includes("photo") || name.includes("camera")) return Camera
    if (name.includes("consult") || name.includes("business")) return Briefcase
    return Star
  }

  const getLinkIcon = (linkTitle: string) => {
    const title = linkTitle.toLowerCase()

    // Social Media
    if (title.includes("instagram")) return Instagram
    if (title.includes("twitter") || title.includes("x")) return Twitter
    if (title.includes("facebook")) return Facebook
    if (title.includes("linkedin") || title.includes("linked")) return Linkedin
    if (title.includes("youtube")) return Youtube

    // Communication
    if (title.includes("email") || title.includes("mail")) return Mail
    if (title.includes("phone") || title.includes("call")) return Phone
    if (title.includes("whatsapp")) return MessageCircle

    // Content & Media
    if (title.includes("music") || title.includes("spotify") || title.includes("soundcloud")) return Music
    if (title.includes("video") || title.includes("tiktok") || title.includes("vimeo")) return Video
    if (title.includes("photo") || title.includes("image")) return Image
    if (title.includes("blog") || title.includes("article")) return FileText
    if (title.includes("book") || title.includes("read")) return BookOpen

    // Business & Professional
    if (title.includes("website") || title.includes("site")) return Globe
    if (title.includes("portfolio")) return Palette
    if (title.includes("store") || title.includes("shop")) return Store
    if (title.includes("booking") || title.includes("appointment")) return Calendar
    if (title.includes("home")) return Home
    if (title.includes("code") || title.includes("github") || title.includes("dev")) return Code

    // Gaming & Entertainment
    if (title.includes("game") || title.includes("gaming")) return Gamepad2
    if (title.includes("play") || title.includes("stream")) return Play

    // Shopping & Commerce
    if (title.includes("buy") || title.includes("purchase") || title.includes("etsy") || title.includes("shopify")) return ShoppingBag

    // Technology
    if (title.includes("app") || title.includes("mobile")) return Smartphone
    if (title.includes("web") || title.includes("desktop")) return Monitor

    // Default fallback
    return LinkIcon
  }

  return (
    <div className="min-h-screen bg-[#fffbeb] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #282828 1px, transparent 1px),
              linear-gradient(to bottom, #282828 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Ambient Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#fffbeb]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-[#282828]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-sm sm:max-w-md">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden"
          >
            {/* Profile Header */}
            <div className="px-6 sm:px-8 pt-8 pb-6 text-center">
              {/* Avatar */}
              {appearance.showAvatar && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="relative mx-auto mb-6"
                >
                  {user.image ? (
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#282828]/10 to-[#282828]/5 p-1 shadow-lg">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={user.image}
                          alt={user.businessName || user.name || "Profile"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#282828]/10 to-[#282828]/5 flex items-center justify-center shadow-lg">
                      <span className="text-3xl sm:text-4xl text-[#282828]/60 font-semibold">
                        {(user.businessName || user.name || user.username || "U")[0].toUpperCase()}
                      </span>
                    </div>
                  )}

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#fffbeb]/40 blur-xl -z-10 scale-150"></div>
                </motion.div>
              )}

              {/* Business Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-2xl sm:text-3xl font-bold text-[#282828] mb-2 leading-tight">
                  {user.businessName || user.name || user.username}
                </h1>

                {user.businessTagline && (
                  <p className="text-[#282828]/70 text-base sm:text-lg mb-4 leading-relaxed">
                    {user.businessTagline}
                  </p>
                )}

                {/* Professional Metadata */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm text-[#282828]/60 mb-4">
                  {user.industry && (
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>{user.industry}</span>
                    </div>
                  )}
                  {user.contactInfo?.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{user.contactInfo.location}</span>
                    </div>
                  )}
                  {user.contactInfo?.website && (
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-4 h-4" />
                      <span>{user.contactInfo.website.replace(/^https?:\/\//, "")}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* About Section */}
            {appearance.showBio && user.bio && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="px-6 sm:px-8 pb-6"
              >
                <div className="bg-gradient-to-r from-[#fffbeb]/50 to-white rounded-2xl p-4 border border-[#fffbeb]/60">
                  <p className="text-[#282828]/80 leading-relaxed text-sm sm:text-base">
                    {user.bio}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Services Section */}
            {appearance.showServices && user.services && user.services.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-6 sm:px-8 pb-6"
              >
                <h3 className="text-lg font-semibold text-[#282828] mb-4">Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {user.services.slice(0, 4).map((service, index) => {
                    const IconComponent = getServiceIcon(service.name)
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#282828]/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-[#282828]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-[#282828] text-sm truncate">{service.name}</div>
                            {service.price && (
                              <div className="text-[#282828]/60 text-xs">{service.price}</div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* Contact Actions */}
            {appearance.showContact && user.contactInfo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="px-6 sm:px-8 pb-6"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {user.contactInfo.phone && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContactClick("phone", user.contactInfo!.phone!)}
                      className="w-12 h-12 rounded-2xl bg-[#282828]/10 hover:bg-[#282828]/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5 text-[#282828]" />
                    </motion.button>
                  )}
                  {user.contactInfo.email && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContactClick("email", user.contactInfo!.email!)}
                      className="w-12 h-12 rounded-2xl bg-[#282828]/10 hover:bg-[#282828]/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                    >
                      <Mail className="w-5 h-5 text-[#282828]" />
                    </motion.button>
                  )}
                  {user.contactInfo.whatsapp && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleContactClick("whatsapp", user.contactInfo!.whatsapp!)}
                      className="w-12 h-12 rounded-2xl bg-[#282828]/10 hover:bg-[#282828]/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 text-[#282828]" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Links Section */}
            {user.links.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="px-6 sm:px-8 pb-6"
              >
                <div className="space-y-3">
                  {user.links.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 100 }}
                    >
                      <Button
                        onClick={() => handleLinkClick(link.id, link.url)}
                        className="w-full h-14 bg-white hover:bg-[#fffbeb] border border-gray-100/60 hover:border-[#282828]/20 text-[#282828] hover:text-[#282828] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 rounded-2xl group"
                      >
                        <div className="flex items-center justify-between w-full px-1">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="flex-shrink-0">
                              {(() => {
                                const IconComponent = getLinkIcon(link.title)
                                return <IconComponent className="w-5 h-5 text-[#282828]" />
                              })()}
                            </div>
                            <span className="font-medium text-left truncate">{link.title}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-[#282828]/60 group-hover:text-[#282828] flex-shrink-0 ml-2" />
                        </div>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Social Links */}
            {appearance.showSocials && user.socialLinks && user.socialLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="px-6 sm:px-8 pb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  {user.socialLinks.map((social, index) => {
                    const IconComponent = getSocialIcon(social.platform)
                    return (
                      <motion.a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-xl bg-[#282828]/10 hover:bg-[#282828]/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                      >
                        <IconComponent className="w-5 h-5 text-[#282828]" />
                      </motion.a>
                    )
                  })}

                  {/* QR Code Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#282828] to-[#282828]/80 hover:from-[#282828]/90 hover:to-[#282828]/70 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <QrCode className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Footer */}
            <div className="px-6 sm:px-8 pb-6 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center justify-center"
              >
                <div className="text-xs text-[#282828]/50 mr-2">Powered by</div>
                <div className="scale-75 opacity-70">
                  <Logo size="sm" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Account Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-8 space-y-4"
          >
            {/* Primary Button - Create Account */}
            <Link href="/auth/signup" className="block">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button className="w-full h-14 bg-[#282828] hover:bg-[#282828]/90 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-base relative overflow-hidden group">
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <UserPlus className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Create Your Biztro Account</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </Button>
              </motion.div>
            </Link>

            {/* Secondary Button - Sign In */}
            <Link href="/auth/signin" className="block">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button variant="outline" className="w-full h-14 border-2 border-[#282828]/30 hover:border-[#282828]/60 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-[#282828] hover:text-[#282828] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base group">
                  <div className="flex items-center justify-center gap-3">
                    <LogIn className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Sign In to Your Account</span>
                  </div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {user.links.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#282828]/10 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-[#282828]/60" />
              </div>
              <p className="text-[#282828]/60">No links available</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

