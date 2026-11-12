export type Cents = number & { readonly __brand: "Cents" };

export function addCents(a: Cents, b: Cents): Cents {
  return (a + b) as Cents;
}
