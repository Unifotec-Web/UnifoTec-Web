import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/blog", "/dashboard"] }, sitemap: "https://unifotecweb.com/sitemap.xml" }; }
