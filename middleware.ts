import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

export default NextAuth(authOptions)

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding"],
}

