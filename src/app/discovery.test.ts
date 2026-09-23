import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import robots from "./robots";

describe("launch discovery files", () => {
  it("lists canonical launch routes only", () => { const urls = sitemap().map(({ url }) => String(url)); expect(urls).toContain("https://unifotecweb.com/team"); expect(urls).not.toContain("https://unifotecweb.com/blog"); expect(urls).not.toContain("https://unifotecweb.com/dashboard"); });
  it("allows crawlers and declares the canonical sitemap", () => { expect(robots().sitemap).toBe("https://unifotecweb.com/sitemap.xml"); });
});
