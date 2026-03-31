"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

type CreateCourseInput = {
  title: string
  subject: string
  language: string
  amount: number
  image: string
  description: string
}

export async function createCourse(data: CreateCourseInput) {
  try {
 
    const tutor = await prisma.user.findFirst({
      where: { role: "TUTOR" },
    })

    if (!tutor) {
      throw new Error("Tutor not found")
    }

    await prisma.course.create({
      data: {
        title: data.title,
        subject: data.subject,
        language: data.language,

        amount: data.amount,
        pricingMode: data.amount === 0 ? "FREE" : "PAID",

        level: "BEGINNER",
        status: "DRAFT",

        tutorId: tutor.id,
      },
    })

    revalidatePath("/tutor")

  } catch (error) {
    console.log("CREATE COURSE ERROR 👉", error)
  }
}