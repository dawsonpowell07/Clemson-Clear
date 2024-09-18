"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";

export async function updateProfile(values: UpdateProfileValues) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { name, gpa, major, year } = updateProfileSchema.parse(values);

  await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      gpa: gpa ? parseFloat(gpa) : undefined,
      major,
      year,
    },
  });

  revalidatePath("/settings");
}
