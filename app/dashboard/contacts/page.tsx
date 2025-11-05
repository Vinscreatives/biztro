"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import {
  Users,
  Mail,
  Phone,
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
  UserPlus,
  MessageSquare,
  ExternalLink
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Contact {
  id: string
  name: string
  email?: string
  phone?: string
  source: string
  message?: string
  createdAt: string
  status: "new" | "contacted" | "qualified" | "converted"
}

export default function ContactsPage() {
  const { toast } = useToast()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        const mockContacts: Contact[] = [
          {
            id: "1",
            name: "Sarah Johnson",
            email: "sarah.j@example.com",
            phone: "+1 (555) 123-4567",
            source: "website-link",
            message: "Hi! I love your work. Would love to collaborate on a project.",
            createdAt: "2024-01-15T10:30:00Z",
            status: "new"
          },
          {
            id: "2",
            name: "Mike Chen",
            email: "mike.chen@company.com",
            source: "qr-code",
            message: "Interested in your services. Can we schedule a call?",
            createdAt: "2024-01-14T14:20:00Z",
            status: "contacted"
          },
          {
            id: "3",
            name: "Emma Davis",
            phone: "+1 (555) 987-6543",
            source: "short-link",
            createdAt: "2024-01-13T09:15:00Z",
            status: "qualified"
          },
          {
            id: "4",
            name: "Alex Rodriguez",
            email: "alex.r@startup.io",
            source: "website-link",
            message: "Great portfolio! Let's discuss partnership opportunities.",
            createdAt: "2024-01-12T16:45:00Z",
            status: "converted"
          }
        ]
        setContacts(mockContacts)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching contacts:", error)
      setIsLoading(false)
    }
  }

  const updateContactStatus = async (contactId: string, newStatus: Contact["status"]) => {
    try {
      // Simulate API call
      setTimeout(() => {
        setContacts(prev => prev.map(contact =>
          contact.id === contactId ? { ...contact, status: newStatus } : contact
        ))
        toast({
          title: "Status Updated",
          description: `Contact status changed to ${newStatus}`,
        })
      }, 500)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update contact status",
        variant: "destructive",
      })
    }
  }

  const exportContacts = () => {
    // Simulate export functionality
    toast({
      title: "Export Started",
      description: "Contacts data is being exported...",
    })
  }

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (contact.email?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (contact.message?.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesStatus = statusFilter === "all" || contact.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: Contact["status"]) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-700"
      case "contacted": return "bg-yellow-100 text-yellow-700"
      case "qualified": return "bg-purple-100 text-purple-700"
      case "converted": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: Contact["status"]) => {
    switch (status) {
      case "new": return <UserPlus className="w-3 h-3" />
      case "contacted": return <Mail className="w-3 h-3" />
      case "qualified": return <Eye className="w-3 h-3" />
      case "converted": return <Check className="w-3 h-3" />
      default: return null
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#282828]/20 border-t-[#282828] mx-auto mb-4"></div>
          <p className="text-[#282828]/70 text-lg">Loading contacts...</p>
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
          <h1 className="text-3xl font-bold text-[#282828] mb-2">Contacts & Leads</h1>
          <p className="text-[#282828]/70">Manage your leads and customer inquiries</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-2xl font-bold text-[#282828]">{contacts.length}</p>
            <p className="text-sm text-[#282828]/60">Total Contacts</p>
          </div>

          <Button
            variant="outline"
            onClick={exportContacts}
            className="border-[#282828]/20 hover:bg-[#282828]/5"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <UserPlus className="w-8 h-8 text-blue-600" />
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                New
              </span>
            </div>
            <div>
              <p className="text-blue-600 text-sm font-medium">New Leads</p>
              <p className="text-3xl font-bold text-blue-900">
                {contacts.filter(c => c.status === "new").length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-8 h-8 text-yellow-600" />
              <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                Contacted
              </span>
            </div>
            <div>
              <p className="text-yellow-600 text-sm font-medium">Contacted</p>
              <p className="text-3xl font-bold text-yellow-900">
                {contacts.filter(c => c.status === "contacted").length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8 text-purple-600" />
              <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                Qualified
              </span>
            </div>
            <div>
              <p className="text-purple-600 text-sm font-medium">Qualified</p>
              <p className="text-3xl font-bold text-purple-900">
                {contacts.filter(c => c.status === "qualified").length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Check className="w-8 h-8 text-green-600" />
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                Converted
              </span>
            </div>
            <div>
              <p className="text-green-600 text-sm font-medium">Converted</p>
              <p className="text-3xl font-bold text-green-900">
                {contacts.filter(c => c.status === "converted").length}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#282828]/40 w-4 h-4" />
          <Input
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/80 border-[#282828]/20 focus:border-[#282828]/40"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-[#282828]/20 hover:bg-[#282828]/5">
              <Filter className="w-4 h-4 mr-2" />
              Status: {statusFilter === "all" ? "All" : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-xl border-white/20">
            <DropdownMenuItem onClick={() => setStatusFilter("all")}>
              All Statuses
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("new")}>
              New
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("contacted")}>
              Contacted
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("qualified")}>
              Qualified
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("converted")}>
              Converted
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      {/* Contacts Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#282828]">
              <Users className="w-5 h-5" />
              Contacts
              <span className="text-sm font-normal text-[#282828]/60 ml-auto">
                {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredContacts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#282828]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#282828]/40" />
                </div>
                <h3 className="font-semibold text-[#282828] mb-2">No contacts found</h3>
                <p className="text-[#282828]/60">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filters"
                    : "Contacts will appear here when people reach out through your links"
                  }
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#282828]/10">
                      <TableHead className="text-[#282828] font-semibold">Contact</TableHead>
                      <TableHead className="text-[#282828] font-semibold">Source</TableHead>
                      <TableHead className="text-[#282828] font-semibold">Message</TableHead>
                      <TableHead className="text-[#282828] font-semibold">Status</TableHead>
                      <TableHead className="text-[#282828] font-semibold">Date</TableHead>
                      <TableHead className="text-[#282828] font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact, index) => (
                      <motion.tr
                        key={contact.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-[#282828]/5 hover:bg-[#fffbeb]/30 transition-colors"
                      >
                        <TableCell className="py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#282828]/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-[#282828]">
                                {contact.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-[#282828]">{contact.name}</p>
                              <div className="flex items-center gap-4 text-sm text-[#282828]/60">
                                {contact.email && (
                                  <div className="flex items-center gap-1">
                                    <Mail className="w-3 h-3" />
                                    <span>{contact.email}</span>
                                  </div>
                                )}
                                {contact.phone && (
                                  <div className="flex items-center gap-1">
                                    <Phone className="w-3 h-3" />
                                    <span>{contact.phone}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell className="py-4">
                          <span className="px-3 py-1 bg-[#282828]/10 text-[#282828]/70 rounded-full text-sm font-medium">
                            {contact.source.replace("-", " ")}
                          </span>
                        </TableCell>

                        <TableCell className="py-4 max-w-xs">
                          {contact.message ? (
                            <div className="flex items-start gap-2">
                              <MessageSquare className="w-4 h-4 text-[#282828]/40 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-[#282828]/70 line-clamp-2" title={contact.message}>
                                {contact.message}
                              </p>
                            </div>
                          ) : (
                            <span className="text-[#282828]/40 text-sm italic">No message</span>
                          )}
                        </TableCell>

                        <TableCell className="py-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)} hover:opacity-80`}
                              >
                                <div className="flex items-center gap-1">
                                  {getStatusIcon(contact.status)}
                                  {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                                </div>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-xl border-white/20">
                              <DropdownMenuItem
                                onClick={() => updateContactStatus(contact.id, "new")}
                                className="hover:bg-[#282828]/5"
                              >
                                <UserPlus className="w-4 h-4 mr-2" />
                                Mark as New
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => updateContactStatus(contact.id, "contacted")}
                                className="hover:bg-[#282828]/5"
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Mark as Contacted
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => updateContactStatus(contact.id, "qualified")}
                                className="hover:bg-[#282828]/5"
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                Mark as Qualified
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => updateContactStatus(contact.id, "converted")}
                                className="hover:bg-[#282828]/5"
                              >
                                <Check className="w-4 h-4 mr-2" />
                                Mark as Converted
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>

                        <TableCell className="py-4 text-[#282828]/60 text-sm">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </TableCell>

                        <TableCell className="py-4">
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
                              <DropdownMenuItem className="hover:bg-[#282828]/5">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-[#282828]/5">
                                <Mail className="w-4 h-4 mr-2" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-[#282828]/5">
                                <Phone className="w-4 h-4 mr-2" />
                                Call
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
