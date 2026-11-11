import { expect, test } from "vitest";
import { STYLE, STYLES } from "@sharadox/sharadox-web-library/content/style";

test("every color style has a display name and the same palette keys", () => {
  const [color] = STYLES.groups;
  const keys = Object.keys(color.options[0].palette).sort();
  for (const option of color.options) {
    expect(STYLE.names[option.name]).toBeTruthy();
    expect(Object.keys(option.palette).sort()).toEqual(keys);
  }
});
