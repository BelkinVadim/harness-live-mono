# acme monorepo

pnpm workspace with two packages:

- `packages/core` — domain logic (money, orders). No dependencies on other packages.
- `packages/web` — UI; depends on `@acme/core`.

Run `pnpm typecheck` and `pnpm test` from the root before every commit.
