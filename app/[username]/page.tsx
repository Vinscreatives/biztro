import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import PublicProfile from "@/components/public-profile"

async function getProfile(username: string) {
  const user = await prisma.user.findUnique({
    where: { username },
    include: {
      links: {
        where: { isActive: true },
        orderBy: { order: "asc" },
      },
      appearance: true,
      onboarding: true,
    },
  })

  return user
}

export default async function ProfilePage({
  params,
}: {
  params: { username: string }
}) {
  const user = await getProfile(params.username)

  if (!user) {
    notFound()
  }

  // Track page view
  await prisma.analytics.create({
    data: {
      userId: user.id,
      event: "profile_view",
    },
  })

  return <PublicProfile user={user} />
}

