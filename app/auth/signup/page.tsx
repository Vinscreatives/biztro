"use client"

import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/ui/logo"
import { useToast } from "@/hooks/use-toast"

// Icons
import { Mail, User, ArrowRight, Chrome } from "lucide-react"

export default function SignUpPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        name,
        redirect: false,
      })

      if (result?.error) {
        toast({
          title: "Registration Failed",
          description: "Please check your information and try again.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Account created!",
          description: "Welcome to Biztro! Redirecting to get started...",
        })
        router.push("/onboarding")
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    try {
      await signIn("google", { callbackUrl: "/onboarding" })
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Failed to connect to Google. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffbeb] via-[#fef7e0] to-[#fdf4d0] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(40,40,40,0.05)_1px,transparent_0)] bg-[length:24px_24px]" />

      {/* Floating elements for depth */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-[#282828]/5 rounded-full blur-xl" />
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-[#282828]/3 rounded-full blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          scale: { duration: 0.5, delay: 0.1 }
        }}
        className="w-full max-w-md relative"
      >
        {/* Main auth card with glass morphism */}
        <div className="relative backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl shadow-2xl shadow-[#282828]/10 overflow-hidden">
          {/* Subtle gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#282828]/5 to-transparent rounded-3xl" />

          <div className="relative p-8 sm:p-10">
            {/* Logo and title */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mb-8"
            >
              <div className="flex justify-center mb-6">
                <Logo size="md" />
              </div>
              <h1 className="text-3xl font-bold text-[#282828] mb-2 tracking-tight">
                Join Biztro
              </h1>
              <p className="text-[#282828]/70 text-sm leading-relaxed">
                Create your account and start building your professional online presence
              </p>
            </motion.div>

            {/* Third-party signup */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8"
            >
              <Button
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                variant="outline"
                className="w-full h-12 bg-white/50 hover:bg-white/70 border-[#282828]/20 hover:border-[#282828]/30 text-[#282828] rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#282828]/5 group"
              >
                <Chrome className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Continue with Google
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#282828]/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/50 text-[#282828]/60 rounded-full">
                    or create with email
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Registration form */}
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-[#282828]/80 flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  Full name
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 pl-4 pr-4 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40 rounded-2xl text-[#282828] placeholder-[#282828]/40 focus:ring-2 focus:ring-[#282828]/10 transition-all duration-300 hover:bg-white/80"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-[#282828]/80 flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 pl-4 pr-4 bg-white/70 border-[#282828]/20 focus:border-[#282828]/40 rounded-2xl text-[#282828] placeholder-[#282828]/40 focus:ring-2 focus:ring-[#282828]/10 transition-all duration-300 hover:bg-white/80"
                  />
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-[#282828] hover:bg-[#282828]/90 text-white rounded-2xl font-medium text-sm shadow-lg shadow-[#282828]/20 hover:shadow-xl hover:shadow-[#282828]/25 transition-all duration-300 group"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Creating account...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Create your Biztro account
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </motion.form>

            {/* Sign in link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-[#282828]/60 text-sm">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="text-[#282828] hover:text-[#282828]/80 font-medium transition-colors duration-200 hover:underline"
                >
                  Sign in instead
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-[#282828]/50">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="hover:text-[#282828]/70 transition-colors duration-200">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="hover:text-[#282828]/70 transition-colors duration-200">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

