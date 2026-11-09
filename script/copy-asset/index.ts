/**
 * After the build, copies the files the compiled code needs at run time into distribution/: the fonts in
 * source/asset (read by the share image) and the Sass design tokens in source/style (so applications can
 * `@use "style/token"` with distribution/ on their Sass load path).
 */
import { cpSync, existsSync } from "node:fs";

for (const folder of ["asset", "style"]) {
  if (existsSync(`source/${folder}`)) cpSync(`source/${folder}`, `distribution/${folder}`, { recursive: true });
}
console.log("assets and design tokens copied");
