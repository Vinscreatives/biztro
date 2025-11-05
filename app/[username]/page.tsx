import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import PublicProfile from "@/components/public-profile"

async function getProfile(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        links: {
          where: { isActive: true },
          orderBy: { order: "asc" },
        },
        appearance: true,
      },
    })

    return user
  } catch (error) {
    console.error("Database error in getProfile:", error)
    return null
  }
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params
  const user = await getProfile(username)

  if (!user) {
    notFound()
  }

  // Track page view (non-blocking)
  try {
    await prisma.analytics.create({
      data: {
        userId: user.id,
        eventType: "profile_view",
        clickedAt: new Date(),
      },
    })
  } catch (error) {
    // Silently fail analytics tracking to prevent page load errors
    console.error("Analytics tracking failed:", error)
  }

  return <PublicProfile user={user} />
}

