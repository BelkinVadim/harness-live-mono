import tokens from "./tokens.json" with { type: "json" };

export function badgeStyle(overdue: boolean): { color: string } {
  return { color: overdue ? "#e11d48" : tokens.color.text.value };
}
