"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateSubmissionStatus(id: string, status: string) {
  await prisma.contactSubmission.update({ where: { id }, data: { status } });
  revalidatePath("/admin/inbox");
}

export async function deleteSubmission(id: string) {
  await prisma.contactSubmission.delete({ where: { id } });
  revalidatePath("/admin/inbox");
}
