"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import {
  Palette,
  Smartphone,
  Type,
  Image,
  Save,
  Eye,
  RotateCcw,
  Check,
  Star
} from "lucide-react"

interface ThemeSettings {
  theme: "light" | "dark" | "auto"
  bgColor: string
  textColor: string
  buttonStyle: "rounded" | "square" | "pill"
  fontFamily: string
  avatarEnabled: boolean
  bioEnabled: boolean
  socialIcons: boolean
}

const presetThemes = [
  {
    name: "Professional",
    theme: { bgColor: "#ffffff", textColor: "#282828", buttonStyle: "rounded" as const },
    preview: "Clean and professional look"
  },
  {
    name: "Creative",
    theme: { bgColor: "#fef7e0", textColor: "#282828", buttonStyle: "pill" as const },
    preview: "Warm and creative design"
  },
  {
    name: "Tech",
    theme: { bgColor: "#f8fafc", textColor: "#0f172a", buttonStyle: "square" as const },
    preview: "Modern tech aesthetic"
  },
  {
    name: "Artistic",
    theme: { bgColor: "#fef3c7", textColor: "#92400e", buttonStyle: "rounded" as const },
    preview: "Bold and artistic style"
  }
]

export default function AppearancePage() {
  const { toast } = useToast()
  const [settings, setSettings] = useState<ThemeSettings>({
    theme: "light",
    bgColor: "#fffbeb",
    textColor: "#282828",
    buttonStyle: "rounded",
    fontFamily: "Inter",
    avatarEnabled: true,
    bioEnabled: true,
    socialIcons: true
  })
  const [isLoading, setIsLoading] = useState(true)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        setSettings({
          theme: "light",
          bgColor: "#fffbeb",
          textColor: "#282828",
          buttonStyle: "rounded",
          fontFamily: "Inter",
          avatarEnabled: true,
          bioEnabled: true,
          socialIcons: true
        })
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching settings:", error)
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      // Simulate API call - replace with actual API
      setTimeout(() => {
        toast({
          title: "Success!",
          description: "Appearance settings saved successfully",
        })
        setHasUnsavedChanges(false)
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      })
    }
  }

  const applyPreset = (preset: typeof presetThemes[0]) => {
    setSettings(prev => ({
      ...prev,
      ...preset.theme
    }))
    setHasUnsavedChanges(true)
    toast({
      title: "Preset Applied",
      description: `${preset.name} theme applied`,
    })
  }

  const resetToDefault = () => {
    setSettings({
      theme: "light",
      bgColor: "#fffbeb",
      textColor: "#282828",
      buttonStyle: "rounded",
      fontFamily: "Inter",
      avatarEnabled: true,
      bioEnabled: true,
      socialIcons: true
    })
    setHasUnsavedChanges(true)
    toast({
      title: "Reset Complete",
      description: "Settings reset to default",
    })
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
          <p className="text-[#282828]/70 text-lg">Loading appearance settings...</p>
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
          <h1 className="text-3xl font-bold text-[#282828] mb-2">Appearance & Themes</h1>
          <p className="text-[#282828]/70">Customize your link page design and branding</p>
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
            onClick={resetToDefault}
            className="border-[#282828]/20 hover:bg-[#282828]/5"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>

          <Button
            onClick={handleSave}
            className="bg-[#282828] hover:bg-[#282828]/90"
            disabled={!hasUnsavedChanges}
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl sticky top-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <Smartphone className="w-5 h-5" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-[#fffbeb] to-[#fef7e0] rounded-3xl p-6 min-h-[500px] border border-white/30">
                {/* Profile Header */}
                {settings.avatarEnabled && (
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-[#282828]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                    <h3 className="font-bold text-[#282828] text-lg mb-2">Your Name</h3>
                    {settings.bioEnabled && (
                      <p className="text-[#282828]/70 text-sm">Your amazing bio goes here</p>
                    )}
                  </div>
                )}

                {/* Sample Links */}
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <button
                      key={i}
                      className={`w-full p-4 ${
                        settings.buttonStyle === "rounded" ? "rounded-2xl" :
                        settings.buttonStyle === "pill" ? "rounded-full" :
                        "rounded-lg"
                      } transition-all duration-200 hover:shadow-lg border border-white/40 text-left group`}
                      style={{
                        backgroundColor: settings.bgColor,
                        color: settings.textColor,
                        fontFamily: settings.fontFamily
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🔗</span>
                        <div className="flex-1">
                          <p className="font-semibold group-hover:scale-105 transition-transform">
                            Link {i}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Social Icons */}
                {settings.socialIcons && (
                  <div className="flex justify-center gap-4 mt-8">
                    {["📘", "📷", "🐦", "💼"].map((icon, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 bg-white/60 rounded-2xl flex items-center justify-center hover:bg-white/80 transition-colors cursor-pointer"
                      >
                        <span className="text-lg">{icon}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Customization Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Preset Themes */}
          <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#282828]">
                <Star className="w-5 h-5" />
                Preset Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {presetThemes.map((preset, index) => (
                  <motion.div
                    key={preset.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => applyPreset(preset)}
                  >
                    <div className="p-4 bg-gradient-to-br from-white/60 to-white/30 rounded-2xl border border-white/40 hover:border-[#282828]/20 transition-all duration-300 group-hover:shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-[#282828]">{preset.name}</h4>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-[#282828]/60 hover:text-[#282828] hover:bg-white/60"
                        >
                          Apply
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <div className="h-3 bg-[#282828]/10 rounded-full overflow-hidden">
                          <div
                            className="h-full transition-all duration-300"
                            style={{ backgroundColor: preset.theme.bgColor, width: '70%' }}
                          ></div>
                        </div>
                        <p className="text-sm text-[#282828]/60">{preset.preview}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Custom Settings */}
          <div className="space-y-6">
            {/* Colors */}
            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-[#282828]">
                  <Palette className="w-5 h-5" />
                  Colors & Styling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="bgColor" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                      Background Color
                    </Label>
                    <div className="flex gap-3">
                      <Input
                        id="bgColor"
                        type="color"
                        value={settings.bgColor}
                        onChange={(e) => {
                          setSettings({ ...settings, bgColor: e.target.value })
                          setHasUnsavedChanges(true)
                        }}
                        className="w-16 h-12 p-1 border-2 border-white/40 rounded-xl cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={settings.bgColor}
                        onChange={(e) => {
                          setSettings({ ...settings, bgColor: e.target.value })
                          setHasUnsavedChanges(true)
                        }}
                        className="flex-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                        placeholder="#fffbeb"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="textColor" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                      Text Color
                    </Label>
                    <div className="flex gap-3">
                      <Input
                        id="textColor"
                        type="color"
                        value={settings.textColor}
                        onChange={(e) => {
                          setSettings({ ...settings, textColor: e.target.value })
                          setHasUnsavedChanges(true)
                        }}
                        className="w-16 h-12 p-1 border-2 border-white/40 rounded-xl cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={settings.textColor}
                        onChange={(e) => {
                          setSettings({ ...settings, textColor: e.target.value })
                          setHasUnsavedChanges(true)
                        }}
                        className="flex-1 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40"
                        placeholder="#282828"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm font-medium text-[#282828]/80 mb-3 block">
                      Button Style
                    </Label>
                    <div className="flex gap-3">
                      {[
                        { value: "rounded", label: "Rounded" },
                        { value: "square", label: "Square" },
                        { value: "pill", label: "Pill" }
                      ].map((style) => (
                        <button
                          key={style.value}
                          onClick={() => {
                            setSettings({ ...settings, buttonStyle: style.value as any })
                            setHasUnsavedChanges(true)
                          }}
                          className={`px-4 py-2 rounded-xl border transition-all ${
                            settings.buttonStyle === style.value
                              ? "bg-[#282828] text-white border-[#282828]"
                              : "bg-white/70 text-[#282828]/70 border-[#282828]/20 hover:bg-white/90"
                          }`}
                        >
                          {style.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="fontFamily" className="text-sm font-medium text-[#282828]/80 mb-2 block">
                      Font Family
                    </Label>
                    <select
                      id="fontFamily"
                      value={settings.fontFamily}
                      onChange={(e) => {
                        setSettings({ ...settings, fontFamily: e.target.value })
                        setHasUnsavedChanges(true)
                      }}
                      className="w-full px-3 py-2 bg-white/70 border border-[#282828]/20 rounded-xl focus:border-[#282828]/40 focus:outline-none"
                    >
                      <option value="Inter">Inter (Modern)</option>
                      <option value="Arial">Arial (Classic)</option>
                      <option value="Georgia">Georgia (Elegant)</option>
                      <option value="Helvetica">Helvetica (Clean)</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Display Options */}
            <Card className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-[#282828]">
                  <Eye className="w-5 h-5" />
                  Display Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { key: "avatarEnabled", label: "Show Profile Avatar" },
                  { key: "bioEnabled", label: "Show Bio Text" },
                  { key: "socialIcons", label: "Show Social Icons" }
                ].map((option) => (
                  <div key={option.key} className="flex items-center justify-between p-4 bg-[#fffbeb]/30 rounded-2xl border border-[#fffbeb]/50">
                    <div>
                      <p className="font-medium text-[#282828]">{option.label}</p>
                      <p className="text-sm text-[#282828]/60">
                        {option.key === "avatarEnabled" && "Display your profile picture at the top"}
                        {option.key === "bioEnabled" && "Show your bio description"}
                        {option.key === "socialIcons" && "Display social media links"}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSettings({ ...settings, [option.key]: !settings[option.key as keyof ThemeSettings] })
                        setHasUnsavedChanges(true)
                      }}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings[option.key as keyof ThemeSettings] ? "bg-[#282828]" : "bg-gray-300"
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        settings[option.key as keyof ThemeSettings] ? "translate-x-6" : "translate-x-1"
                      }`} />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}