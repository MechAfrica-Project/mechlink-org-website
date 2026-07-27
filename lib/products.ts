import { prisma } from "./prisma";

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: { features: { orderBy: { order: "asc" } } },
  });
}
