import type { MetadataRoute } from "next";

const baseUrl = "https://humanbacked.vercel.app";

const routes = [
  {
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    url: `${baseUrl}/privacy-policy`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  },
  {
    url: `${baseUrl}/terms`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  },
  {
    url: `${baseUrl}/white-paper`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
