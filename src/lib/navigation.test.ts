import { describe, expect, it } from "vitest";
import { isActiveNavigationPath } from "./navigation";

describe("isActiveNavigationPath", () => {
  it("keeps Home active only at the root", () => { expect(isActiveNavigationPath("/", "/")).toBe(true); expect(isActiveNavigationPath("/about/", "/")).toBe(false); });
  it("matches an item and its nested routes", () => { expect(isActiveNavigationPath("/services/", "/services")).toBe(true); expect(isActiveNavigationPath("/services/mobile-app/", "/services")).toBe(true); expect(isActiveNavigationPath("/team/", "/team")).toBe(true); expect(isActiveNavigationPath("/contact/", "/about")).toBe(false); });
});
