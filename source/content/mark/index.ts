/**
 * The Sharadox mark alone (a globe: its outline, one meridian and the equator), white and grey on transparent,
 * filling its square edge to edge (the outline's stroke included). The site's app icon master (src/app/icon.svg) draws
 * the same mark, half its side, on black; social images draw it from here.
 */
export const MARK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="128 128 256 256">' +
  '<circle cx="256" cy="256" r="117" fill="none" stroke="#fff" stroke-width="22"/>' +
  '<ellipse cx="256" cy="256" rx="51.6" ry="117" fill="none" stroke="#bfbfbf" stroke-width="16.5"/>' +
  '<path d="M142 256h228" stroke="#bfbfbf" stroke-width="16.5"/></svg>';

/** The mark as a data address, for images drawn from JSX (social and share images). */
export const MARK_DATA_URL = `data:image/svg+xml;base64,${Buffer.from(MARK_SVG).toString("base64")}`;
