"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function AppearancePage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [appearance, setAppearance] = useState({
    theme: "light",
    bgColor: "#ffffff",
    textColor: "#000000",
    buttonStyle: "rounded",
    font: "inter",
    showAvatar: true,
    showSocials: true,
  })

  useEffect(() => {
    fetchAppearance()
  }, [session])

  const fetchAppearance = async () => {
    try {
      const response = await fetch("/api/appearance")
      if (response.ok) {
        const data = await response.json()
        if (data) {
          setAppearance({
            theme: data.theme || "light",
            bgColor: data.bgColor || "#ffffff",
            textColor: data.textColor || "#000000",
            buttonStyle: data.buttonStyle || "rounded",
            font: data.font || "inter",
            showAvatar: data.showAvatar ?? true,
            showSocials: data.showSocials ?? true,
          })
        }
      }
    } catch (error) {
      console.error("Error fetching appearance:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      const response = await fetch("/api/appearance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appearance),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Appearance settings saved",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      })
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
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#282828] mb-2">Appearance</h1>
        <p className="text-gray-600">Customize how your profile looks</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>Choose your profile theme</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <Select
                value={appearance.theme}
                onValueChange={(value) =>
                  setAppearance({ ...appearance, theme: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="auto">Auto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Button Style</CardTitle>
            <CardDescription>Customize your link button appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Button Style</Label>
              <Select
                value={appearance.buttonStyle}
                onValueChange={(value) =>
                  setAppearance({ ...appearance, buttonStyle: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rounded">Rounded</SelectItem>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="pill">Pill</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Colors</CardTitle>
            <CardDescription>Customize your profile colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Background Color</Label>
              <div className="flex gap-3">
                <Input
                  type="color"
                  value={appearance.bgColor}
                  onChange={(e) =>
                    setAppearance({ ...appearance, bgColor: e.target.value })
                  }
                  className="w-20 h-11"
                />
                <Input
                  type="text"
                  value={appearance.bgColor}
                  onChange={(e) =>
                    setAppearance({ ...appearance, bgColor: e.target.value })
                  }
                  placeholder="#ffffff"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Text Color</Label>
              <div className="flex gap-3">
                <Input
                  type="color"
                  value={appearance.textColor}
                  onChange={(e) =>
                    setAppearance({ ...appearance, textColor: e.target.value })
                  }
                  className="w-20 h-11"
                />
                <Input
                  type="text"
                  value={appearance.textColor}
                  onChange={(e) =>
                    setAppearance({ ...appearance, textColor: e.target.value })
                  }
                  placeholder="#000000"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Choose your font family</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Font</Label>
              <Select
                value={appearance.font}
                onValueChange={(value) =>
                  setAppearance({ ...appearance, font: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="roboto">Roboto</SelectItem>
                  <SelectItem value="poppins">Poppins</SelectItem>
                  <SelectItem value="montserrat">Montserrat</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Display Options</CardTitle>
            <CardDescription>Control what appears on your profile</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="showAvatar"
                checked={appearance.showAvatar}
                onCheckedChange={(checked) =>
                  setAppearance({ ...appearance, showAvatar: checked as boolean })
                }
              />
              <Label htmlFor="showAvatar">Show avatar</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="showSocials"
                checked={appearance.showSocials}
                onCheckedChange={(checked) =>
                  setAppearance({ ...appearance, showSocials: checked as boolean })
                }
              />
              <Label htmlFor="showSocials">Show social links</Label>
            </div>
          </CardContent>
        </Card>

        <Button onClick={handleSave} className="w-full sm:w-auto">
          Save Changes
        </Button>
      </div>
    </div>
  )
}

