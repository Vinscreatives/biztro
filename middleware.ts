import { auth } from "@/lib/auth"

export default auth((req) => {
  // Redirect to signin if not authenticated
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    const signInUrl = new URL("/auth/signin", req.nextUrl.origin)
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return Response.redirect(signInUrl)
  }

  // Allow access to onboarding for authenticated users
  if (req.auth && req.nextUrl.pathname.startsWith("/onboarding")) {
    return null // Continue to onboarding
  }

  return null // Continue with the request
})

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding"],
}

