import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("combines conditional class values", () => {
    expect(cn("base", false && "hidden", ["layout", { active: true }])).toBe("base layout active");
  });

  it("keeps the last conflicting Tailwind utility", () => {
    expect(cn("p-2 text-sm", "p-4", { "text-lg": true })).toBe("p-4 text-lg");
  });
});
