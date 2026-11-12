<!-- harness:start id=map -->
## Карта проекта (harness-kit)

Раздел ведёт harness-kit по `harness.config.yaml`. Пути здесь — карта: файлы остаются на своих местах.

- Единая проверка перед готовностью работы: `scripts/verify`.
- Архитектура, слои и границы модулей: `docs/ARCHITECTURE.md`.
- Инварианты системы: `docs/INVARIANTS.md`.
- Уровни риска путей и владельцы: `docs/RISK.md`.
- Правила ревью: `REVIEW.md`.
- Конфиг harness: `harness.config.yaml`.
- Пакеты: `packages/core`, `packages/web`.
- Файлы проекта, которые harness никогда не трогает: `harness/local/`.
- Уровень зрелости harness: 2; проверки пока в режиме наблюдения (`observe`).
<!-- harness:end -->
# acme monorepo

pnpm workspace with two packages:

- `packages/core` — domain logic (money, orders). No dependencies on other packages.
- `packages/web` — UI; depends on `@acme/core`.

Run `pnpm typecheck` and `pnpm test` from the root before every commit.
<!-- harness:start id=code-review-rules -->
## Code Review Rules

Правила ревью проекта из `REVIEW.md`: полный текст и порядок ревью — там. Раздел ведёт harness-kit: правьте `REVIEW.md` и запустите `harness-kit sync`.

Правила для отдельных папок — в их файлах: `packages/core/AGENTS.md`.

### no-secrets-in-logs

Invariant: no tokens, passwords or session ids reach logs in any package.
Safe path: log user ids only, through the package logger.

### Цвета — только из токенов дизайн-системы

Инвариант: цвет в стилях и компонентах берётся из токенов дизайн-системы (файлы `tokens.json`, `*.tokens.json`, `tokens.css`, папка `tokens/` и подобные), а не задаётся литералом: `#1a73e8`, `rgb(…)`, `hsl(…)`.
Безопасный путь: возьмите подходящий токен (CSS-переменная, переменная SCSS или импорт из файла токенов); нужного нет — добавьте его в файл токенов в том же PR. Осознанное исключение помечается комментарием `design-tokens-ignore` на той же строке и объясняется в PR. Литералы ловит проверка `design-tokens` в verify.
<!-- harness:end -->
