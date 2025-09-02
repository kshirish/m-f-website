import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mychoicemortgagefinance.com.au";
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/home-loans`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/personal-finance`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/commercial-finance`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Area pages
  const areas = ["sydney", "melbourne", "perth", "adelaide"];
  const areaPages = areas.map((area) => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Suburb pages
  const suburbs = [
    // Sydney
    { area: "sydney", suburb: "sydney-cbd" },
    { area: "sydney", suburb: "bondi" },
    { area: "sydney", suburb: "manly" },
    { area: "sydney", suburb: "chatswood" },

    // Melbourne
    { area: "melbourne", suburb: "melbourne-cbd" },
    { area: "melbourne", suburb: "south-yarra" },
    { area: "melbourne", suburb: "brighton" },
    { area: "melbourne", suburb: "richmond" },
    { area: "melbourne", suburb: "st-kilda" },
    { area: "melbourne", suburb: "docklands" },

    // Perth
    { area: "perth", suburb: "fremantle" },
    { area: "perth", suburb: "subiaco" },
    { area: "perth", suburb: "joondalup" },
    { area: "perth", suburb: "rockingham" },
    { area: "perth", suburb: "mandurah" },

    // Adelaide
    { area: "adelaide", suburb: "glenelg" },
  ];

  const suburbPages = suburbs.map(({ area, suburb }) => ({
    url: `${baseUrl}/areas/${area}/${suburb}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...areaPages, ...suburbPages];
}
