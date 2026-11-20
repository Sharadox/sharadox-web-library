import type { Metadata } from "next";
import { pageMetadata } from "@sharadox/metadata-web-library/page-metadata";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import type { SiteMetadataOptions } from "@sharadox/sharadox-web-library/utility/site-metadata/type";

/**
 * A page's metadata for the Sharadox site: its title (the site's name follows it), description, address in every
 * language and share image; the rest is the site's own.
 *
 * @example
 * export const generateMetadata = async ({ params }) =>
 *   siteMetadata({ locale: (await params).locale, path: PRIVACY_PATH, title: "Privacy Policy", description: "…" });
 */
export function siteMetadata({ locale, path, title, description }: SiteMetadataOptions): Metadata {
  return pageMetadata({
    name: SITE.name,
    url: SITE.url,
    locales: LOCALES,
    locale,
    path,
    title,
    description,
    image: { path: `/${locale}/opengraph-image`, alt: SITE.name },
  });
}
