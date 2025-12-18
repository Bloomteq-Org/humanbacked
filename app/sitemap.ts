import type { MetadataRoute } from "next";

const baseUrl = "https://humanbacked.vercel.app";

const routes = [""].map((route) => ({
  url: `${baseUrl}/${route}`,
  lastModified: new Date().toISOString(),
  changeFrequency: "weekly" as const,
  priority: 1,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
