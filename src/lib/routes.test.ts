import { describe, expect, it } from "vitest";
import { canonicalRoutes } from "./routes";

describe("canonical routes", () => {
  it("uses the approved enquiry and website-development paths", () => {
    expect(canonicalRoutes.startProject).toBe("/start-project");
    expect(canonicalRoutes.webDevelopment).toBe("/services/web-development");
    expect(canonicalRoutes.team).toBe("/team");
  });
});
