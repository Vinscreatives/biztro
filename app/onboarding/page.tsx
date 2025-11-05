"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const onboardingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  industry: z.string().min(2, "Industry is required"),
  website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  socialLink: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  tagline: z.string().optional(),
  businessType: z.enum(["freelancer", "startup", "sme", "creator", "shop_owner", "other"]),
  primaryGoal: z.enum(["build_online_presence", "share_business_profile", "sell_services", "get_bookings", "other"]),
  phone: z.string().optional(),
})

type OnboardingFormData = z.infer<typeof onboardingSchema>

export default function OnboardingPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbeb]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#282828] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
  })

  const onSubmit = async (data: OnboardingFormData) => {
    if (!session?.user?.id) {
      toast({
        title: "Error",
        description: "Please sign in first",
        variant: "destructive",
      })
      router.push("/auth/signin")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          website: data.website || null,
          socialLink: data.socialLink || null,
          tagline: data.tagline || null,
          phone: data.phone || null,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save onboarding data")
      }

      toast({
        title: "Success",
        description: "Your profile has been created!",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#fffbeb]">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Tell us about your business</CardTitle>
          <CardDescription>
            Help us personalize your Biztro experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  {...register("businessName")}
                  placeholder="My Business"
                />
                {errors.businessName && (
                  <p className="text-sm text-red-500">{errors.businessName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Input
                id="industry"
                {...register("industry")}
                placeholder="e.g., Technology, Retail, Consulting"
              />
              {errors.industry && (
                <p className="text-sm text-red-500">{errors.industry.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  {...register("website")}
                  placeholder="https://yourwebsite.com"
                />
                {errors.website && (
                  <p className="text-sm text-red-500">{errors.website.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="socialLink">Social Media Link</Label>
                <Input
                  id="socialLink"
                  type="url"
                  {...register("socialLink")}
                  placeholder="https://instagram.com/yourhandle"
                />
                {errors.socialLink && (
                  <p className="text-sm text-red-500">{errors.socialLink.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline">Business Tagline</Label>
              <Input
                id="tagline"
                {...register("tagline")}
                placeholder="A short description of your business"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type *</Label>
              <Select
                onValueChange={(value) => setValue("businessType", value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="freelancer">Freelancer</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                  <SelectItem value="sme">SME</SelectItem>
                  <SelectItem value="creator">Creator</SelectItem>
                  <SelectItem value="shop_owner">Shop Owner</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.businessType && (
                <p className="text-sm text-red-500">{errors.businessType.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="primaryGoal">Primary Goal for Using Biztro *</Label>
              <Select
                onValueChange={(value) => setValue("primaryGoal", value as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="build_online_presence">Build Online Presence</SelectItem>
                  <SelectItem value="share_business_profile">Share Business Profile</SelectItem>
                  <SelectItem value="sell_services">Sell Services</SelectItem>
                  <SelectItem value="get_bookings">Get Bookings</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.primaryGoal && (
                <p className="text-sm text-red-500">{errors.primaryGoal.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating your profile..." : "Complete Setup"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

