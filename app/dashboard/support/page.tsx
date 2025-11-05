"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import {
  HelpCircle,
  MessageSquare,
  Book,
  Mail,
  Phone,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Users,
  FileText,
  Youtube
} from "lucide-react"

interface FAQ {
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    question: "How do I add links to my page?",
    answer: "Go to the Link-in-Bio section in your dashboard. Click 'Add Link', enter your link details, and save. You can reorder links by dragging them in the list.",
    category: "links"
  },
  {
    question: "How do I customize my page appearance?",
    answer: "Visit the Appearance section in your dashboard. You can choose from preset themes, customize colors, change button styles, and toggle display options like avatar and bio.",
    category: "appearance"
  },
  {
    question: "How do short links work?",
    answer: "Create short links in the Short Links section. Each short link gets a unique biztro.link URL that redirects to your original long URL. Track clicks and analytics for each link.",
    category: "short-links"
  },
  {
    question: "How do QR codes work?",
    answer: "Generate QR codes in the QR Codes section. You can create codes for URLs, text, or contact information. Download them as PNG or SVG files and track scan analytics.",
    category: "qr-codes"
  },
  {
    question: "How do I view my analytics?",
    answer: "Check the Analytics section for comprehensive insights including page views, link clicks, traffic sources, device breakdown, and top performing content.",
    category: "analytics"
  },
  {
    question: "How do I manage contacts and leads?",
    answer: "The Contacts & Leads section shows all inquiries from your links. Track contact status, view messages, and manage your leads through the CRM-style interface.",
    category: "contacts"
  }
]

