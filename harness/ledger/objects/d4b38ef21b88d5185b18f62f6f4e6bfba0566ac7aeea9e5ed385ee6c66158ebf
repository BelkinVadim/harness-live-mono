# Review rules

## no-floats-for-money

Paths: packages/core/**

Invariant: amounts of money are integer cents everywhere in `packages/core`.
Safe path: use `Cents` and `addCents` from `packages/core/src/money.ts`; never divide before formatting.

## no-secrets-in-logs

Invariant: no tokens, passwords or session ids reach logs in any package.
Safe path: log user ids only, through the package logger.
