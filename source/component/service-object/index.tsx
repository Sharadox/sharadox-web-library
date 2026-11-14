import type { ComponentType } from "react";
import { ApplicationProgrammingInterface } from "@sharadox/sharadox-web-library/component/service-object/application-programming-interface";
import { BrandAwareness } from "@sharadox/sharadox-web-library/component/service-object/brand-awareness";
import { Branding } from "@sharadox/sharadox-web-library/component/service-object/branding";
import { BrandingDesign } from "@sharadox/sharadox-web-library/component/service-object/branding-design";
import { ContentManagementSystem } from "@sharadox/sharadox-web-library/component/service-object/content-management-system";
import { ECommerce } from "@sharadox/sharadox-web-library/component/service-object/e-commerce";
import { LeadGeneration } from "@sharadox/sharadox-web-library/component/service-object/lead-generation";
import { Platform } from "@sharadox/sharadox-web-library/component/service-object/platform";
import { Merchandise } from "@sharadox/sharadox-web-library/component/service-object/merchandise";
import { PrintDesign } from "@sharadox/sharadox-web-library/component/service-object/print-design";
import { ProductLaunch } from "@sharadox/sharadox-web-library/component/service-object/product-launch";
import { ProgressiveWebApplication } from "@sharadox/sharadox-web-library/component/service-object/progressive-web-application";
import { Rebranding } from "@sharadox/sharadox-web-library/component/service-object/rebranding";
import { SalesGeneration } from "@sharadox/sharadox-web-library/component/service-object/sales-generation";
import { SocialMediaStrategy } from "@sharadox/sharadox-web-library/component/service-object/social-media-strategy";
import { Website } from "@sharadox/sharadox-web-library/component/service-object/website";
import type { ServiceCardKey } from "@sharadox/sharadox-web-library/content/services";
import styles from "./index.module.scss";
import type { ServiceObjectProperties } from "@sharadox/sharadox-web-library/component/service-object/type";

/** Each service card's own object. */
const OBJECTS: Record<ServiceCardKey, ComponentType> = {
  website: Website,
  platform: Platform,
  "e-commerce": ECommerce,
  "content-management-system": ContentManagementSystem,
  "application-programming-interface": ApplicationProgrammingInterface,
  "progressive-web-application": ProgressiveWebApplication,
  branding: Branding,
  rebranding: Rebranding,
  "branding-design": BrandingDesign,
  "print-design": PrintDesign,
  merchandise: Merchandise,
  "product-launch": ProductLaunch,
  "lead-generation": LeadGeneration,
  "sales-generation": SalesGeneration,
  "brand-awareness": BrandAwareness,
  "social-media-strategy": SocialMediaStrategy,
};

/**
 * A service card's animated 3D object, in CSS 3D and the style's colors. It turns towards the pointer through the
 * `--tilt-x` and `--tilt-y` its card sets (`useTilt`), on top of its own animation, which holds still with reduced motion.
 *
 * @example
 * <ServiceObject kind="website" />
 */
export function ServiceObject({ kind }: ServiceObjectProperties) {
  const Shape = OBJECTS[kind];
  return (
    <div className={styles.stage} aria-hidden>
      <div className={styles.view}>
        <Shape />
      </div>
    </div>
  );
}
