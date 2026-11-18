import { SERVICES } from "@sharadox/sharadox-web-library/content/services";
import type { Locale } from "@sharadox/sharadox-web-library/content/locale/type";
import type { Project, ProjectChoice } from "@sharadox/sharadox-web-library/component/portfolio/select-projects/type";

/** Every service card's key and chip name. */
const CARDS: readonly { key: string; chip: { en: string; pt: string } }[] = SERVICES.items.flatMap((group) =>
  group.cards.map(({ key, chip }) => ({ key, chip })),
);

/** A service card key's short name, as its chip says it ("Website", "Alojamento"). */
export const serviceName = (key: string, locale: Locale) => CARDS.find((card) => card.key === key)?.chip[locale] ?? key;

/** The year a project went live. */
export const yearOf = (project: Project) => project.date.slice(0, 4);

/** What there is to filter by, in the services' own order, clients A to Z, and years newest first. */
export function filterOptions(projects: readonly Project[]) {
  const used = new Set(projects.flatMap((project) => project.services as readonly string[]));
  return {
    services: CARDS.map((card) => card.key).filter((key) => used.has(key)),
    clients: [...new Set(projects.map((project) => project.client))].sort((a, b) => a.localeCompare(b)),
    years: [...new Set(projects.map(yearOf))].sort().reverse(),
  };
}

/** The projects the visitor's filters keep, in the order they picked. */
export function selectProjects(projects: readonly Project[], choice: ProjectChoice, locale: Locale) {
  const kept = projects.filter(
    (project) =>
      (!choice.service || (project.services as readonly string[]).includes(choice.service)) &&
      (!choice.client || project.client === choice.client) &&
      (!choice.year || yearOf(project) === choice.year),
  );
  const order: Record<ProjectChoice["sort"], (a: Project, b: Project) => number> = {
    newest: (a, b) => b.date.localeCompare(a.date),
    oldest: (a, b) => a.date.localeCompare(b.date),
    client: (a, b) => a.client.localeCompare(b.client, locale),
    name: (a, b) => a.name[locale].localeCompare(b.name[locale], locale),
  };
  return [...kept].sort(order[choice.sort]);
}
