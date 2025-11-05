"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Plus, Edit2, Trash2, GripVertical, Eye, Smartphone, Save } from "lucide-react"
import { motion } from "framer-motion"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface Link {
  id: string
  title: string
  url: string
  icon?: string
  order: number
  clicks: number
  isActive: boolean
}

function SortableLinkItem({
  link,
  onEdit,
  onDelete,
  onToggle
}: {
  link: Link
  onEdit: (link: Link) => void
  onDelete: (id: string) => void
  onToggle: (id: string, isActive: boolean) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: link.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm hover:shadow-md transition-all duration-200 ${
        !link.isActive ? 'opacity-60' : ''
      }`}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-[#282828]/40 hover:text-[#282828] transition-colors"
      >
        <GripVertical className="w-5 h-5" />
      </div>

      <div className="flex-1 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#282828]/10 rounded-xl flex items-center justify-center text-lg">
          {link.icon || '🔗'}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[#282828] truncate">{link.title}</h3>
          <p className="text-sm text-[#282828]/60 truncate">{link.url}</p>
          <p className="text-xs text-[#282828]/50 mt-1">{link.clicks} clicks</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onToggle(link.id, !link.isActive)}
          className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
            link.isActive
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {link.isActive ? 'Active' : 'Inactive'}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(link)}
          className="w-8 h-8 text-[#282828]/60 hover:text-[#282828] hover:bg-white/60 rounded-xl"
        >
          <Edit2 className="w-4 h-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(link.id)}
          className="w-8 h-8 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  )
}

function LinkPreview({ links }: { links: Link[] }) {
  const activeLinks = links.filter(link => link.isActive).sort((a, b) => a.order - b.order)

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <Smartphone className="w-5 h-5 text-[#282828]/60" />
        <h3 className="font-semibold text-[#282828]">Live Preview</h3>
      </div>

      <div className="bg-gradient-to-br from-[#fffbeb] to-[#fef7e0] rounded-2xl p-4 min-h-[400px]">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#282828]/10 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <h4 className="font-semibold text-[#282828] mb-1">Your Name</h4>
          <p className="text-sm text-[#282828]/60">Your bio goes here</p>
        </div>

        <div className="space-y-3">
          {activeLinks.length === 0 ? (
            <div className="text-center py-8 text-[#282828]/40">
              <p className="text-sm">Add links to see preview</p>
            </div>
          ) : (
            activeLinks.map((link) => (
              <button
                key={link.id}
                className="w-full p-4 bg-white/80 hover:bg-white rounded-2xl border border-white/40 text-left transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{link.icon || '🔗'}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#282828] truncate group-hover:text-[#282828]/80">
                      {link.title}
                    </p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default function LinkInBioPage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [links, setLinks] = useState<Link[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingLink, setEditingLink] = useState<Link | null>(null)
  const [formData, setFormData] = useState({ title: "", url: "", icon: "" })
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  useEffect(() => {
    fetchLinks()
  }, [session])

  const fetchLinks = async () => {
    try {
      const response = await fetch("/api/links")
      if (response.ok) {
        const data = await response.json()
        setLinks(data.sort((a: Link, b: Link) => a.order - b.order))
      }
    } catch (error) {
      console.error("Error fetching links:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    if (!formData.title || !formData.url) {
      toast({
        title: "Validation Error",
        description: "Please fill in both title and URL fields",
        variant: "destructive",
      })
      return
    }

    try {
      const url = editingLink ? `/api/links/${editingLink.id}` : "/api/links"
      const method = editingLink ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order: editingLink ? editingLink.order : links.length,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: editingLink ? "Link updated successfully" : "Link created successfully",
        })
        setIsDialogOpen(false)
        setEditingLink(null)
        setFormData({ title: "", url: "", icon: "" })
        fetchLinks()
        setHasUnsavedChanges(false)
      } else {
        throw new Error("Failed to save link")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save link. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this link?")) return

    try {
      const response = await fetch(`/api/links/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Link deleted successfully",
        })
        fetchLinks()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete link",
        variant: "destructive",
      })
    }
  }

  const handleToggle = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/links/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive }),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: `Link ${isActive ? 'activated' : 'deactivated'}`,
        })
        fetchLinks()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update link status",
        variant: "destructive",
      })
    }
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = links.findIndex((link) => link.id === active.id)
      const newIndex = links.findIndex((link) => link.id === over.id)

      const newLinks = arrayMove(links, oldIndex, newIndex)
      setLinks(newLinks)
      setHasUnsavedChanges(true)

      // Update order in database
      try {
        await fetch("/api/links/reorder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            links: newLinks.map((link, index) => ({
              id: link.id,
              order: index,
            })),
          }),
        })
        setHasUnsavedChanges(false)
        toast({
          title: "Success",
          description: "Link order updated",
        })
      } catch (error) {
        console.error("Error reordering links:", error)
        toast({
          title: "Warning",
          description: "Order changed locally but failed to save. Please refresh and try again.",
          variant: "destructive",
        })
      }
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
          <p className="text-[#282828]/70 text-lg">Loading your links...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-[#282828] mb-2">Link-in-Bio Manager</h1>
          <p className="text-[#282828]/70">Create and organize your professional link page</p>
        </div>

        <div className="flex items-center gap-4">
          {hasUnsavedChanges && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-orange-600 text-sm"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              Unsaved changes
            </motion.div>
          )}

          <Button
            variant="outline"
            onClick={() => {
              const username = session?.user?.email?.split("@")[0]
              window.open(`/${username}`, "_blank")
            }}
            className="border-[#282828]/20 hover:bg-[#282828]/5"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview Page
          </Button>

          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-[#282828] hover:bg-[#282828]/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Link
          </Button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Link Manager */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <Save className="w-5 h-5" />
                Manage Links
                <span className="text-sm font-normal text-[#282828]/60 ml-auto">
                  {links.length} link{links.length !== 1 ? 's' : ''}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isDialogOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-6 bg-[#fffbeb]/50 rounded-2xl border border-[#fffbeb]"
                >
                  <h3 className="font-semibold text-[#282828] mb-4">
                    {editingLink ? "Edit Link" : "Add New Link"}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-sm font-medium text-[#282828]/80">
                        Link Title *
                      </Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Visit My Website"
                        className="mt-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                      />
                    </div>

                    <div>
                      <Label htmlFor="url" className="text-sm font-medium text-[#282828]/80">
                        URL *
                      </Label>
                      <Input
                        id="url"
                        type="url"
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="mt-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                      />
                    </div>

                    <div>
                      <Label htmlFor="icon" className="text-sm font-medium text-[#282828]/80">
                        Icon (optional)
                      </Label>
                      <Input
                        id="icon"
                        value={formData.icon}
                        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                        placeholder="🔗"
                        maxLength={2}
                        className="mt-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                      />
                      <p className="text-xs text-[#282828]/50 mt-1">Use emoji or leave empty for default link icon</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button onClick={handleSave} className="bg-[#282828] hover:bg-[#282828]/90">
                      {editingLink ? "Update Link" : "Create Link"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsDialogOpen(false)
                        setEditingLink(null)
                        setFormData({ title: "", url: "", icon: "" })
                      }}
                      className="border-[#282828]/20 hover:bg-[#282828]/5"
                    >
                      Cancel
                    </Button>
                  </div>
                </motion.div>
              )}

              {links.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#282828]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-[#282828]/40" />
                  </div>
                  <h3 className="font-semibold text-[#282828] mb-2">No links yet</h3>
                  <p className="text-[#282828]/60 mb-6">Create your first link to get started</p>
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-[#282828] hover:bg-[#282828]/90"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Your First Link
                  </Button>
                </motion.div>
              ) : (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={links.map((link) => link.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="space-y-3">
                      {links.map((link) => (
                        <SortableLinkItem
                          key={link.id}
                          link={link}
                          onEdit={(link) => {
                            setEditingLink(link)
                            setFormData({
                              title: link.title,
                              url: link.url,
                              icon: link.icon || "",
                            })
                            setIsDialogOpen(true)
                          }}
                          onDelete={handleDelete}
                          onToggle={handleToggle}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:sticky lg:top-8"
        >
          <LinkPreview links={links} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 p-4 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-100"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                💡
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Pro Tips</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Drag links to reorder them</li>
                  <li>• Toggle links on/off to show/hide them</li>
                  <li>• Click preview to test your links</li>
                  <li>• Changes save automatically</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
