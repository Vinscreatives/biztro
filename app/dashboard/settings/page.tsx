"use client"

import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import {
  Settings,
  User,
  Mail,
  Lock,
  Globe,
  Save,
  Eye,
  EyeOff,
  Check,
  AlertTriangle,
  LogOut
} from "lucide-react"

interface UserSettings {
  name: string
  email: string
  username: string
  bio: string
  website: string
  location: string
}

export default function AccountSettingsPage() {
  const { data: session, update } = useSession()
  const { toast } = useToast()
  const [settings, setSettings] = useState<UserSettings>({
    name: "",
    email: "",
    username: "",
    bio: "",
    website: "",
    location: ""
  })
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })
  const [isLoading, setIsLoading] = useState(true)
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  })
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    if (session?.user) {
      setSettings({
        name: session.user.name || "",
        email: session.user.email || "",
        username: session.user.email?.split("@")[0] || "",
        bio: "",
        website: "",
        location: ""
      })
      setIsLoading(false)
    }
  }, [session])

  const handleSaveProfile = async () => {
    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        toast({
          title: "Profile Updated",
          description: "Your profile information has been saved successfully",
        })
        setHasUnsavedChanges(false)
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      })
    }
  }

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "New password and confirmation don't match",
        variant: "destructive",
      })
      return
    }

    if (passwordData.newPassword.length < 8) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        toast({
          title: "Password Changed",
          description: "Your password has been updated successfully",
        })
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change password",
        variant: "destructive",
      })
    }
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
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
          <p className="text-[#282828]/70 text-lg">Loading settings...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-[#282828] mb-2">Account Settings</h1>
        <p className="text-[#282828]/70">Manage your account information and preferences</p>
      </motion.div>

      {/* Profile Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#282828]">
              <User className="w-5 h-5" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={settings.name}
                  onChange={(e) => {
                    setSettings({ ...settings, name: e.target.value })
                    setHasUnsavedChanges(true)
                  }}
                  className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                />
              </div>

              <div>
                <Label htmlFor="username" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  Username
                </Label>
                <div className="relative">
                  <Input
                    id="username"
                    value={settings.username}
                    onChange={(e) => {
                      setSettings({ ...settings, username: e.target.value })
                      setHasUnsavedChanges(true)
                    }}
                    className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40 pl-20"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#282828]/60 text-sm">
                    biztro.link/
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => {
                  setSettings({ ...settings, email: e.target.value })
                  setHasUnsavedChanges(true)
                }}
                className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
              />
              <p className="text-xs text-[#282828]/50 mt-1">
                This email is used for account notifications and password recovery
              </p>
            </div>

            <div>
              <Label htmlFor="bio" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                Bio (Optional)
              </Label>
              <textarea
                id="bio"
                value={settings.bio}
                onChange={(e) => {
                  setSettings({ ...settings, bio: e.target.value })
                  setHasUnsavedChanges(true)
                }}
                rows={3}
                className="w-full px-3 py-2 bg-white/70 border border-[#282828]/20 rounded-xl focus:border-[#282828]/40 focus:outline-none resize-none"
                placeholder="Tell visitors a bit about yourself..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="website" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  Website (Optional)
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={settings.website}
                  onChange={(e) => {
                    setSettings({ ...settings, website: e.target.value })
                    setHasUnsavedChanges(true)
                  }}
                  placeholder="https://yourwebsite.com"
                  className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  Location (Optional)
                </Label>
                <Input
                  id="location"
                  value={settings.location}
                  onChange={(e) => {
                    setSettings({ ...settings, location: e.target.value })
                    setHasUnsavedChanges(true)
                  }}
                  placeholder="City, Country"
                  className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button
                onClick={handleSaveProfile}
                disabled={!hasUnsavedChanges}
                className="bg-[#282828] hover:bg-[#282828]/90"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>

              {hasUnsavedChanges && (
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-orange-600 flex items-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                  You have unsaved changes
                </motion.p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Password & Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#282828]">
              <Lock className="w-5 h-5" />
              Password & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="currentPassword" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                Current Password
              </Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPasswords.current ? "text" : "password"}
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#282828]/40 hover:text-[#282828]/60"
                >
                  {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="newPassword" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showPasswords.new ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#282828]/40 hover:text-[#282828]/60"
                  >
                    {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showPasswords.confirm ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className="bg-white/70 border-[#282828]/20 focus:border-[#282828]/40 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#282828]/40 hover:text-[#282828]/60"
                  >
                    {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={handleChangePassword}
                disabled={!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                className="bg-[#282828] hover:bg-[#282828]/90"
              >
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>

              <div className="text-sm text-[#282828]/60">
                Password must be at least 8 characters long
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Account Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#282828]">
              <Settings className="w-5 h-5" />
              Account Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-[#fffbeb]/30 rounded-2xl border border-[#fffbeb]/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#282828] mb-1">Public Profile</h4>
                  <p className="text-sm text-[#282828]/70 mb-3">
                    Your public link page is available at biztro.link/{settings.username}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.open(`https://biztro-link.vercel.app/${settings.username}`, "_blank")}
                    className="border-[#282828]/20 hover:bg-[#282828]/5"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Public Profile
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50/80 rounded-2xl border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <LogOut className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#282828] mb-1">Sign Out</h4>
                  <p className="text-sm text-[#282828]/70 mb-3">
                    Sign out of your account on all devices
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out Everywhere
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#282828]/10">
              <div className="text-sm text-[#282828]/60 space-y-1">
                <p><strong>Account Created:</strong> {new Date().toLocaleDateString()}</p>
                <p><strong>Last Login:</strong> {new Date().toLocaleDateString()}</p>
                <p><strong>Account Status:</strong> <span className="text-green-600 font-medium">Active</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}