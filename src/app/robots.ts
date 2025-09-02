import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/constants/common";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = COMPANY_INFO.website;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/admin/",
        "/*.json$",
        "/*.js$",
        "/*.css$",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
