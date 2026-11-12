import { expect, it } from "vitest";
import { addCents, type Cents } from "./money";

it("adds integer cents", () => {
  expect(addCents(150 as Cents, 250 as Cents)).toBe(400);
});
