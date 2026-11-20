# Changelog

What changed in each version of `@sharadox/sharadox-web-library`, newest first.

## 0.53.2

The contact form's spam fields are form-web-library's `BotFields` instead of its own honeypot and fill-time field (same names, same hidden placement).

## 0.53.1

The tokens forward style-web-library's `style-helper` instead of defining $ease, below, tint, on-scroll and skip-entrance themselves; the compiled CSS is byte-identical. A site using these tokens needs `@sharadox/next-js-configuration-web-library` 0.3.0+ and `@sharadox/style-web-library` 0.3.0+ installed.

## 0.53.0

- `utility/sharadox-email` is `utility/branded-email` (`brandedEmail`, `brandedEmailImages`): the library's name no longer repeats inside it.
- Removed the deprecated `utility/separate` and `content/separator`: use `separated` and `SEPARATOR` from `@sharadox/web-library`.

## 0.52.0

Shared helpers instead of local copies: web-library separated (utility/separate is now a re-export, removed in 0.53) and twoDigits, animation-web-library EASE, scroll-web-library useScrolledPast (navigation), consent-web-library consentCopy and consentLabel (CONSENT holds only title, text and categories), form-web-library contactProblems and choice requests (contact-need wraps requestChoices), email-web-library subpaths and inlineImage

## 0.51.0

The open menu keeps the bar's hairline; footer legal links on phones center a last odd one; Button `id`; utility/project-anchor projectAnchor(key) ("see-<key>"): the card's See the Project button has it and the project page's Back to the Portfolio returns to it (scrolled to the middle of the screen)

## 0.50.0

The open phone menu runs from the top of the screen under the bar (one frosted surface; header gets `open`); ProjectPage end buttons centered

## 0.49.0

About feed keeps one height (its tallest tab; the log's oldest entries slip out under the bottom edge) and spans the card on phones (Feed className); style/object `float` mixin (the globe's float on translate/rotate, so it adds to transforms) used by the globe, the About feed and portfolio Screens; dashed mixin `$at`, hero shortcuts' row line dashed on phones; the LPD project is "Luis Pires Decor Website & Rebranding" (project.title; key luis-pires-decor-website-and-rebranding), headline "A craft of decades, now easy to find.", PORTFOLIO.pageTitle ("Sharadox Portfolio"), end title "See it live"; Chapter's live part runs the full page width; ContactForm phone is form-web-library PhoneField (CONTACT.country/search); email signature is just the site's address

## 0.48.0

Portfolio Screens keep the screenshot's proportions (no stretched window) and turn in depth under the pointer (pointer-web-library ^0.2.0 useParallax: scene rotation, phone nearer, glow against it, glass glare); the About feed leans towards the pointer with a soft light; the LPD project is "A lifelong craft, now easy to find." with copy about search engines and AI assistants; ProjectPage has an intro (page.intro: a few parts, explained, live), Chapter takes `points` and `detailsLabel` ("How it works"), five chapters (hero, sequence, fabric, work, booking; process gone), PORTFOLIO.page.demo for the demo form, and ends "See it live on <domain>" with the visit in a new tab; Button and every email or external link opens in a new tab (web-library ^0.8.0 newTab); footer networks centered on phones; animation-web-library ^0.2.4 lights the last scroll word fully

## 0.47.0

RenderSocialImage draws the new social images (metadata-web-library ^0.7.0): background.png (black alone) and email-card.png (the landscape headline at 256 by 144, in proportion, corners rounded)

## 0.46.0

Emails in Sharadox's own design: SHARADOX_EMAIL (content/email-design: black, the globe mark and name, a hairline, monospace capitals, dashed rules, a white pill, the grid frame with "+" corners; signature Algarve, Portugal · sharadox.com) for every email Sharadox sends, through sharadoxEmail(content) and sharadoxEmailImages() (utility/sharadox-email); the contact action uses it (form-web-library ^0.5.1, email-web-library ^0.4.0), its notice with a Reply button, its automatic reply with Visit sharadox.com; EMAIL_LOGO is the white globe on transparent, 60 px for 30

