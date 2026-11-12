import type { Cents } from "@acme/core";

export function renderTotal(total: Cents): string {
  return `Total: ${(total / 100).toFixed(2)}`;
}
