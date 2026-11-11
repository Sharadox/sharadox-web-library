"use client";
import { classNames } from "@sharadox/web-library/class-name";
import { useInView } from "@sharadox/animation-web-library/in-view";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Stage } from "@sharadox/sharadox-web-library/component/services/campaign-visual/stage";
import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import styles from "./index.module.scss";
import type { CampaignVisualProperties } from "@sharadox/sharadox-web-library/component/services/campaign-visual/type";

const STAGES = [
  { key: "reach", value: 48200 },
  { key: "clicks", value: 3140 },
  { key: "customers", value: 214 },
] as const;

/** A campaign funnel as stacked 3D plates, narrowing from reach to customers, with live counters. */
export function CampaignVisual({ locale }: CampaignVisualProperties) {
  const [container, on] = useInView<HTMLDivElement>();
  return (
    <div ref={container} className={classNames(styles.visual, on && styles.on)} aria-hidden>
      <div className={styles.scene}>
        {STAGES.map((stage, index) => (
          <span key={stage.key} className={`${styles.plate} ${styles[`plate${index}`]}`} />
        ))}
        <span className={styles.ring} />
      </div>
      <dl className={styles.legend}>
        {STAGES.map((stage, index) => (
          <Stage
            key={stage.key}
            start={on}
            value={stage.value}
            durationMilliseconds={1800 + index * 300}
            locale={locale}
            label={translate(SERVICES.visual[stage.key], locale)}
          />
        ))}
      </dl>
    </div>
  );
}
