"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
  })

  useEffect(() => {
    fetchUser()
  }, [session])

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user")
      if (response.ok) {
        const data = await response.json()
        setUser({
          name: data.name || "",
          email: data.email || "",
          username: data.username || "",
        })
      }
    } catch (error) {
      console.error("Error fetching user:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Settings saved",
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

  const profileUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/${user.username}`

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#282828] mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your profile information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={user.email}
                disabled
                className="bg-gray-50"
              />
              <p className="text-xs text-gray-500">Email cannot be changed</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="yourusername"
              />
              <p className="text-xs text-gray-500">
                Your profile URL: {profileUrl}
              </p>
            </div>
            <Button onClick={handleSave}>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile URL</CardTitle>
            <CardDescription>Share this link with your audience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input value={profileUrl} readOnly className="bg-gray-50" />
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(profileUrl)
                  toast({
                    title: "Copied!",
                    description: "Profile URL copied to clipboard",
                  })
                }}
              >
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

