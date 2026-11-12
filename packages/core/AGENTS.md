<!-- harness:start id=code-review-rules -->
## Code Review Rules

Правила ревью для файлов в `packages/core/` из `REVIEW.md`. Раздел ведёт harness-kit: правьте `REVIEW.md` и запустите `harness-kit sync`.

### no-floats-for-money

Paths: `packages/core/**`

Invariant: amounts of money are integer cents everywhere in `packages/core`.
Safe path: use `Cents` and `addCents` from `packages/core/src/money.ts`; never divide before formatting.
<!-- harness:end -->
