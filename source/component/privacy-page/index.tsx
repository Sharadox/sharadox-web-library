import { translate } from "@sharadox/internationalization-web-library/translate";
import { privacyPolicy } from "@sharadox/privacy-web-library/privacy-policy";
import { PrivacyPolicyView } from "@sharadox/privacy-web-library/privacy-policy-view";
import { Eyebrow } from "@sharadox/sharadox-web-library/component/eyebrow";
import { Section } from "@sharadox/sharadox-web-library/component/section";
import { PRIVACY, PRIVACY_PAGE } from "@sharadox/sharadox-web-library/content/privacy";
import styles from "./index.module.scss";
import type { PrivacyPageProperties } from "@sharadox/sharadox-web-library/component/privacy-page/type";

/** The privacy policy page's body, in the grid frame: eyebrow, title, then the policy set for reading. */
export function PrivacyPage({ locale }: PrivacyPageProperties) {
  const policy = privacyPolicy(PRIVACY, locale);
  return (
    <Section className={styles.page}>
      <Eyebrow>{translate(PRIVACY_PAGE.eyebrow, locale)}</Eyebrow>
      <h1 className={styles.title}>{policy.title}</h1>
      <PrivacyPolicyView policy={policy} className={styles.text} />
    </Section>
  );
}
