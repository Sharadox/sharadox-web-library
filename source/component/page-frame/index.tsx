import { Cursor } from "@sharadox/pointer-web-library/cursor";
import { Consent } from "@sharadox/sharadox-web-library/component/consent";
import { Footer } from "@sharadox/sharadox-web-library/component/footer";
import { Navigation } from "@sharadox/sharadox-web-library/component/navigation";
import type { PageFrameProperties } from "@sharadox/sharadox-web-library/component/page-frame/type";

/**
 * Everything around a page of the Sharadox site, the same on every page: the navigation, the page's content in
 * `<main>` and the footer, with the site-wide behavior around them. Page-specific pieces go in `before`, `aside` and
 * `after`.
 *
 * @example
 * <PageFrame locale={locale} path={PRIVACY_PATH}><PrivacyPage locale={locale} /></PageFrame>
 */
export function PageFrame({ locale, path, before, aside, after, children }: PageFrameProperties) {
  return (
    <>
      <Cursor />
      {before}
      <Navigation locale={locale} path={path} />
      {aside}
      <main>{children}</main>
      <Footer locale={locale} path={path} />
      {after}
      <Consent locale={locale} />
    </>
  );
}
