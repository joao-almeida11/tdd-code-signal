import { sum } from "../src/math.js";

describe("sum function", () => {
  it("should add two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
