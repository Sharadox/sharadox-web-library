import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import { SITE } from "@sharadox/sharadox-web-library/content/site";
import { languageTag } from "@sharadox/web-library/internationalization/locale";
import { StructuredData as JsonLinkedData } from "@sharadox/web-library/search-engine/structured-data";
import { translate } from "@sharadox/web-library/internationalization/translate";
import type { StructuredDataProperties } from "@sharadox/sharadox-web-library/component/structured-data/type";

/** JSON-LD for search engines: the Sharadox organization with its five services, and the website. */
export function StructuredData({ locale }: StructuredDataProperties) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        slogan: translate(SITE.slogan, locale),
        description: translate(SITE.description, locale),
        logo: `${SITE.url}/icon.svg`,
        address: { "@type": "PostalAddress", addressRegion: "Algarve", addressCountry: "PT" },
        areaServed: "Worldwide",
        knowsAbout: [
          "Brand management",
          "Graphic design",
          "Web development",
          "Web design",
          "Software platforms",
          "Mobile applications",
          "Social media management",
          "Digital marketing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: translate(SERVICES.eyebrow, locale),
          itemListElement: SERVICES.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE.url}/${locale}#${service.key}`,
              name: translate(service.title, locale),
              description: translate(service.text, locale),
              serviceType: service.kinds[locale].join(", "),
              provider: { "@id": `${SITE.url}/#organization` },
              areaServed: "Worldwide",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/${locale}`,
        name: SITE.name,
        inLanguage: languageTag(locale),
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };
  return <JsonLinkedData data={data} />;
}