## 0.45.0

Portfolio without filters or sorting: each project shows its first screen on a computer and a phone (still), its launch day ("17 November 2026"), place, services (Luis Pires Decor adds Rebranding and Branding Design) and "See the Project" to /portfolio/<key>; title "Work that\nspeaks for itself." with its text under it (SectionHeading takes `text`; a title with a line break keeps it). ProjectPage (component/project-page): a project's own page in the grid frame (intro with story, details, chips and screens; numbered Chapters whose windows show the client website's own components live, given by the site as `chapters`; the visit link only at the end, and the way back); content/portfolio holds the story, chapters (hero, sequence, fabric, work, process, booking) and page labels

## 0.44.0

About: the statement is "From branding, websites, apps and marketing, to tailored systems that fully automate or drastically simplify your daily operations."; its panel plays only once in view (and starts over each time): a pointer (icon-web-library ^0.5.0 pointer) clicks through Activity (a log, newest on top, each entry a picture of the action with who did it or Automatic), Project (progress, a checklist it ticks, 68% to 72%, the budget) and Client (a paid-of-quoted ring, project bars, tasks done against to do), hovering details to show labels; all one job (Ana Sousa's kitchen at Villa Mar), figures consistent across tabs; with less motion asked for it rests on the full log (feed/script: playFeed, pause)

## 0.43.0

SOCIAL: Threads https://threads.com/@sharadoxcom, Pinterest without www, LinkedIn in lowercase, Google's mark links to the business profile (a share link, so not in sameAs); GOOGLE_REVIEW, the review form, is a text link after the complaints book in the footer's legal links

## 0.42.0

Portfolio (component/portfolio, content/portfolio, SECTION.portfolio #portfolio, in the navigation, indicator and footer after Capabilities): each project live on a computer and a phone, both scrolling slowly through the whole page (screens: {computer, phone} {src, width, height}, kept in the site's public/portfolio/<key>/), beside its number, launch month, client, headline, text, details and service chips (card keys, named by their chips); filters by service (chips), client and year (selects), sorted newest, oldest, client or project name (select-projects: filterOptions, selectProjects, serviceName); first project: Luis Pires Decor (website, hosting, professional email, PWA, 2026-11-17). Navigation switches to the menu below 1200px (was 1100px), so seven links fit

## 0.41.0

SOCIAL (content/site): Facebook, Instagram, TikTok, YouTube, X, Threads, Pinterest, LinkedIn and the Google review link; the footer's last line shows them as BrandIcon marks (icon-web-library ^0.4.0), one line down to 320 pixels; the profiles are the organization's sameAs in the structured data

## 0.40.0

Mobile: the capabilities' last item in each column has no dashed line over the column's solid bottom line (the empty cells are hidden there); after the contact form sends, its thank-you glides into view (scroll-web-library ^0.5.0 glideIntoView)

## 0.39.0

About is back to its 0.37 design (the 0.38 chapters were not kept), and its live panel has three tabs taking turns, ten seconds each: Activity (the feed), Project (a project in the business's own platform: progress, milestones, tasks done, quoted and paid) and Client (total spent, open quotes, projects so far); the business's own figures (ABOUT.business.feed.tabs/project/client), never Sharadox prices

## 0.38.0

About redesigned as two numbered chapters, each words then one picture: 01 Brand, five tiles drawn in CSS (identity, website, apps, social media, campaigns) with a line each (about/brand-parts); 02 Platforms, a flow read left to right (top to bottom on phones): your customers (order, book, pay) → your platform, lit (invoice, stock, customer notified, job sent) → your team on their phone (pack, load, visit), steps ticking off in turn with pulses running between lanes, and "You" under it all, live from anywhere (about/platform-flow). content/about rewritten (brand.parts, platform.lanes, platform.you); about/feed removed

## 0.37.0

Component/service-shortcut ServiceShortcut (number, name, kinds, chevron on hover, glow): the service index under the hero and the sticky capability column headings use the same shortcut. Dashed lines between the hero shortcuts and between capability columns; the footer's line under its columns is solid again. "Drag to explore" sits right under the globe body, clear of the shortcuts

## 0.36.0

Contact emails (form-web-library ^0.4.1): from "Sharadox Web Application" (CONTACT.sender "Sharadox"), subject "Sharadox Web Application · Contact · Name (Company)", the logo (content/email-logo EMAIL_LOGO, the app icon as base64 since 0.36.1) on black at the top, every detail, the message, then the form's page (hidden "page" field, location.href), language, time and IP; visitors who left an email get an automatic reply in English or Portuguese (CONTACT.acknowledgement) with their message, replying to which reaches contact@sharadox.com. Footer: the line between the columns and the legal row is dashed. Capabilities: solid lines between columns, and no dashed line over the sheet's bottom line

## 0.35.0

Component/social-image renderSocialImage({ locale, name }) (metadata-web-library ^0.6.0 SOCIAL_IMAGES: landscape 1920×1080 and portrait 1080×1920, each also with the headline): the mark on black (half the shorter side), with the headline the hero's three lines in Geist (the last fading) beside it (landscape) or under it (portrait); content/mark MARK_SVG and MARK_DATA_URL (the mark alone, edge to edge). Hero: the copy sits in the middle of the space between the bar and the hero's bottom line, and the globe is centered on it. Capabilities: the lines between columns run over the sticky headings. About: one row per half: the brand (what it is, then its five parts in a numbered row), then the business (what it is beside the live feed, its three promises in a row under both)

## 0.34.0

Section indicator mirrored, in the margin right of the frame (from just past its line to the window's edge): the rail along the line; per row a tick in a fixed 34px slot (so nothing shifts when the section changes), the number, and the name to the right, ending at the window's edge when it doesn't fit ("safe" alignment, right to left). Smaller name pills in a narrower margin (container query); no pills where even those can't fit (the link's title names it). Capabilities: column headings stick under the bar; shorter columns run on in empty ruled cells (hidden on phones). Footer: Back to top under the style switch; the legal row (centered) starts with the copyright; no bottom row. FAQ: the legal answer says every country has its own rules, and that we find out what's mandatory wherever the client does business

## 0.33.0

About: the platform is also for teams who work by hand. Its text covers the office to the warehouse floor, with jobs reaching people as tasks on their phone; the points are Automated, Your team and Anywhere. The feed mixes the platform's own events with people's ("John packed the order", "Mary loaded the van", shown by their initial) and is headed Live. The brand panel has its own Brand label. ServiceUnlisted is no longer inside Services: it's a section of its own (h2), placed by the page after the capabilities. New Faq (component/faq, content/faq, SECTION.faq "Questions", #faq): ten questions in native details that ease open, a sticky heading with Ask Us, and FAQPage JSON-LD rendered with it (only on the page that shows it). In navigation, indicator and footer. Always Included: domain, hosting and accounts taken care of (or in your name), and everything legal done as the law requires. The footer's legal row is centered. Eyebrow states its alignment (starts on the left). Page order: hero, service index, about, services, capabilities, unlisted, marquee, process, faq, contact

## 0.32.0

About (component/about, content/about) replaces Statement and Touchpoint ("One System", both removed): the sentence lighting up on scroll (your brand everywhere online, and the system that runs your business behind it), then the brand online (a numbered list) beside the platform that runs the business (automated, simple, anywhere) with a live feed ticking events in while the place it's viewed from changes. SECTION.about replaces SECTION.touchpoints in navigation, footer and indicator. Services title: "Pick where to start." Section ids: #about, #web, #desktop-and-mobile, #creative, #marketing (service group keys web and desktop-and-mobile). Capabilities: longer lists in every column (Web adds custom business management systems, AI search optimization, AI assistants and automations, payments, integrations, languages, analytics, domains and security, privacy and accessibility) and an Always Included row (icon-web-library ^0.3.0 check). Process: each dot lights when the line reaches it (process/measure-stops); on phones the line grows from the top. Hero leaves room for the service index on wide screens. Section indicator sits outside the frame's right line (ticks only under 1400px). Rebranding: a divider sways across one star, the dated version on its left, the reimagined one on its right. ServiceUnlisted title as big as a section heading. Footer legal row: the dispute notice, the links under it

## 0.31.0

One palette for every 3D object (style/object: surface(), $surface, $raised, $edge, $hint, $faint, $detail, $strong, $glow; face() is opaque; Cuboid faces opaque), so they match in Black and White. Hosting: only the rack (no tick). Branding: the brand's identity card filling in (mark, name, audience, voice, colors, type), then lifting. Rebranding: the dated badge turns and reshapes into the fresh diamond, and the change rolls out to a business card and an app icon. Branding Design: the pointer drags the top anchor of a round shape up into a drop. Platforms text: a system tailored to your company, automating as much as possible and simplifying the rest. PWA text: anything built for the web, installable like any other app (no stores or their fees, one codebase, updates everywhere at once, less to spend). Print Design is Printing (Print With Us); Product Launch Campaigns is Launch Campaigns (chip Launch Campaign). Contact: heading and direct email over a wide two-column form. Footer: four columns, a legal row, a bottom row with the copyright and Back to top. Components state their own alignment (the site centers boxes by default). consent-web-library ^0.3.1

## 0.30.0

Product Launch is in 3D: a round rocket (eight shaded panels, a nose cone of eight leaning panels, four fins, a window) turning slowly on a 3D pad, the flame as two crossed sheets, smoke rolling out all around the pad; the countdown floats in front. scroll-web-library ^0.4.2 (a glide never carries over to the next page)

## 0.29.0

Hosting's object is only the server rack (no uptime line): one server goes dark and comes back with a tick. Android's object looks like Android (camera hole, round icons, search bar, three buttons, the quick settings shade sliding down and its toggles switching on); iOS's like an iPhone (Dynamic Island opening into a live activity, rounded-square icons that jiggle, page dots, dock, home bar). Product Launch is a 3-2-1 countdown, each number flowing smoothly into the next inside a ring that runs out, then a rocket lifts off with flame, smoke and a trail

## 0.28.0

Web adds Hosting before Professional Emails (we host what we build, look after it and bring it back up if anything goes wrong; object: a server rack watched by an uptime line, one server has an incident, goes dark, and comes back with a tick); Web is now three cards over two. Desktop & Mobile brings back Android Applications and iOS Applications after the PWA (three cards in a row; the PWA card is short like the others, without its points; lead "Apps for every screen."). New Product Launch object: a campaign timeline lighting step by step (teaser, landing page, campaign, launch day with the product revealed and confetti). ServiceCard has no `wide` or `points` any more. 18 cards in all

## 0.27.0

New objects: Platforms (a company's people around one system, joined to it by lines; messages travel from person to person through it, its gear turning and its tasks ticking off; text: your company's way of working, made digital), Product Launch (a countdown over a covered product, then the cover lifts, the product rises into the light and sparks fly), Brand Awareness (a billboard, then word of mouth spreads the brand's mark through a crowd until everyone thinks of it together). Shared Person and Mark pieces (component/service-object/person, /mark); Branding uses Mark. animation-web-library ^0.2.3 (the marquee glides sideways). The 0.26.0 note above said 16 cards: there are 15

## 0.26.0

Services renamed Web, Desktop & Mobile, Creative and Marketing. Web drops CMS and APIs and adds Professional Emails (object: an envelope opening behind an address that changes name, always @yourdomain.com); Platforms reads as your company's own system. Creative brings Merchandise back (designed by us, made by trusted partners) and every description is short, like the web ones; new objects: Branding (pieces of the brand settle on a board, then its mark rises), Rebranding (a divider sweeps the dated mark into the fresh one), Branding Design (a pointer drags a vector anchor and its handles, SVG with a still copy for reduced motion). Marketing cards are named campaigns (Product Launch, Lead Generation, Sales Generation, Brand Awareness Campaigns). "Didn't find the service you were looking for?"; 15 cards in all

## 0.25.0

Creative Services descriptions rewritten in plain words (branding, rebranding, branding design, print design); a group of two cards shares a row in halves and four make two rows of two, so no row is left half empty

## 0.24.0

Merchandise removed from Creative Services (15 cards); internal links are Next.js links (SectionLink from scroll-web-library for sections, including the menu's animated ones, service index, section indicator, capabilities and footer; Link for the wordmark, license and privacy; Button picks for itself); email stays a plain <a>

## 0.23.0

Footer in four columns only: the legal links, the consumer dispute notice and the copyright sit under the brand (behind a dashed line, at the foot of the column), and Back to top under the style switch, level with the copyright; the separate legal row is gone

## 0.22.0

Creative Services adds Print Design (business cards, flyers, brochures, menus, posters, stickers; object: a business card flipping off its stack in front of a flyer) and Merchandise (T-shirts, hoodies, caps, bottles, mugs, tote bags; object: a branded T-shirt beside a turning bottle), each with its contact choice; 16 cards in all

## 0.21.0

Services: Web Applications adds Content Management Systems (CMS) and APIs; Mobile Applications becomes Desktop and Mobile Applications with one PWA card (wide, numbered points: no store in between, one codebase for every platform, less to pay and wait; its object sends one codebase to a computer, a tablet and a phone); Creative becomes Creative Services with plain-language descriptions of branding, branding design and rebranding; Marketing becomes Marketing Campaigns; a new social media object (feed, likes, posting calendar, followers chart); new CMS and API objects; ServiceUnlisted ("Didn't find what you were looking for?", ticks "not-listed"). Contact form: phone field under email (email or phone or both), chips "I don't know what I need" and "What I need is not listed" replace "Others", checks before sending (utility/contact-problem: name, email or phone, a choice, 20+ characters) with messages under each field; sendContact applies the same rules (form-web-library 0.3.0: requireChoice, minimumMessageLength) and the daily cap of 50 emails. Footer: the legal row sits on the same columns as above (copyright, links and dispute notice, Back to top), without the Legal label or dots. Organization logo is /profile-picture.png

## 0.20.1

Same as 0.20.0, published again (0.20.0's npm publish failed at the provenance log)

## 0.20.0

"What we do" is now Services: four groups (Web Applications: websites, platforms, e-commerce; Mobile Applications: Android, iOS, PWAs; Creative: branding, rebranding, branding design; Marketing: product launches, lead generation, sales generation, brand awareness, social media growth strategy) of cards, each with its own animated CSS 3D object (component/service-object, Cuboid primitive, style/object helpers) that turns towards the pointer (useTilt on the card), a description and a button that ticks its contact choice; contact chips grouped by service (component/contact/form/chip); service-action, services/cell and the old visuals removed; footer: no big wordmark, Start a Project is a solid button, everything legal in one section (title, copyright, links, dispute notice, Back to top); the process line fills as you scroll on phones too (--drawn); ServiceIndex has four cells and a chevron icon; structured data offers one service per card

## 0.19.0

The globe floats (slow rise, fall and sway; still with reduced motion), in the hero and the 404; footer reorganized (brand, services, studio with Start a Project, language and style; wordmark; a bar with license, privacy, cookie preferences, complaints book and Back to top; copyright beside the dispute notice); the phone menu uses @sharadox/menu-web-library (any tap on a link or button in the bar or menu closes it, the logo included)

## 0.18.0

Navigation links include One System (touchpoints); below 1100px a menu button opens the links and Start a Project under the bar, in the bar's frosted background, scrolling when it doesn't fit (Escape, a link or a wider screen closes it); footer Studio column adds One System and Start a Project

## 0.17.0

Component/consent Consent back (consent-web-library 0.3, required only: Got It and Details); footer: Cookie Preferences, Livro de Reclamações link and the CIMAAL consumer dispute notice (legal-web-library); privacy policy mentions the consent record

## 0.16.0

Chevron icons from @sharadox/icon-web-library replace every text arrow (button, footer Back to top, 404)
