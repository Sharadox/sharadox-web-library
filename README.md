# @sharadox/sharadox-web-library

Everything that makes sharadox.com Sharadox: its content in English and Portuguese, branded components, the Sharadox styles and design helpers, and the contact-form configuration. It is imported by [sharadox-web-application](https://github.com/Sharadox/sharadox-web-application), which keeps only routes and configuration.

Everything generic comes from the open-source Sharadox libraries, configured here:

| Need                                        | Library                                      |
| ------------------------------------------- | -------------------------------------------- |
| Languages, translations, language links     | `@sharadox/internationalization-web-library` |
| Metadata, structured data, share images     | `@sharadox/metadata-web-library`             |
| Styles (Black, White, System)               | `@sharadox/style-web-library`                |
| Cookie panel                                | `@sharadox/consent-web-library`              |
| Reveal, scroll-lit words, counters, marquee | `@sharadox/animation-web-library`            |
| Active section                              | `@sharadox/scroll-web-library`               |
| Spotlight, tilt                             | `@sharadox/pointer-web-library`              |
| Contact form action                         | `@sharadox/form-web-library`                 |
| The 3D globe                                | `@sharadox/globe-web-library`                |
| Utilities (`separate`, `classNames`…)       | `@sharadox/web-library`                      |

## What is here

- **`content/`:** all copy and settings, one topic per folder.
  - `locale`: `LOCALES`, built with `defineLocales`.
  - `style`: `STYLES`, with Black and White in the colour group; colours live only here.
  - `separator`: the Sharadox separator •.
  - `consent`, `contact`, `services`, `site`, `globe`, and so on.
- **`component/`:** the page's branded parts:
  - grid frame, `Cross` marks, navigation and footer
  - hero and its guides, service index, statement, the five service cells and their live visuals
  - the 3D touchpoint stack, capabilities sheet, process, contact, section indicator, style switch
  - Sharadox wrappers around the shared globe and cookie panel, structured data, share image
  - `Licence`: the licence page's body, rendered from the licence's Markdown
  - `NotFound`: the 404 screen, a giant 404 whose zero is the live globe, with the failed request and the way back (put `ServiceIndex base="/<locale>"` under it)
- **`action/send-contact`:** `sendContact(form, ip)`, the shared contact action set up for Sharadox ("Contact • Name (Company)" subjects, sent to contact@sharadox.com as "Sharadox Web Application").
- **`utility/`:** `separate()` (the Sharadox separator) and the share card's horizon dots.
- **`style/token`:** Sass helpers (`tint()`, `shade()`, `dashed()`, `on-scroll()`, `below()`) used by every component's styles.

## Use in the application

```tsx
import { Hero } from "@sharadox/sharadox-web-library/component/hero";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import { STYLES } from "@sharadox/sharadox-web-library/content/style";
```

- **Sass:** `@use "style/token" as *;` works once `node_modules/@sharadox/sharadox-web-library/distribution` is on the Sass load path (`@sharadox/next-js-configuration-web-library` does this).
- **Pages other than home:** pass `path` (for example `"/licence"`) to `Navigation` and `Footer`, so section links lead back to the home page and the language links stay on the page.
- **Licence page:** `<Licence locale={locale} markdown={…} />` with `LICENCA.md` for Portuguese and `LICENSE.md` for English; the footer links to `/<locale>/licence`.
- **Contact:** the application's server action reads the visitor's IP address and calls `sendContact(form, ip)`.

## Develop

- **Checks:** `pnpm verify` runs formatting, lint, type-check, tests at 100% coverage and the build (`library-build`).
- **How the tests run:** components render in a browser-like environment (`test-fixture/browser`), the whole page renders in both languages, and the contact email is checked against a local SMTP server.
- **Flow:** branches follow `<feature>.development` → `development` → `index`, and releases are `v<version>` tags on `index`.

## Licence

The source is public so anyone can read and verify it, but it is **not open source**. It's under the Licença Sharadox de Código Verificável, versão 0.1.0: the [Portuguese text](LICENCA.md) is binding, with an [English translation](LICENSE.md). The Sharadox name, brand and design are reserved.
