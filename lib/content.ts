import { prisma } from "./prisma";

/** Server-side fetchers for admin-managed public content. */

export function getServices() {
  return prisma.service.findMany({ orderBy: { order: "asc" } });
}

export function getTestimonials() {
  return prisma.testimonial.findMany({ orderBy: { order: "asc" } });
}

export function getFaqs() {
  return prisma.faqItem.findMany({ orderBy: { order: "asc" } });
}

export function getOpenCareerRoles() {
  return prisma.careerRole.findMany({
    where: { isOpen: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function getCareerRole(slug: string) {
  return prisma.careerRole.findUnique({ where: { slug } });
}

export function getBlogPosts() {
  return prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
}

export function getBlogPost(slug: string) {
  return prisma.blogPost.findUnique({ where: { slug } });
}
