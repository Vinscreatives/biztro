"use client"

import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import {
  Home,
  Link as LinkIcon,
  Scissors,
  QrCode,
  Palette,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Bell
} from "lucide-react"
import { signOut } from "next-auth/react"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Link-in-Bio", href: "/dashboard/links", icon: LinkIcon },
  { name: "Short Links", href: "/dashboard/short-links", icon: Scissors },
  { name: "QR Codes", href: "/dashboard/qr-codes", icon: QrCode },
  { name: "Appearance", href: "/dashboard/appearance", icon: Palette },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Contacts & Leads", href: "/dashboard/contacts", icon: Users },
  { name: "Account Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Support", href: "/dashboard/support", icon: HelpCircle },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffbeb] via-[#fef7e0] to-[#fdf4d0]">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white/90 backdrop-blur-xl border-r border-white/20 flex flex-col shadow-2xl shadow-[#282828]/5">
          <div className="p-6 border-b border-[#282828]/10">
            <Logo size="md" />
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href ||
                (item.href === "/dashboard" && pathname === "/dashboard")
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#282828] text-white shadow-lg shadow-[#282828]/20"
                      : "text-[#282828]/70 hover:bg-white/60 hover:text-[#282828] hover:shadow-md"
                  }`}
                >
                  <item.icon className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </nav>
          <div className="p-4 border-t border-[#282828]/10">
            {/* User Info */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 mb-3">
              <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-[#282828]">
                  {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#282828] truncate">
                  {session?.user?.name || "User"}
                </p>
                <p className="text-xs text-[#282828]/60 truncate">
                  {session?.user?.email}
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start text-[#282828]/70 hover:text-[#282828] hover:bg-white/60 rounded-2xl transition-all duration-200"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-8 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#282828]">
                  {navigation.find(item =>
                    pathname === item.href ||
                    (item.href === "/dashboard" && pathname === "/dashboard")
                  )?.name || "Dashboard"}
                </h1>
                <p className="text-[#282828]/60 text-sm mt-1">
                  Welcome back, {session?.user?.name?.split(" ")[0] || "there"}!
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Notifications */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-2xl hover:bg-white/60 transition-all duration-200"
                >
                  <Bell className="w-5 h-5 text-[#282828]/70" />
                </Button>

                {/* User Menu */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#282828]/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-[#282828]">
                      {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto">
            <div className="p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