export default function SupportPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<"help" | "contact" | "faq">("help")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "normal"
  })
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const handleSubmitContact = async () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
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
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours",
        })
        setContactForm({
          name: "",
          email: "",
          subject: "",
          message: "",
          priority: "normal"
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  const quickHelp = [
    {
      icon: Book,
      title: "Documentation",
      description: "Complete guides and tutorials",
      action: "View Docs",
      href: "#"
    },
    {
      icon: Youtube,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      action: "Watch Videos",
      href: "#"
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Connect with other users",
      action: "Join Community",
      href: "#"
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Technical documentation",
      action: "View API Docs",
      href: "#"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-[#282828] mb-2">Support & Help</h1>
        <p className="text-[#282828]/70">Get help, contact support, and find answers to common questions</p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex border-b border-[#282828]/10"
      >
        {[
          { id: "help", label: "Quick Help", icon: HelpCircle },
          { id: "faq", label: "FAQ", icon: MessageSquare },
          { id: "contact", label: "Contact Support", icon: Mail }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-3 px-6 py-4 border-b-2 font-medium transition-colors ${
              activeTab === tab.id
                ? "border-[#282828] text-[#282828]"
                : "border-transparent text-[#282828]/60 hover:text-[#282828]/80"
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Help Tab */}
      {activeTab === "help" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          {/* Welcome Message */}
          <Card className="bg-gradient-to-r from-[#282828] to-[#282828]/90 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Welcome to Biztro Support</h3>
                  <p className="text-white/80">We're here to help you make the most of your Biztro experience</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Help Resources */}
          <div>
            <h3 className="text-xl font-semibold text-[#282828] mb-6">Quick Help Resources</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickHelp.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-2xl mb-4 transition-colors ${
                        index === 0 ? "bg-blue-100 group-hover:bg-blue-200" :
                        index === 1 ? "bg-red-100 group-hover:bg-red-200" :
                        index === 2 ? "bg-green-100 group-hover:bg-green-200" :
                        "bg-purple-100 group-hover:bg-purple-200"
                      }`}>
                        <resource.icon className={`w-6 h-6 m-3 ${
                          index === 0 ? "text-blue-600" :
                          index === 1 ? "text-red-600" :
                          index === 2 ? "text-green-600" :
                          "text-purple-600"
                        }`} />
                      </div>
                      <h4 className="font-semibold text-[#282828] mb-2">{resource.title}</h4>
                      <p className="text-[#282828]/60 text-sm mb-4 leading-relaxed">{resource.description}</p>
                      <Button
                        variant="ghost"
                        className="w-full text-[#282828]/70 hover:text-[#282828] hover:bg-white/60 p-0 h-auto justify-start"
                      >
                        {resource.action}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Getting Started Guide */}
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <Users className="w-5 h-5" />
                Getting Started Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-[#282828]">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#282828] mb-1">Set Up Your Profile</h4>
                      <p className="text-[#282828]/70 text-sm">Customize your bio, avatar, and basic information in Account Settings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-[#282828]">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#282828] mb-1">Add Your Links</h4>
                      <p className="text-[#282828]/70 text-sm">Create your link page in the Link-in-Bio section with all your important links</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-[#282828]">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#282828] mb-1">Customize Appearance</h4>
                      <p className="text-[#282828]/70 text-sm">Choose a theme and customize colors in the Appearance section</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-[#282828]">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#282828] mb-1">Share Your Page</h4>
                      <p className="text-[#282828]/70 text-sm">Share your biztro.link/username URL on social media and business cards</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-[#282828]">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#282828] mb-1">Track Performance</h4>
                      <p className="text-[#282828]/70 text-sm">Monitor clicks and engagement in the Analytics section</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-[#282828]">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#282828] mb-1">Grow Your Network</h4>
                      <p className="text-[#282828]/70 text-sm">Use QR codes and short links to expand your reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-[#282828]">Frequently Asked Questions</h3>
            <p className="text-[#282828]/60">Find answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.question ? null : faq.question)}
                      className="w-full p-6 text-left hover:bg-[#fffbeb]/30 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-[#282828] group-hover:text-[#282828]/80 pr-4">
                          {faq.question}
                        </h4>
                        <div className={`w-6 h-6 rounded-full bg-[#282828]/10 flex items-center justify-center transition-transform ${
                          expandedFAQ === faq.question ? "rotate-180" : ""
                        }`}>
                          <svg className="w-3 h-3 text-[#282828]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        faq.category === "links" ? "bg-blue-100 text-blue-700" :
                        faq.category === "appearance" ? "bg-purple-100 text-purple-700" :
                        faq.category === "short-links" ? "bg-green-100 text-green-700" :
                        faq.category === "qr-codes" ? "bg-orange-100 text-orange-700" :
                        faq.category === "analytics" ? "bg-red-100 text-red-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {faq.category.replace("-", " ")}
                      </span>
                    </button>

                    {expandedFAQ === faq.question && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 border-t border-[#282828]/10"
                      >
                        <p className="text-[#282828]/70 leading-relaxed pt-4">{faq.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Contact Tab */}
      {activeTab === "contact" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Email Support</h4>
                <p className="text-blue-700 text-sm mb-4">Get help via email</p>
                <p className="text-blue-600 font-medium">support@biztro.link</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-green-900 mb-2">Live Chat</h4>
                <p className="text-green-700 text-sm mb-4">Chat with our team</p>
                <p className="text-green-600 font-medium">Available 9 AM - 6 PM EST</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-purple-900 mb-2">Help Center</h4>
                <p className="text-purple-700 text-sm mb-4">Browse our knowledge base</p>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  Visit Help Center
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <Send className="w-5 h-5" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactName" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                    Your Name *
                  </Label>
                  <Input
                    id="contactName"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="contactEmail" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contactSubject" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  Subject
                </Label>
                <Input
                  id="contactSubject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <Label htmlFor="contactMessage" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="contactMessage"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  rows={5}
                  className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40 resize-none"
                  placeholder="Please describe your issue or question in detail..."
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-[#282828]/80 mb-3 block">
                  Priority Level
                </Label>
                <div className="flex gap-4">
                  {[
                    { value: "low", label: "Low", color: "bg-gray-100 text-gray-700" },
                    { value: "normal", label: "Normal", color: "bg-blue-100 text-blue-700" },
                    { value: "high", label: "High", color: "bg-orange-100 text-orange-700" },
                    { value: "urgent", label: "Urgent", color: "bg-red-100 text-red-700" }
                  ].map((priority) => (
                    <button
                      key={priority.value}
                      onClick={() => setContactForm({ ...contactForm, priority: priority.value })}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        contactForm.priority === priority.value
                          ? priority.color
                          : "bg-white/70 text-[#282828]/60 hover:bg-white/90"
                      }`}
                    >
                      {priority.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button
                  onClick={handleSubmitContact}
                  className="bg-[#282828] hover:bg-[#282828]/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <div className="flex items-center gap-2 text-sm text-[#282828]/60">
                  <CheckCircle className="w-4 h-4" />
                  We typically respond within 24 hours
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
