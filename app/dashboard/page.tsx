"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Eye,
  Link as LinkIcon,
  Scissors,
  QrCode,
  Palette,
  TrendingUp,
  Users,
  Plus,
  ArrowRight,
  ExternalLink
} from "lucide-react"
import { motion } from "framer-motion"

interface Analytics {
  totalViews: number
  totalClicks: number
  totalActions: number
  topLinks: Array<{ title: string; clicks: number }>
}

export default function DashboardHomePage() {
  const { data: session } = useSession()
  const router = useRouter()
  const [analytics, setAnalytics] = useState<Analytics>({
    totalViews: 0,
    totalClicks: 0,
    totalActions: 0,
    topLinks: []
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [session])

  const fetchAnalytics = async () => {
    try {
      // Simulate analytics data - replace with actual API calls
      setTimeout(() => {
        setAnalytics({
          totalViews: 1247,
          totalClicks: 89,
          totalActions: 34,
          topLinks: [
            { title: "Website", clicks: 45 },
            { title: "Instagram", clicks: 23 },
            { title: "Contact", clicks: 12 }
          ]
        })
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching analytics:", error)
      setIsLoading(false)
    }
  }

  const quickActions = [
    {
      title: "Create Short Link",
      description: "Generate a branded short link",
      icon: Scissors,
      href: "/dashboard/short-links",
      color: "bg-blue-50 hover:bg-blue-100 text-blue-700"
    },
    {
      title: "Generate QR Code",
      description: "Create QR codes for your links",
      icon: QrCode,
      href: "/dashboard/qr-codes",
      color: "bg-purple-50 hover:bg-purple-100 text-purple-700"
    },
    {
      title: "Customize Page",
      description: "Update your appearance and themes",
      icon: Palette,
      href: "/dashboard/appearance",
      color: "bg-green-50 hover:bg-green-100 text-green-700"
    }
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#282828]/20 border-t-[#282828] mx-auto mb-4"></div>
          <p className="text-[#282828]/70 text-lg">Loading your dashboard...</p>
        </motion.div>
      </div>
    )
  }

  const username = session?.user?.email?.split("@")[0] || "yourname"
  const profileUrl = `https://biztro-link.vercel.app/${username}`

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-[#282828]/5 p-8"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          {/* Welcome Text */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-[#282828] mb-3"
            >
              Welcome back, {session?.user?.name?.split(" ")[0] || "there"}! 👋
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-[#282828]/70 mb-6"
            >
              Your Biztro page is live and performing well. Here's what's happening with your links.
            </motion.p>

            {/* Profile Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-white/30"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-[#282828]/10 rounded-xl flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-[#282828]" />
                </div>
                <div>
                  <p className="font-medium text-[#282828]">Your Biztro Page</p>
                  <p className="text-sm text-[#282828]/60">{profileUrl}</p>
                </div>
              </div>
              <Button
                onClick={() => window.open(profileUrl, "_blank")}
                className="bg-[#282828] hover:bg-[#282828]/90 text-white rounded-xl px-6"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Page
              </Button>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:w-80"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 rounded-2xl p-6 border border-white/30">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-[#282828]/60" />
                  <span className="text-sm font-medium text-[#282828]/60">Page Views</span>
                </div>
                <p className="text-3xl font-bold text-[#282828]">{analytics.totalViews.toLocaleString()}</p>
              </div>

              <div className="bg-white/60 rounded-2xl p-6 border border-white/30">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#282828]/60" />
                  <span className="text-sm font-medium text-[#282828]/60">Total Clicks</span>
                </div>
                <p className="text-3xl font-bold text-[#282828]">{analytics.totalClicks.toLocaleString()}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#282828] mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Link href={action.href}>
                <Card className="group hover:shadow-xl hover:shadow-[#282828]/10 transition-all duration-300 cursor-pointer border-white/20 hover:border-white/40">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#282828] mb-2 group-hover:text-[#282828]/80 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-[#282828]/60 text-sm leading-relaxed">
                      {action.description}
                    </p>
                    <div className="flex items-center mt-4 text-[#282828]/50 group-hover:text-[#282828] transition-colors">
                      <span className="text-sm font-medium">Get started</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Analytics Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid lg:grid-cols-2 gap-8"
      >
        {/* Performance Summary */}
        <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-[#282828]/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#282828]">
              <TrendingUp className="w-5 h-5" />
              Performance Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#fffbeb]/50 rounded-2xl border border-[#fffbeb]">
                <p className="text-2xl font-bold text-[#282828]">{analytics.totalViews}</p>
                <p className="text-sm text-[#282828]/60">Views</p>
              </div>
              <div className="text-center p-4 bg-[#fffbeb]/50 rounded-2xl border border-[#fffbeb]">
                <p className="text-2xl font-bold text-[#282828]">{analytics.totalClicks}</p>
                <p className="text-sm text-[#282828]/60">Clicks</p>
              </div>
              <div className="text-center p-4 bg-[#fffbeb]/50 rounded-2xl border border-[#fffbeb]">
                <p className="text-2xl font-bold text-[#282828]">{analytics.totalActions}</p>
                <p className="text-sm text-[#282828]/60">Actions</p>
              </div>
            </div>

            {analytics.topLinks.length > 0 && (
              <div>
                <h4 className="font-semibold text-[#282828] mb-3">Top Performing Links</h4>
                <div className="space-y-2">
                  {analytics.topLinks.map((link, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-xl">
                      <span className="text-[#282828] font-medium">{link.title}</span>
                      <span className="text-[#282828]/60 text-sm">{link.clicks} clicks</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-[#282828]/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#282828]">
              <Users className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#fffbeb]/30 rounded-2xl border border-[#fffbeb]/50">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-green-700" />
                </div>
                <div className="flex-1">
                  <p className="text-[#282828] font-medium">Page viewed</p>
                  <p className="text-sm text-[#282828]/60">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#fffbeb]/30 rounded-2xl border border-[#fffbeb]/50">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-blue-700" />
                </div>
                <div className="flex-1">
                  <p className="text-[#282828] font-medium">Link clicked: Website</p>
                  <p className="text-sm text-[#282828]/60">4 hours ago</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#fffbeb]/30 rounded-2xl border border-[#fffbeb]/50">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-purple-700" />
                </div>
                <div className="flex-1">
                  <p className="text-[#282828] font-medium">QR Code generated</p>
                  <p className="text-sm text-[#282828]/60">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Getting Started Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="bg-gradient-to-r from-[#282828] to-[#282828]/90 text-white rounded-3xl p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to supercharge your online presence?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore all the powerful features Biztro has to offer and take your business to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Link href="/dashboard/links">
            <div className="text-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <LinkIcon className="w-8 h-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <h3 className="font-semibold mb-2">Link-in-Bio</h3>
              <p className="text-sm text-white/70">Create and manage your professional link page</p>
            </div>
          </Link>

          <Link href="/dashboard/short-links">
            <div className="text-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <Scissors className="w-8 h-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <h3 className="font-semibold mb-2">Short Links</h3>
              <p className="text-sm text-white/70">Generate branded short links with analytics</p>
            </div>
          </Link>

          <Link href="/dashboard/qr-codes">
            <div className="text-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <QrCode className="w-8 h-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <h3 className="font-semibold mb-2">QR Codes</h3>
              <p className="text-sm text-white/70">Create custom QR codes for your links</p>
            </div>
          </Link>

          <Link href="/dashboard/appearance">
            <div className="text-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <Palette className="w-8 h-8 mx-auto mb-3 text-white/80 group-hover:text-white transition-colors" />
              <h3 className="font-semibold mb-2">Appearance</h3>
              <p className="text-sm text-white/70">Customize your page theme and branding</p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

