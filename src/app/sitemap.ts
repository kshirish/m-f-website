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
  const areaPages = areas.allIds.map((areaId) => ({
    url: `${baseUrl}/areas/${areaId}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Suburb pages
  const suburbPages = suburbs.allIds.map((suburbId) => {
    const suburbData = suburbs.byId[suburbId];
    return {
      url: `${baseUrl}/areas/${suburbData.areaId}/suburbs/${suburbData.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  // Blog pages
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/first-home-buyer-guide`,
      lastModified: "2024-03-15T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/investment-property-tips`,
      lastModified: "2024-03-10T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/refinancing-guide`,
      lastModified: "2024-03-12T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/market-updates`,
      lastModified: "2024-02-22T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/construction-loans-guide`,
      lastModified: "2024-02-20T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/smsf-property-investment`,
      lastModified: "2024-02-18T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/first-home-buyer-grants-2024`,
      lastModified: "2024-02-16T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/when-to-refinance`,
      lastModified: "2024-02-14T10:00:00+10:00",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return [...staticPages, ...areaPages, ...suburbPages, ...blogPages];
}
