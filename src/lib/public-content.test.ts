import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { company, navigation, services, teamRoles } from "./public-content";
describe("approved launch content", () => {
  it("uses the approved contact details and address", () => { expect(company.email).toBe("hello@unifotecweb.com"); expect(company.phone).toBe("+233 24 499 3720"); expect(company.address).toEqual(["19 Kofi Annan Street", "Airport Residential Area", "Accra, Ghana"]); });
  it("publishes all seven approved roles and the canonical team route", () => { expect(teamRoles).toHaveLength(7); expect(navigation.map(({ name }) => name)).toEqual(["Home", "Services", "About", "Our Team", "Process", "Projects", "Contact"]); expect(navigation).toContainEqual({ name: "Our Team", href: "/team" }); });
  it("has no public pricing and includes the approved services", () => { expect(JSON.stringify(services)).not.toMatch(/\$|price|pricing/i); expect(services).toHaveLength(10); });
  it("contains no prohibited launch claims or fictional identities", () => { const content = JSON.stringify({ company, navigation, services, teamRoles }); expect(content).not.toMatch(/100\+|100%|24\/7|uptime|sla|flawless|Jane Wanjiku|Sarah Johnson|shadcnblocks/i); });
  it("removes copied template promotion and testimonial components", () => { expect(existsSync("src/components/blocks/blog7.tsx")).toBe(false); expect(existsSync("src/components/ui/testimonial-card.tsx")).toBe(false); expect(readFileSync("docs/DECISIONS.md", "utf8")).not.toContain("shadcnblocks.com"); });
});
