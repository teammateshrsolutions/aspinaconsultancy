import type { MetadataRoute } from "next";
import { courses, guides } from "@/lib/site-data";
const base = "https://aspin.in";
export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/about", "/career-guidance", "/college-admission-guidance", "/courses", "/colleges", "/contact", "/guides", "/privacy-policy"];
  return [...fixed.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })), ...courses.map(({ slug }) => ({ url: `${base}/courses/${slug}`, lastModified: new Date() })), ...guides.map(({ slug }) => ({ url: `${base}/guides/${slug}`, lastModified: new Date() }))];
}
