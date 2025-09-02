import { MetadataRoute } from "next";
import { COMPANY_INFO, SERVICES, areas, suburbs } from "@/constants/common";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.website;
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...SERVICES.main.map((service) => ({
      url: `${baseUrl}${service.href}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Area pages
  const areaPages = Object.keys(areas).map((areaSlug) => ({
    url: `${baseUrl}/areas/${areaSlug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Suburb pages
  const suburbPages = Object.entries(suburbs).map(
    ([suburbSlug, suburbData]) => ({
      url: `${baseUrl}/areas/${suburbData.areaSlug}/suburbs/${suburbSlug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...areaPages, ...suburbPages];
}
