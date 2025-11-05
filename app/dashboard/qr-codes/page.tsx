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
  Download,
  QrCode as QrCodeIcon,
  Eye,
  Calendar,
  TrendingUp,
  Search,
  Grid3X3,
  List,
  MoreHorizontal
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface QRCode {
  id: string
  title: string
  url: string
  qrCodeUrl: string
  scans: number
  createdAt: string
  type: "url" | "text" | "contact"
  preview?: string
}

export default function QRCodesPage() {
  const { toast } = useToast()
  const [qrCodes, setQrCodes] = useState<QRCode[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    type: "url" as "url" | "text" | "contact"
  })

  useEffect(() => {
    fetchQRCodes()
  }, [])

  const fetchQRCodes = async () => {
    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        const mockQRCodes: QRCode[] = [
          {
            id: "1",
            title: "Website QR",
            url: "https://biztro-link.vercel.app/johndoe",
            qrCodeUrl: "/api/qr/placeholder1",
            scans: 89,
            createdAt: "2024-01-15",
            type: "url",
            preview: "biztro-link.vercel.app/johndoe"
          },
          {
            id: "2",
            title: "Contact Card",
            url: "BEGIN:VCARD\nFN:John Doe\nTEL:1234567890\nEND:VCARD",
            qrCodeUrl: "/api/qr/placeholder2",
            scans: 34,
            createdAt: "2024-01-12",
            type: "contact",
            preview: "Contact Information"
          },
          {
            id: "3",
            title: "Special Offer",
            url: "https://biztro.link/special-offer",
            qrCodeUrl: "/api/qr/placeholder3",
            scans: 156,
            createdAt: "2024-01-10",
            type: "url",
            preview: "biztro.link/special-offer"
          }
        ]
        setQrCodes(mockQRCodes)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching QR codes:", error)
      setIsLoading(false)
    }
  }

  const handleCreate = async () => {
    if (!formData.title || !formData.url) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        const newQR: QRCode = {
          id: Date.now().toString(),
          title: formData.title,
          url: formData.url,
          qrCodeUrl: `/api/qr/${Date.now()}`,
          scans: 0,
          createdAt: new Date().toISOString().split('T')[0],
          type: formData.type,
          preview: formData.type === "url" ? formData.url : "Custom Content"
        }

        setQrCodes([newQR, ...qrCodes])
        setFormData({ title: "", url: "", type: "url" })
        setIsCreateModalOpen(false)

        toast({
          title: "Success!",
          description: "QR Code generated successfully",
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive",
      })
    }
  }

  const downloadQR = async (qrCode: QRCode, format: "png" | "svg" = "png") => {
    try {
      // Simulate download - replace with actual download logic
      toast({
        title: "Download Started",
        description: `Downloading ${qrCode.title} as ${format.toUpperCase()}...`,
      })

      // In a real app, this would trigger a file download
      // For now, we'll just show a success message
      setTimeout(() => {
        toast({
          title: "Download Complete",
          description: `${qrCode.title} downloaded successfully`,
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download QR code",
        variant: "destructive",
      })
    }
  }

  const filteredQRCodes = qrCodes.filter(qr =>
    qr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    qr.url.toLowerCase().includes(searchTerm.toLowerCase())
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
          <p className="text-[#282828]/70 text-lg">Loading your QR codes...</p>
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
          <h1 className="text-3xl font-bold text-[#282828] mb-2">QR Codes</h1>
          <p className="text-[#282828]/70">Generate and manage custom QR codes for your links</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-[#282828]/20 rounded-2xl p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-xl ${viewMode === "grid" ? "bg-[#282828] hover:bg-[#282828]/90" : "hover:bg-[#282828]/5"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`rounded-xl ${viewMode === "list" ? "bg-[#282828] hover:bg-[#282828]/90" : "hover:bg-[#282828]/5"}`}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>

          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-[#282828] hover:bg-[#282828]/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Generate QR Code
          </Button>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Total QR Codes</p>
                <p className="text-3xl font-bold text-purple-900">{qrCodes.length}</p>
              </div>
              <QrCodeIcon className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Scans</p>
                <p className="text-3xl font-bold text-blue-900">
                  {qrCodes.reduce((sum, qr) => sum + qr.scans, 0).toLocaleString()}
                </p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Avg. Scans/QR</p>
                <p className="text-3xl font-bold text-green-900">
                  {qrCodes.length > 0 ? Math.round(qrCodes.reduce((sum, qr) => sum + qr.scans, 0) / qrCodes.length) : 0}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative max-w-md"
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#282828]/40 w-4 h-4" />
        <Input
          placeholder="Search QR codes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white/80 border-[#282828]/20 focus:border-[#282828]/40"
        />
      </motion.div>

      {/* QR Codes Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {filteredQRCodes.length === 0 ? (
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-[#282828]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <QrCodeIcon className="w-8 h-8 text-[#282828]/40" />
              </div>
              <h3 className="font-semibold text-[#282828] mb-2">No QR codes yet</h3>
              <p className="text-[#282828]/60 mb-6">Generate your first QR code to get started</p>
              <Button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-[#282828] hover:bg-[#282828]/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Generate QR Code
              </Button>
            </CardContent>
          </Card>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQRCodes.map((qr, index) => (
              <motion.div
                key={qr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-32 h-32 bg-white border-2 border-[#282828]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-[#282828]/20 transition-colors">
                        <QrCodeIcon className="w-16 h-16 text-[#282828]/40" />
                      </div>
                      <h3 className="font-semibold text-[#282828] mb-1">{qr.title}</h3>
                      <p className="text-sm text-[#282828]/60 truncate" title={qr.preview}>
                        {qr.preview}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[#282828]/60" />
                        <span className="text-sm font-medium text-[#282828]">{qr.scans} scans</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        qr.type === "url" ? "bg-blue-100 text-blue-700" :
                        qr.type === "contact" ? "bg-green-100 text-green-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {qr.type}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => downloadQR(qr, "png")}
                        className="flex-1 bg-[#282828] hover:bg-[#282828]/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        PNG
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="border-[#282828]/20 hover:bg-[#282828]/5">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-xl border-white/20">
                          <DropdownMenuItem
                            onClick={() => downloadQR(qr, "svg")}
                            className="hover:bg-[#282828]/5"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download SVG
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-[#282828]/5">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <QrCodeIcon className="w-5 h-5" />
                Your QR Codes
                <span className="text-sm font-normal text-[#282828]/60 ml-auto">
                  {filteredQRCodes.length} QR code{filteredQRCodes.length !== 1 ? 's' : ''}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredQRCodes.map((qr, index) => (
                  <motion.div
                    key={qr.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-6 p-4 bg-[#fffbeb]/30 rounded-2xl border border-[#fffbeb]/50"
                  >
                    <div className="w-16 h-16 bg-white border border-[#282828]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <QrCodeIcon className="w-8 h-8 text-[#282828]/40" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#282828] mb-1">{qr.title}</h3>
                      <p className="text-sm text-[#282828]/60 truncate mb-2" title={qr.preview}>
                        {qr.preview}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#282828]/50">
                        <span>{qr.scans} scans</span>
                        <span>Created {new Date(qr.createdAt).toLocaleDateString()}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          qr.type === "url" ? "bg-blue-100 text-blue-700" :
                          qr.type === "contact" ? "bg-green-100 text-green-700" :
                          "bg-purple-100 text-purple-700"
                        }`}>
                          {qr.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => downloadQR(qr, "png")}
                        className="bg-[#282828] hover:bg-[#282828]/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        PNG
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-[#282828]/60 hover:text-[#282828] hover:bg-white/60">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-xl border-white/20">
                          <DropdownMenuItem
                            onClick={() => downloadQR(qr, "svg")}
                            className="hover:bg-[#282828]/5"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download SVG
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-[#282828]/5">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>

      {/* Create QR Modal */}
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
            <h2 className="text-2xl font-bold text-[#282828] mb-6">Generate QR Code</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-sm font-medium text-[#282828]/80">
                  QR Code Title *
                </Label>
                <Input
                  id="title"
                  placeholder="My QR Code"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                />
              </div>

              <div>
                <Label htmlFor="type" className="text-sm font-medium text-[#282828]/80">
                  Content Type
                </Label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as "url" | "text" | "contact" })}
                  className="mt-1 w-full px-3 py-2 bg-white/70 border border-[#282828]/20 rounded-xl focus:border-[#282828]/40 focus:outline-none"
                >
                  <option value="url">URL/Link</option>
                  <option value="text">Text Message</option>
                  <option value="contact">Contact Info</option>
                </select>
              </div>

              <div>
                <Label htmlFor="url" className="text-sm font-medium text-[#282828]/80">
                  Content *
                  {formData.type === "url" && <span className="text-xs text-[#282828]/50"> (https://...)</span>}
                  {formData.type === "text" && <span className="text-xs text-[#282828]/50"> (any text)</span>}
                  {formData.type === "contact" && <span className="text-xs text-[#282828]/50"> (vCard format)</span>}
                </Label>
                <textarea
                  id="url"
                  placeholder={
                    formData.type === "url" ? "https://your-link.com" :
                    formData.type === "text" ? "Your message here..." :
                    "BEGIN:VCARD\nFN:John Doe\nTEL:1234567890\nEND:VCARD"
                  }
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  rows={formData.type === "contact" ? 4 : 2}
                  className="mt-1 w-full px-3 py-2 bg-white/70 border border-[#282828]/20 rounded-xl focus:border-[#282828]/40 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button onClick={handleCreate} className="flex-1 bg-[#282828] hover:bg-[#282828]/90">
                Generate QR Code
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsCreateModalOpen(false)
                  setFormData({ title: "", url: "", type: "url" })
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
