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

    const appearance = await prisma.appearance.findUnique({
      where: { userId: session.user.id },
    })

    return NextResponse.json(appearance)
  } catch (error) {
    console.error("Error fetching appearance:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()

    const existing = await prisma.appearance.findUnique({
      where: { userId: session.user.id },
    })

    let appearance

    if (existing) {
      appearance = await prisma.appearance.update({
        where: { userId: session.user.id },
        data: {
          theme: body.theme,
          bgColor: body.bgColor,
          textColor: body.textColor,
          buttonStyle: body.buttonStyle,
          font: body.font,
          showAvatar: body.showAvatar ?? true,
          showSocials: body.showSocials ?? true,
        },
      })
    } else {
      appearance = await prisma.appearance.create({
        data: {
          userId: session.user.id,
          theme: body.theme,
          bgColor: body.bgColor,
          textColor: body.textColor,
          buttonStyle: body.buttonStyle,
          font: body.font,
          showAvatar: body.showAvatar ?? true,
          showSocials: body.showSocials ?? true,
        },
      })
    }

    return NextResponse.json(appearance)
  } catch (error) {
    console.error("Error saving appearance:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

