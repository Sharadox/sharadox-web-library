import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@sharadox/icon-web-library/icon";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { ABOUT } from "@sharadox/sharadox-web-library/content/about";
import styles from "./index.module.scss";
import type { ActivityProperties } from "@sharadox/sharadox-web-library/component/about/feed/activity/type";

const { feed } = ABOUT.business;
const EASE = [0.22, 1, 0.36, 1] as const;

/** A person's initials: "Ana Sousa" is "AS", "Rui" is "R". */
const initials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("");

/**
 * The activity log: entries arrive at the top one by one and push the others down. Each shows what happened as a
 * picture (approved, paid, ordered, delivered, installed) beside the words, and who did it: their initials, or a bolt
 * for what the platform did on its own.
 */
export function Activity({ locale, shown }: ActivityProperties) {
  const entries = feed.events.slice(0, shown).map((event, index) => ({ event, index }));
  return (
    <ol className={styles.log}>
      <AnimatePresence initial={false}>
        {entries.reverse().map(({ event, index }) => (
          <motion.li
            key={event.en}
            layout
            data-target={`event-${index}`}
            data-kind={event.icon}
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className={styles.picture}>
              <Icon name={event.icon} />
            </span>
            <span className={styles.words}>
              <span>{event[locale]}</span>
              <span className={styles.who}>
                {"by" in event ? (
                  <>
                    <i className={styles.avatar}>{initials(event.by)}</i>
                    {event.by}
                  </>
                ) : (
                  <>
                    <i className={styles.automatic}>
                      <Icon name="bolt" />
                    </i>
                    {translate(feed.automatic, locale)}
                  </>
                )}
              </span>
            </span>
            <time className="monospace">{event.time}</time>
          </motion.li>
        ))}
      </AnimatePresence>
    </ol>
  );
}
