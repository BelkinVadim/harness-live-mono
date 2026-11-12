import tokens from "./tokens.json" with { type: "json" };

// Цвет бейджа: просроченное выделяется, остальное — цветом текста из токенов.
export function badgeStyle(overdue: boolean): { color: string } {
  return { color: overdue ? "#e11d48" : tokens.color.text.value };
}
