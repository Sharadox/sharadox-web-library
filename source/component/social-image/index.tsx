import { readFile } from "node:fs/promises";
import { shareImage } from "@sharadox/metadata-web-library/share-image";
import { SOCIAL_IMAGES, socialImageScale, socialMarkSize } from "@sharadox/metadata-web-library/social-image";
import { MARK_DATA_URL } from "@sharadox/sharadox-web-library/content/mark";
import { SLOGAN_LINES } from "@sharadox/sharadox-web-library/content/slogan";
import type { SocialImageOptions } from "@sharadox/sharadox-web-library/component/social-image/type";

/** The headline's font, shipped with the library (distribution/asset/font), found relative to this compiled file. */
const SEMI_BOLD = new URL("../../asset/font/Geist-SemiBold.ttf", import.meta.url);
/** The hero's last line, fading from white to grey. */
const DIM = "linear-gradient(180deg, #ffffff 10%, #6b6b6b 120%)";

/**
 * An image to post on social media, like the profile picture: the mark on black, half the shorter side. With the
 * headline, the hero's three lines in Geist (the last one fading) beside the mark on a landscape image, under it on a
 * portrait one. The background alone has neither; the small email card is the landscape headline in proportion, its
 * corners rounded (transparent beyond them).
 *
 * @example
 * return renderSocialImage({ locale: "en", name: "portrait-headline.png" });
 */
export async function renderSocialImage({ locale, name }: SocialImageOptions) {
  const image = SOCIAL_IMAGES[name];
  const { width, height, headline, radius } = image;
  const mark = socialMarkSize(image);
  const landscape = width > height;
  const scale = socialImageScale(image);
  const size = (landscape ? 128 : 116) * scale;
  const lines = SLOGAN_LINES[locale];
  return shareImage(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: landscape ? "row-reverse" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: (landscape ? 96 : 40) * scale,
        background: "#000",
        color: "#fff",
        borderRadius: radius,
      }}
    >
      {image.mark ? <img src={MARK_DATA_URL} width={mark} height={mark} alt="" /> : null}
      {headline ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: landscape ? "flex-start" : "center",
            fontFamily: "Geist",
            fontWeight: 600,
            fontSize: size,
            lineHeight: 0.95,
            letterSpacing: -0.06 * size,
          }}
        >
          {lines.map((line, index) =>
            index === lines.length - 1 ? (
              <span key={line} style={{ backgroundImage: DIM, backgroundClip: "text", color: "transparent" }}>
                {line}
              </span>
            ) : (
              <span key={line}>{line}</span>
            ),
          )}
        </div>
      ) : null}
    </div>,
    { width, height, fonts: [{ name: "Geist", data: await readFile(SEMI_BOLD), weight: 600 }] },
  );
}
