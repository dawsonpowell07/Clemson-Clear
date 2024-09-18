// /app/add-experience/actions.ts

"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { addExperienceSchema, AddExperienceValues } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function addExperience(values: AddExperienceValues) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const {
    company,
    position,
    startDate,
    endDate,
    rating,
    compensation,
    description,
  } = addExperienceSchema.parse(values);

  // Convert dates and numbers
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const ratingInt = rating ? parseInt(rating) : undefined;
  const compensationFloat = compensation ? parseFloat(compensation) : undefined;

  await prisma.experience.create({
    data: {
      company,
      position,
      startDate: startDateObj,
      endDate: endDateObj,
      rating: ratingInt,
      compensation: compensationFloat,
      description,
      userId,
    },
  });

  revalidatePath("/profile"); // Revalidate the profile page
}
