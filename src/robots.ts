import { MetadataRoute } from "next";

export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
      disallow: ["/api/*"],
    },
    sitemap: "https://mdranju.xyz/sitemap.xml",
  };
}
