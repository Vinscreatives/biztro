"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Calendar,
  Download,
  Filter,
  ChevronDown
} from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AnalyticsData {
  totalViews: number
  totalClicks: number
  totalScans: number
  conversionRate: number
  topLinks: Array<{ name: string; clicks: number; views: number }>
  trafficSources: Array<{ name: string; value: number; color: string }>
  dailyStats: Array<{ date: string; views: number; clicks: number; scans: number }>
  deviceStats: Array<{ device: string; users: number; percentage: number }>
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")
  const [isLoading, setIsLoading] = useState(true)
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalViews: 0,
    totalClicks: 0,
    totalScans: 0,
    conversionRate: 0,
    topLinks: [],
    trafficSources: [],
    dailyStats: [],
    deviceStats: []
  })

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange])

  const fetchAnalytics = async () => {
    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        const mockData: AnalyticsData = {
          totalViews: 1247,
          totalClicks: 89,
          totalScans: 34,
          conversionRate: 7.1,
          topLinks: [
            { name: "Website", clicks: 45, views: 234 },
            { name: "Instagram", clicks: 23, views: 189 },
            { name: "Contact", clicks: 12, views: 156 },
            { name: "LinkedIn", clicks: 9, views: 98 }
          ],
          trafficSources: [
            { name: "Direct", value: 45, color: "#282828" },
            { name: "Social Media", value: 30, color: "#6366f1" },
            { name: "Search", value: 15, color: "#10b981" },
            { name: "Email", value: 10, color: "#f59e0b" }
          ],
          dailyStats: [
            { date: "2024-01-08", views: 45, clicks: 3, scans: 1 },
            { date: "2024-01-09", views: 67, clicks: 5, scans: 2 },
            { date: "2024-01-10", views: 89, clicks: 7, scans: 3 },
            { date: "2024-01-11", views: 123, clicks: 9, scans: 4 },
            { date: "2024-01-12", views: 156, clicks: 12, scans: 5 },
            { date: "2024-01-13", views: 178, clicks: 15, scans: 6 },
            { date: "2024-01-14", views: 201, clicks: 18, scans: 7 },
            { date: "2024-01-15", views: 234, clicks: 20, scans: 6 }
          ],
          deviceStats: [
            { device: "Mobile", users: 756, percentage: 61 },
            { device: "Desktop", users: 378, percentage: 30 },
            { device: "Tablet", users: 113, percentage: 9 }
          ]
        }
        setAnalytics(mockData)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching analytics:", error)
      setIsLoading(false)
    }
  }

  const timeRangeOptions = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 3 months" },
    { value: "1y", label: "Last year" }
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
          <p className="text-[#282828]/70 text-lg">Loading analytics...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-[#282828] mb-2">Analytics</h1>
          <p className="text-[#282828]/70">Track your performance and audience insights</p>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-[#282828]/20 hover:bg-[#282828]/5">
                <Calendar className="w-4 h-4 mr-2" />
                {timeRangeOptions.find(option => option.value === timeRange)?.label}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-xl border-white/20">
              {timeRangeOptions.map(option => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setTimeRange(option.value)}
                  className="hover:bg-[#282828]/5"
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" className="border-[#282828]/20 hover:bg-[#282828]/5">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-blue-600" />
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-blue-600 text-sm font-medium">Total Views</p>
              <p className="text-3xl font-bold text-blue-900">{analytics.totalViews.toLocaleString()}</p>
              <p className="text-blue-600/70 text-sm mt-1">+12% from last period</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-green-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-green-600 text-sm font-medium">Total Clicks</p>
              <p className="text-3xl font-bold text-green-900">{analytics.totalClicks.toLocaleString()}</p>
              <p className="text-green-600/70 text-sm mt-1">+8% from last period</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-600" />
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className="text-purple-600 text-sm font-medium">QR Scans</p>
              <p className="text-3xl font-bold text-purple-900">{analytics.totalScans.toLocaleString()}</p>
              <p className="text-purple-600/70 text-sm mt-1">+15% from last period</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-orange-600 text-sm font-medium">Conversion Rate</p>
              <p className="text-3xl font-bold text-orange-900">{analytics.conversionRate}%</p>
              <p className="text-orange-600/70 text-sm mt-1">+2.1% from last period</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Traffic Overview Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <TrendingUp className="w-5 h-5" />
                Traffic Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={analytics.dailyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#282828" opacity={0.1} />
                  <XAxis
                    dataKey="date"
                    stroke="#282828"
                    fontSize={12}
                    tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  />
                  <YAxis stroke="#282828" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                    labelFormatter={(value) => new Date(value).toLocaleDateString()}
                  />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stackId="1"
                    stroke="#282828"
                    fill="#282828"
                    fillOpacity={0.1}
                    name="Views"
                  />
                  <Area
                    type="monotone"
                    dataKey="clicks"
                    stackId="2"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                    name="Clicks"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <Users className="w-5 h-5" />
                Traffic Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analytics.trafficSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {analytics.trafficSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value, entry) => (
                      <span style={{ color: entry.color }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Performing Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <BarChart3 className="w-5 h-5" />
                Top Performing Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analytics.topLinks} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#282828" opacity={0.1} />
                  <XAxis type="number" stroke="#282828" fontSize={12} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="#282828"
                    fontSize={12}
                    width={80}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                  <Bar dataKey="clicks" fill="#282828" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Device Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <Eye className="w-5 h-5" />
                Device Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analytics.deviceStats.map((device, index) => (
                <motion.div
                  key={device.device}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-[#fffbeb]/30 rounded-2xl border border-[#fffbeb]/50"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      device.device === "Mobile" ? "bg-green-500" :
                      device.device === "Desktop" ? "bg-blue-500" :
                      "bg-purple-500"
                    }`}></div>
                    <div>
                      <p className="font-semibold text-[#282828]">{device.device}</p>
                      <p className="text-sm text-[#282828]/60">{device.users.toLocaleString()} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#282828]">{device.percentage}%</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-[#282828]/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#282828]/60">Most popular device:</span>
                  <span className="font-semibold text-[#282828]">
                    {analytics.deviceStats.reduce((prev, current) =>
                      prev.users > current.users ? prev : current
                    ).device}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Export Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-[#282828] to-[#282828]/90 text-white rounded-3xl p-8 shadow-xl"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Detailed Reports?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Export your analytics data for deeper insights and custom reporting.
            Get comprehensive reports with advanced metrics and time-based comparisons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#282828] hover:bg-white/90">
              <Download className="w-4 h-4 mr-2" />
              Export PDF Report
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" />
              Export CSV Data
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}