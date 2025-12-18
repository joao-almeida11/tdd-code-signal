import { sum } from "../src/math.ts";
import { describe, expect, it } from "@jest/globals";

describe("sum function", () => {
  it.each([
    [2, 3, 5],
    [5, 6, 11],
  ])(
    "adds two numbers correctly: sum(%s, %s) === %s",
    (a: number, b: number, expected: number) => {
      // Act
      const result = sum(a, b);

      // Assert
      expect(result).toBe(expected);
    },
  );
});
