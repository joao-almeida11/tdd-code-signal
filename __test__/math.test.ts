import { sum } from "../src/math.ts";
import { describe, expect, it } from "@jest/globals";

describe("sum function", () => {
  it("should add two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
