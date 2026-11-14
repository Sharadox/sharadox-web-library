import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { LOCALES } from "@sharadox/sharadox-web-library/content/locale";
import { StructuredData as JsonLinkedData } from "@sharadox/metadata-web-library/structured-data";
import { structuredDataGraph } from "@sharadox/metadata-web-library/structured-data-graph";
import { translate } from "@sharadox/internationalization-web-library/translate";
import type { StructuredDataProperties } from "@sharadox/sharadox-web-library/component/structured-data/type";
import { SLOGAN } from "@sharadox/sharadox-web-library/content/slogan";

/** JSON-LD for search engines: the Sharadox organization with its services, one per card, and the website. */
export function StructuredData({ locale }: StructuredDataProperties) {
  const data = structuredDataGraph(
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      slogan: translate(SLOGAN, locale),
      description: translate(SITE.description, locale),
      logo: `${SITE.url}/profile-picture.png`,
      address: { "@type": "PostalAddress", addressRegion: "Algarve", addressCountry: "PT" },
      areaServed: "Worldwide",
      knowsAbout: [
        "Branding",
        "Brand design",
        "Web development",
        "Web design",
        "Software platforms",
        "E-commerce",
        "Content management systems",
        "APIs",
        "Progressive web applications",
        "Cross-platform applications",
        "Social media strategy",
        "Lead generation",
        "Digital marketing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: translate(SERVICES.eyebrow, locale),
        itemListElement: SERVICES.items.flatMap((service) =>
          service.cards.map((card) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE.url}/${locale}#${card.key}`,
              name: translate(card.title, locale),
              description: translate(card.text, locale),
              serviceType: translate(service.title, locale),
              provider: { "@id": `${SITE.url}/#organization` },
              areaServed: "Worldwide",
            },
          })),
        ),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: `${SITE.url}/${locale}`,
      name: SITE.name,
      inLanguage: LOCALES.languageTag(locale),
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  );
  return <JsonLinkedData data={data} />;
}
