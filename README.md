# @sharadox/sharadox-web-library

Everything sharadox.com is made of — content, components (hero with the interactive globe, services, process, contact, navigation, footer…), the contact action and the design tokens — imported by [sharadox-web-application](https://github.com/Sharadox/sharadox-web-application), which keeps only its routes, global styles and configuration.

Generic pieces come from [`@sharadox/web-library`](https://github.com/Sharadox/web-library) and email from [`@sharadox/email-web-library`](https://github.com/Sharadox/email-web-library).

## Use in the application

- Components: `import { Hero } from "@sharadox/sharadox-web-library/component/hero"`.
- Contact: the application's server action reads the visitor's ip address and calls `sendContact(form, ip)` from `action/send-contact`; `<Contact action={…} />` receives that action.
- Design tokens in Sass: add `node_modules/@sharadox/sharadox-web-library/distribution` to the Sass load path, then `@use "style/token" as *;`.

## Licence

The source is public so anyone can read and verify it, but it is **not open source**: Licença Sharadox de Código Verificável, versão 0.1.0 — [português](LICENCA.md) (the binding text) · [English translation](LICENSE.md). The Sharadox name, brand and design are reserved.
