# Review rules

## no-floats-for-money

Paths: packages/core/**

Invariant: amounts of money are integer cents everywhere in `packages/core`.
Safe path: use `Cents` and `addCents` from `packages/core/src/money.ts`; never divide before formatting.

## no-secrets-in-logs

Invariant: no tokens, passwords or session ids reach logs in any package.
Safe path: log user ids only, through the package logger.
<!-- harness:start id=review-rules -->
## Как ревьюить (harness-kit)

- **Провал** — нарушение инварианта из этого файла, `AGENTS.md` или [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md); ошибка, из-за которой код делает не то, что заявлено в PR; изменение пути с риском 2 из [`docs/RISK.md`](docs/RISK.md) без плана отката.
- **Метки находок:** `Important` — нужно исправить до слияния; `Nit` — мелочь, не больше трёх на PR; `Pre-existing` — проблема была до PR, не блокирует.
- **Не ревьюить:** сгенерированные файлы, lock-файлы, `harness/core/`, `harness/ledger/`; то, что уже ловит CI (`scripts/verify`).
- **Ссылки** — в формате `file:line` с дословной цитатой кода.
- **Сводка** в конце: число находок по меткам.
- Точность важнее количества: лучше одна подтверждённая находка, чем пять догадок.
- Ревью — один раунд, не больше трёх. Во втором и третьем — только новый diff и без повторов прошлых находок; вместо строки указывается класс бага.

### Изменения с риском 2

Изменение путей с риском 2 из [`docs/RISK.md`](docs/RISK.md) выпускается под флагом или поэтапно, и в PR описано, как его откатить. PR без такого плана — `Important`.

### Контракт находки

Каждая находка содержит:

- **утверждение:** что сломано и при каких условиях;
- **доказательство:** `file:line` и дословный фрагмент кода;
- **воспроизведение:** падающий тест или команда, если это возможно;
- **уровень уверенности** по типу доказательства: «Подтверждено» — воспроизведено тестом или командой; «Вероятно» — путь прослежен по коду со ссылками `file:line`, но не запущен; «Предположение» — не находка, а вопрос автору;
- **что опровергло бы** находку.

`Important` допускается только с уровнем «Подтверждено» или «Вероятно».

Ревьюер harness выдаёт находки списком JSON по схеме `harness/core/schemas/finding.json`: уровни `confirmed` («Подтверждено»), `likely` («Вероятно»), `assumption` («Предположение»), метки `important`, `nit`, `pre-existing`. До публикации их проверяет `node harness/core/runtime.mjs findings check <файл>`: находка с несуществующим файлом или строкой, с цитатой не из этих строк или с именем, которого нет в репозитории, отбрасывается; «Предположение» становится вопросом автору.
<!-- harness:end -->
<!-- harness:start id=check-pack-design-tokens -->
## Пакет проверок design-tokens (harness-kit)

Правила пакета проверок `design-tokens`: подключается и выключается модулем `check-pack.design-tokens` (harness-kit disable/enable).

### Цвета — только из токенов дизайн-системы

Инвариант: цвет в стилях и компонентах берётся из токенов дизайн-системы (файлы `tokens.json`, `*.tokens.json`, `tokens.css`, папка `tokens/` и подобные), а не задаётся литералом: `#1a73e8`, `rgb(…)`, `hsl(…)`.
Безопасный путь: возьмите подходящий токен (CSS-переменная, переменная SCSS или импорт из файла токенов); нужного нет — добавьте его в файл токенов в том же PR. Осознанное исключение помечается комментарием `design-tokens-ignore` на той же строке и объясняется в PR. Литералы ловит проверка `design-tokens` в verify.
<!-- harness:end -->
