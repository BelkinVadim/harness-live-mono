import { expect, it } from "vitest";
import type { Cents } from "@acme/core";
import { renderTotal } from "./render";

it("renders cents as a decimal amount", () => {
  expect(renderTotal(1999 as Cents)).toBe("Total: 19.99");
});
