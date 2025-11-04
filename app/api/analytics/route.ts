import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get total clicks from analytics
    const totalClicks = await prisma.analytics.count({
      where: {
        userId: session.user.id,
        linkId: { not: null }, // Only count link clicks, not profile views
      },
    })

    // Get links with their click counts
    const links = await prisma.link.findMany({
      where: { userId: session.user.id },
      select: {
        id: true,
        title: true,
      },
    })

    // Get click counts for each link
    const linkIds = links.map(link => link.id)
    const linkClickCounts = await prisma.analytics.groupBy({
      by: ['linkId'],
      where: {
        userId: session.user.id,
        linkId: { in: linkIds },
      },
      _count: {
        linkId: true,
      },
    })

    // Get profile views (analytics without linkId)
    const profileViews = await prisma.analytics.count({
      where: {
        userId: session.user.id,
        linkId: null,
      },
    })

    // Create top performing links
    const topLinks = links.map(link => {
      const clickData = linkClickCounts.find(lc => lc.linkId === link.id)
      return {
        id: link.id,
        title: link.title,
        clicks: clickData ? clickData._count.linkId : 0,
      }
    })
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 10)

    return NextResponse.json({
      totalClicks,
      profileViews,
      topLinks,
    })
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

