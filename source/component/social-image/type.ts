import type { SocialImageName } from "@sharadox/metadata-web-library/social-image";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";

export interface SocialImageOptions {
  locale: Locale;
  /** Which image: landscape or portrait, with or without the headline (see `SOCIAL_IMAGES`). */
  name: SocialImageName;
}
