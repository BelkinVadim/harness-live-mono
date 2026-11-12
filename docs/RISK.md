# Уровни риска

Файл создан harness-kit и принадлежит проекту. Уровень риска изменения определяется путями, которые оно затрагивает, а не автором: 0 — документация и мелочи, 1 — обычный код, 2 — опасные пути. По этому файлу harness строит `CODEOWNERS` (уровень 2 и выше), а ревьюер выбирает глубину проверки. Для изменений с риском 2 шаблон PR требует план отката, а правила ревью — выпуск под флагом или поэтапно.

Правила читаются сверху вниз, действует последнее совпавшее (как в `CODEOWNERS`); путь без совпадений получает уровень `default`. `pattern` — шаблон пути от корня репозитория, `owners` — владельцы для `CODEOWNERS` (`@user`, `@org/team`). Пути ниже — умолчания профиля `solo-web`: уберите лишние и добавьте свои.

```yaml harness-risk
default: 1
paths:
  - pattern: "docs/**"
    risk: 0
    why: "документация"
    owners: []
  - pattern: "docs/RISK.md"
    risk: 2
    why: "уровни риска и владельцы"
    owners: []
  - pattern: "**/auth/**"
    risk: 2
    why: "аутентификация и права"
    owners: []
  - pattern: "**/payments/**"
    risk: 2
    why: "платежи"
    owners: []
  - pattern: "**/billing/**"
    risk: 2
    why: "платежи"
    owners: []
  - pattern: ".github/workflows/**"
    risk: 2
    why: "CI"
    owners: []
  - pattern: "scripts/verify"
    risk: 2
    why: "CI: единая проверка"
    owners: []
  - pattern: "harness.config.yaml"
    risk: 2
    why: "CI: режимы проверок и ворота harness"
    owners: []
  - pattern: "harness/core/**"
    risk: 2
    why: "CI: рантайм и задачи harness"
    owners: []
```

