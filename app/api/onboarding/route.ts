import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()

    // Update user with onboarding data directly in User model
    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name: body.fullName || body.name,
        businessName: body.businessName,
        industry: body.industry,
        businessTagline: body.businessTagline || body.tagline,
        businessType: body.businessType,
        primaryGoal: body.primaryGoal,
        website: body.website,
        phone: body.phone,
        bio: body.bio,
      },
      select: {
        id: true,
        name: true,
        businessName: true,
        industry: true,
        businessTagline: true,
        businessType: true,
        primaryGoal: true,
        website: true,
        phone: true,
        bio: true,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    console.error("Onboarding error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

