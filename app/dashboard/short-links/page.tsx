"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import {
  Plus,
  Copy,
  ExternalLink,
  Calendar,
  TrendingUp,
  Search,
  Filter,
  MoreHorizontal,
  Scissors
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ShortLink {
  id: string
  originalUrl: string
  shortUrl: string
  clicks: number
  createdAt: string
  title?: string
  tags?: string[]
}

export default function ShortLinksPage() {
  const { toast } = useToast()
  const [links, setLinks] = useState<ShortLink[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    originalUrl: "",
    title: "",
    customSlug: ""
  })

  useEffect(() => {
    fetchLinks()
  }, [])

  const fetchLinks = async () => {
    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        const mockLinks: ShortLink[] = [
          {
            id: "1",
            originalUrl: "https://www.example.com/very-long-url-that-needs-shortening",
            shortUrl: "biztro.link/abc123",
            clicks: 247,
            createdAt: "2024-01-15",
            title: "Example Long URL",
            tags: ["marketing", "blog"]
          },
          {
            id: "2",
            originalUrl: "https://mywebsite.com/products/special-offer-page",
            shortUrl: "biztro.link/xyz789",
            clicks: 89,
            createdAt: "2024-01-12",
            title: "Special Offer",
            tags: ["sales", "promotion"]
          },
          {
            id: "3",
            originalUrl: "https://linkedin.com/company/mycompany",
            shortUrl: "biztro.link/lnk456",
            clicks: 156,
            createdAt: "2024-01-10",
            title: "LinkedIn Company Page",
            tags: ["social", "business"]
          }
        ]
        setLinks(mockLinks)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching links:", error)
      setIsLoading(false)
    }
  }

  const handleCreate = async () => {
    if (!formData.originalUrl) {
      toast({
        title: "Validation Error",
        description: "Please enter a URL to shorten",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        const newLink: ShortLink = {
          id: Date.now().toString(),
          originalUrl: formData.originalUrl,
          shortUrl: `biztro.link/${formData.customSlug || Math.random().toString(36).substr(2, 6)}`,
          clicks: 0,
          createdAt: new Date().toISOString().split('T')[0],
          title: formData.title || "Untitled Link",
          tags: []
        }

        setLinks([newLink, ...links])
        setFormData({ originalUrl: "", title: "", customSlug: "" })
        setIsCreateModalOpen(false)

        toast({
          title: "Success!",
          description: "Short link created successfully",
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create short link",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      })
    }
  }

  const filteredLinks = links.filter(link =>
    link.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.originalUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.shortUrl.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#282828]/20 border-t-[#282828] mx-auto mb-4"></div>
          <p className="text-[#282828]/70 text-lg">Loading your short links...</p>
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
          <h1 className="text-3xl font-bold text-[#282828] mb-2">Short Links</h1>
          <p className="text-[#282828]/70">Create and manage branded short links with analytics</p>
        </div>

        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-[#282828] hover:bg-[#282828]/90 lg:w-auto w-full"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Short Link
        </Button>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Links</p>
                <p className="text-3xl font-bold text-blue-900">{links.length}</p>
              </div>
              <Scissors className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Total Clicks</p>
                <p className="text-3xl font-bold text-green-900">
                  {links.reduce((sum, link) => sum + link.clicks, 0).toLocaleString()}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Avg. Clicks/Link</p>
                <p className="text-3xl font-bold text-purple-900">
                  {links.length > 0 ? Math.round(links.reduce((sum, link) => sum + link.clicks, 0) / links.length) : 0}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#282828]/40 w-4 h-4" />
          <Input
            placeholder="Search links..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/80 border-[#282828]/20 focus:border-[#282828]/40"
          />
        </div>

        <Button variant="outline" className="border-[#282828]/20 hover:bg-[#282828]/5">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </motion.div>

      {/* Links Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#282828]">
              <Scissors className="w-5 h-5" />
              Your Short Links
              <span className="text-sm font-normal text-[#282828]/60 ml-auto">
                {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredLinks.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-[#282828]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-8 h-8 text-[#282828]/40" />
                </div>
                <h3 className="font-semibold text-[#282828] mb-2">No short links yet</h3>
                <p className="text-[#282828]/60 mb-6">Create your first branded short link</p>
                <Button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="bg-[#282828] hover:bg-[#282828]/90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Short Link
                </Button>
              </motion.div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#282828]/10">
                      <th className="text-left py-4 px-4 font-semibold text-[#282828]">Title</th>
                      <th className="text-left py-4 px-4 font-semibold text-[#282828]">Short URL</th>
                      <th className="text-left py-4 px-4 font-semibold text-[#282828]">Original URL</th>
                      <th className="text-center py-4 px-4 font-semibold text-[#282828]">Clicks</th>
                      <th className="text-center py-4 px-4 font-semibold text-[#282828]">Created</th>
                      <th className="text-center py-4 px-4 font-semibold text-[#282828]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLinks.map((link, index) => (
                      <motion.tr
                        key={link.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-[#282828]/5 hover:bg-[#fffbeb]/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="font-medium text-[#282828]">{link.title}</div>
                          {link.tags && link.tags.length > 0 && (
                            <div className="flex gap-1 mt-1">
                              {link.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="px-2 py-1 bg-[#282828]/10 text-xs text-[#282828]/70 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <code className="bg-[#282828]/10 px-2 py-1 rounded text-sm text-[#282828] font-mono">
                              {link.shortUrl}
                            </code>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => copyToClipboard(link.shortUrl, "Short URL")}
                              className="w-8 h-8 text-[#282828]/60 hover:text-[#282828] hover:bg-white/60"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                        <td className="py-4 px-4 max-w-xs">
                          <div className="truncate text-[#282828]/70 text-sm" title={link.originalUrl}>
                            {link.originalUrl}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-[#282828]">{link.clicks}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center text-[#282828]/60 text-sm">
                          {new Date(link.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8 text-[#282828]/60 hover:text-[#282828] hover:bg-white/60"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-xl border-white/20">
                              <DropdownMenuItem
                                onClick={() => copyToClipboard(link.shortUrl, "Short URL")}
                                className="hover:bg-[#282828]/5"
                              >
                                <Copy className="w-4 h-4 mr-2" />
                                Copy Short URL
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => copyToClipboard(link.originalUrl, "Original URL")}
                                className="hover:bg-[#282828]/5"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Copy Original URL
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => window.open(link.shortUrl, '_blank')}
                                className="hover:bg-[#282828]/5"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Visit Link
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Create Link Modal */}
      {isCreateModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsCreateModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#282828] mb-6">Create Short Link</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="originalUrl" className="text-sm font-medium text-[#282828]/80">
                  Original URL *
                </Label>
                <Input
                  id="originalUrl"
                  type="url"
                  placeholder="https://your-long-url.com"
                  value={formData.originalUrl}
                  onChange={(e) => setFormData({ ...formData, originalUrl: e.target.value })}
                  className="mt-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                />
              </div>

              <div>
                <Label htmlFor="title" className="text-sm font-medium text-[#282828]/80">
                  Link Title (Optional)
                </Label>
                <Input
                  id="title"
                  placeholder="My Awesome Link"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                />
              </div>

              <div>
                <Label htmlFor="customSlug" className="text-sm font-medium text-[#282828]/80">
                  Custom Slug (Optional)
                </Label>
                <Input
                  id="customSlug"
                  placeholder="my-link"
                  value={formData.customSlug}
                  onChange={(e) => setFormData({ ...formData, customSlug: e.target.value })}
                  className="mt-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                />
                <p className="text-xs text-[#282828]/50 mt-1">
                  Leave empty for auto-generated slug
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button onClick={handleCreate} className="flex-1 bg-[#282828] hover:bg-[#282828]/90">
                Create Short Link
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsCreateModalOpen(false)
                  setFormData({ originalUrl: "", title: "", customSlug: "" })
                }}
                className="border-[#282828]/20 hover:bg-[#282828]/5"
              >
                Cancel
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
