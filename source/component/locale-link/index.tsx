"use client";
import Link from "next/link";
import { rememberLocale } from "@sharadox/web-library/internationalization/locale-preference";
import type { LocaleLinkProperties } from "@sharadox/sharadox-web-library/component/locale-link/type";

/** A link to the site in another language that remembers the choice, so sharadox.com opens in it next time. */
export function LocaleLink({ locale, current, children }: LocaleLinkProperties) {
  return (
    <Link
      href={`/${locale}`}
      hrefLang={locale}
      aria-current={current ? "true" : undefined}
      onClick={() => rememberLocale(locale)}
    >
      {children}
    </Link>
  );
}
