"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Icon } from "@sharadox/icon-web-library/icon";
import { translate } from "@sharadox/internationalization-web-library/translate";
import { Project } from "@sharadox/sharadox-web-library/component/portfolio/project";
import {
  filterOptions,
  selectProjects,
  serviceName,
} from "@sharadox/sharadox-web-library/component/portfolio/select-projects";
import { PORTFOLIO } from "@sharadox/sharadox-web-library/content/portfolio";
import styles from "./index.module.scss";
import type { BrowserProperties } from "@sharadox/sharadox-web-library/component/portfolio/browser/type";
import type { ProjectChoice } from "@sharadox/sharadox-web-library/component/portfolio/select-projects/type";

const OPTIONS = filterOptions(PORTFOLIO.projects);
const EVERYTHING: ProjectChoice = { service: "", client: "", year: "", sort: "newest" };
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The projects with their controls: service chips, then client, year and order. The list follows at once, projects
 * moving into their new places, and says how many it shows; when none match, it offers to show them all.
 */
export function Browser({ locale }: BrowserProperties) {
  const [choice, setChoice] = useState(EVERYTHING);
  const pick = (change: Partial<ProjectChoice>) => setChoice((current) => ({ ...current, ...change }));
  const projects = selectProjects(PORTFOLIO.projects, choice, locale);
  const { filters } = PORTFOLIO;
  const [one, many] = PORTFOLIO.count[locale];
  return (
    <>
      <div role="group" aria-label={translate(filters.label, locale)} className={styles.controls}>
        <div role="group" aria-label={translate(filters.service, locale)} className={styles.chips}>
          {["", ...OPTIONS.services].map((service) => (
            <button
              key={service || "all"}
              type="button"
              aria-pressed={choice.service === service}
              onClick={() => pick({ service })}
            >
              {service ? serviceName(service, locale) : translate(filters.allServices, locale)}
            </button>
          ))}
        </div>
        <div className={styles.selects}>
          <label>
            <span className="monospace">{translate(filters.client, locale)}</span>
            <span className={styles.field}>
              <select value={choice.client} onChange={(event) => pick({ client: event.target.value })}>
                <option value="">{translate(filters.allClients, locale)}</option>
                {OPTIONS.clients.map((client) => (
                  <option key={client}>{client}</option>
                ))}
              </select>
              <Icon name="chevron-down" strokeWidth={1.8} />
            </span>
          </label>
          <label>
            <span className="monospace">{translate(filters.year, locale)}</span>
            <span className={styles.field}>
              <select value={choice.year} onChange={(event) => pick({ year: event.target.value })}>
                <option value="">{translate(filters.allYears, locale)}</option>
                {OPTIONS.years.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
              <Icon name="chevron-down" strokeWidth={1.8} />
            </span>
          </label>
          <label>
            <span className="monospace">{translate(filters.sort, locale)}</span>
            <span className={styles.field}>
              <select
                value={choice.sort}
                onChange={(event) => pick({ sort: event.target.value as ProjectChoice["sort"] })}
              >
                {PORTFOLIO.sorts.map((sort) => (
                  <option key={sort.key} value={sort.key}>
                    {sort[locale]}
                  </option>
                ))}
              </select>
              <Icon name="chevron-down" strokeWidth={1.8} />
            </span>
          </label>
        </div>
        <p className={`monospace ${styles.count}`} aria-live="polite">
          {projects.length} {projects.length === 1 ? one : many}
        </p>
      </div>
      <div className={styles.list}>
        <AnimatePresence initial={false} mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Project project={project} index={index} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
        {projects.length === 0 && (
          <div className={styles.empty}>
            <p>{translate(PORTFOLIO.empty, locale)}</p>
            <button type="button" onClick={() => setChoice(EVERYTHING)}>
              {translate(PORTFOLIO.reset, locale)}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
