import { describe, expect, it } from "vitest";
import { company, navigation, services, teamRoles } from "./public-content";
describe("approved launch content", () => {
  it("uses the approved contact details and address", () => { expect(company.email).toBe("hello@unifotecweb.com"); expect(company.phone).toBe("+233 24 499 3720"); expect(company.address).toEqual(["19 Kofi Annan Street", "Airport Residential Area", "Accra, Ghana"]); });
  it("publishes all seven approved roles and launch navigation", () => { expect(teamRoles).toHaveLength(7); expect(navigation.map(({ name }) => name)).toEqual(["Home", "Services", "About", "Process", "Projects", "Contact"]); });
  it("has no public pricing and includes the approved services", () => { expect(JSON.stringify(services)).not.toMatch(/\$|price|pricing/i); expect(services).toHaveLength(10); });
});
