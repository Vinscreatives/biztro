"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, MousePointerClick, Eye } from "lucide-react"

interface LinkStats {
  id: string
  title: string
  clicks: number
}

interface AnalyticsData {
  totalClicks: number
  profileViews: number
  topLinks: LinkStats[]
}

export default function AnalyticsPage() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalClicks: 0,
    profileViews: 0,
    topLinks: [],
  })

  useEffect(() => {
    fetchAnalytics()
  }, [session])

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("/api/analytics")
      if (response.ok) {
        const data = await response.json()
        setAnalytics(data)
      }
    } catch (error) {
      console.error("Error fetching analytics:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#282828]"></div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#282828] mb-2">Analytics</h1>
        <p className="text-gray-600">Track your profile performance</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <MousePointerClick className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#282828]">
              {analytics.totalClicks}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              All-time link clicks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#282828]">
              {analytics.profileViews}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Total profile visits
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Links</CardTitle>
        </CardHeader>
        <CardContent>
          {analytics.topLinks.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No clicks yet. Start sharing your profile!
            </p>
          ) : (
            <div className="space-y-4">
              {analytics.topLinks.map((link, index) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#282828] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#282828]">{link.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold text-[#282828]">{link.clicks}</span>
                    <span className="text-sm text-gray-500">clicks</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

