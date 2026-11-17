# @sharadox/sharadox-web-library

Everything that makes sharadox.com Sharadox: its content in English and Portuguese, branded components, the Sharadox styles and design helpers, and the contact-form configuration. It is imported by [sharadox-web-application](https://github.com/Sharadox/sharadox-web-application), which keeps only routes and configuration.

Everything generic comes from the open-source Sharadox libraries, configured here:

| Need                                        | Library                                      |
| ------------------------------------------- | -------------------------------------------- |
| Languages, translations, language links     | `@sharadox/internationalization-web-library` |
| Metadata, structured data, share images     | `@sharadox/metadata-web-library`             |
| Styles (Black, White, System)               | `@sharadox/style-web-library`                |
| Cookie panel                                | `@sharadox/consent-web-library`              |
| Phone menu behavior                         | `@sharadox/menu-web-library`                 |
| Complaints book, consumer dispute notice    | `@sharadox/legal-web-library`                |
| Reveal, scroll-lit words, counters, marquee | `@sharadox/animation-web-library`            |
| Active section                              | `@sharadox/scroll-web-library`               |
| Spotlight, tilt                             | `@sharadox/pointer-web-library`              |
| Contact form action                         | `@sharadox/form-web-library`                 |
| The 3D globe                                | `@sharadox/globe-web-library`                |
| Utilities (`separate`, `classNames`…)       | `@sharadox/web-library`                      |

## What is here

- **`content/`:** all copy and settings, one topic per folder.
  - `locale`: `LOCALES`, built with `defineLocales`.
  - `style`: `STYLES`, with Black and White in the color group; colors live only here.
  - `separator`: the Sharadox separator ·.
  - `slogan`: `SLOGAN` (one sentence, always with its full stop) and `SLOGAN_LINES` (the hero's lines, the single source of its words).
  - `section`: `SECTION`, each home-page section's id and name, used by navigation, footer, section indicator and headings.
  - `action`: shared calls to action (`ACTION.startProject`).
  - `language`: `LANGUAGE`, the switches' label and each language's own name.
  - `consent`: the cookie panel's one category (required: language and style), so it only tells, with Got It and Details.
  - `contact`, `services`, `site`, `globe`, and so on.
- **One source for shared copy:** text used in more than one place lives in its own content module and is imported, never retyped.
- **`component/`:** the page's branded parts:
  - grid frame, `Cross` marks, navigation (below 1100px its links open in a menu under the bar, in the bar's frosted background, scrolling when it doesn't fit, as on a phone held sideways) and footer (the brand with Start a Project, the services, the studio, the language and style; with Back to top under the style switch; then a centered row of everything legal: the copyright, the dispute notice, the links)
  - hero and its guides (on wide screens a little shorter than the screen, so the service index shows at its bottom; the copy in the middle of the space under the bar, the globe centered on it), service index, `About` (a sentence lighting up as it scrolls, then the brand online beside the platform that runs the business, with its live feed), and Services: four groups of cards (Web, Desktop & Mobile, Creative, Marketing), each card with its own animated 3D object (`service-object`, in CSS 3D, turning towards the pointer), a description and a button that starts that project; rows of three, with a row of two (or two rows of two) when the count needs it; `ServiceUnlisted`, the invitation for ideas none of them name, is a section of its own placed after the capabilities
  - capabilities sheet (its column headings stay in view under the bar, and shorter columns run on in empty ruled cells; with what's always included under it), `Faq` (questions that open to their answers, native `details`, with their FAQPage structured data), process (each dot lights as the line reaches it, measured by `process/measure-stops`), contact (the invitation and the direct email over a wide form: the visitor's details, the message and Send on the left, the choices on the right), section indicator (in the margin right of the frame: the rail along the line, ticks and numbers out from it, names to the right, ending at the window's edge when there isn't room; nothing shifts when the section changes; ticks only where the margin is narrow), style switch
  - `Consent`, the Sharadox cookie panel (reopened by the footer's Cookie Preferences), and the footer's legal parts: Portugal's complaints book and the Algarve's consumer dispute notice (CIMAAL)
  - the Sharadox wrapper around the shared globe, structured data, share image, `renderSocialImage()` (images to post on social media: the mark on black, landscape and portrait, alone or with the hero's three lines; the application serves them at `/<locale>/social/<name>`), `llmsText()` for `/llms.txt`
  - `PrivacyPage`: the privacy policy's body (`content/privacy`, written by `@sharadox/privacy-web-library`), at `/<locale>/privacy`, linked from the footer
  - `License`: the license page's body, rendered from the license's Markdown
  - `NotFound`: the 404 screen, a giant 404 whose zero is the live globe, with the failed request and the way back (put `ServiceIndex base="/<locale>"` under it)
- **Service card buttons:** each card's button scrolls to the contact form and ticks that card's choice (`requestContactNeeds`, the card's `key` in `content/services`), which glows for a moment. The form's choices come from the same cards, grouped like the services, then Something Else ("I don't know what I need", "What I need is not listed", which the invitation after the services ticks).
- **Contact form checks:** it needs a name, an email or a phone (or both, each valid), at least one choice and a message of at least 20 characters (`utility/contact-problem`, the same rules the server applies). It says what's missing under each field before anything is sent.
- **`action/send-contact`:** `sendContact(form, ip)`, the shared contact action set up for Sharadox ("Contact · Name (Company)" subjects, sent to contact@sharadox.com as "Sharadox Web Application"), with the form's rules, 5 messages an hour per address and 50 emails a day from everyone together, so a flood can't run up the email bill.
- **`utility/`:** `separate()` (the Sharadox separator), `contactProblems()` (what the contact form still lacks), `requestContactNeeds()` and the share card's horizon dots.
- **`style/token`:** Sass helpers (`tint()`, `shade()`, `dashed()`, `on-scroll()`, `below()`, `skip-entrance()`) used by every component's styles. `skip-entrance` marks a time-based entrance animation so it shows its final state at once after a language switch.
- **`style/object`:** the 3D objects' helpers (`centered()`, `face()`, `loop()`) and their one palette, so every object reads alike in every style: opaque surfaces (`surface()`, `$surface`, `$raised`) with one hairline `$edge`, and details by role (`$hint`, `$faint`, `$detail`, `$strong`, `$glow`); the point of the moment is the full foreground color.
- **Centered by default:** sharadox-web-application's global styles start every box centered (text, free space on both axes, items across the line). Components state any other alignment (left text, items starting on the left, stretched columns), so they look the same whether or not the default is there.
- **Language switch:** the page is rebuilt in place without replaying entrances (hero, 404, guides, service row and visuals), the globe keeps turning from where it was, and changed text animates (the application adds `LocaleTransitionStyle` in `<head>`).

## Use in the application

```tsx
import { Hero } from "@sharadox/sharadox-web-library/component/hero";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import { STYLES } from "@sharadox/sharadox-web-library/content/style";
```

- **Sass:** `@use "style/token" as *;` works once `node_modules/@sharadox/sharadox-web-library/distribution` is on the Sass load path (`@sharadox/next-js-configuration-web-library` does this).
- **Pages other than home:** pass `path` (for example `"/license"`) to `Navigation` and `Footer`, so section links lead back to the home page and the language links stay on the page.
- **License page:** `<License locale={locale} markdown={…} />` with `LICENCA.md` for Portuguese and `LICENSE.md` for English; the footer links to `/<locale>/license`.
- **Contact:** the application's server action reads the visitor's IP address and calls `sendContact(form, ip)`.

## Develop

- **Checks:** `pnpm verify` runs formatting, lint, type-check, tests at 100% coverage and the build (`library-build`).
- **How the tests run:** components render in a browser-like environment (`test-fixture/browser`), the whole page renders in both languages, and the contact email is checked against a local SMTP server.
- **Flow:** branches follow `<feature>.development` → `development` → `index`, and releases are `v<version>` tags on `index`.

## License

The source is public so anyone can read and verify it, but it is **not open source**. It's under the Licença Sharadox de Código Verificável, versão 0.1.0: the [Portuguese text](LICENCA.md) is binding, with an [English translation](LICENSE.md). The Sharadox name, brand and design are reserved.
