"use client";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Button } from "@sharadox/sharadox-web-library/component/button";
import { SECTION } from "@sharadox/sharadox-web-library/content/section";
import { requestContactNeeds } from "@sharadox/sharadox-web-library/utility/contact-need";
import styles from "./index.module.scss";
import type { ServiceActionsProperties } from "@sharadox/sharadox-web-library/component/service-action/type";

/**
 * A service card's calls to action: each scrolls to the contact form and ticks its choice there. The first is solid,
 * the others outlined.
 *
 * @example
 * <ServiceActions locale="en" actions={[{ need: "website", label: { en: "Get a Website", pt: "Pedir um Website" } }]} />
 */
export function ServiceActions({ locale, actions }: ServiceActionsProperties) {
  return (
    <div className={styles.actions}>
      {actions.map((action, index) => (
        <Button
          key={action.need}
          href={`#${SECTION.contact.id}`}
          size="small"
          variant={index === 0 ? "solid" : "ghost"}
          arrow={index === 0}
          onClick={() => requestContactNeeds([action.need])}
        >
          {translate(action.label, locale)}
        </Button>
      ))}
    </div>
  );
}
