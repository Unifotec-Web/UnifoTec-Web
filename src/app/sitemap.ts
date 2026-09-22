import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/services", "/services/web-development", "/services/mobile-app", "/services/custom-software", "/services/ecommerce", "/services/api-payment", "/services/business-automation", "/services/cloud-hosting", "/services/maintenance", "/services/digital-transformation", "/process", "/projects", "/team", "/contact", "/faq", "/start-project", "/privacy", "/terms"];
  return paths.map((path) => ({ url: `https://unifotecweb.com${path}` }));
}
