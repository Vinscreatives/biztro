// Middleware removed to avoid Vercel edge function size limits
// Authentication protection is now handled in individual pages/components
// using NextAuth's useSession or getServerSession hooks

export default function middleware() {
  // No middleware - authentication handled per-page
}

export const config = {
  matcher: [], // No routes protected by middleware
}

