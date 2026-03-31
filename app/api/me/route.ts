import { auth } from "@/lib/auth"
import prisma from "@/lib/db"

import { headers } from "next/headers"

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  return Response.json(user)
}