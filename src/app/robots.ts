import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "*", // Allows crawling of all public paths
      disallow: [
        "/api/*", // Protects API routes from bots
        "/dashboard/*", // Blocks dashboard (private project management area)
      ],
    },
    sitemap: "https://mdranju.vercel.app/sitemap.xml",
  };
}
