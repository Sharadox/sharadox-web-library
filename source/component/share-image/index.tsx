import { shareImage } from "@sharadox/metadata-web-library/share-image";
import { readFile } from "node:fs/promises";
import { horizonDots } from "@sharadox/sharadox-web-library/utility/horizon-dots";
import { translate } from "@sharadox/internationalization-web-library/translate";
import type { ShareImageOptions } from "@sharadox/sharadox-web-library/component/share-image/type";
import { SLOGAN } from "@sharadox/sharadox-web-library/content/slogan";

/**
 * Fonts ship with the library (distribution/asset/font), found relative to this compiled file. Each address is
 * written out in full: bundlers resolve a `new URL` built from a template to the wrong file (the mono line came out in
 * Geist).
 */
const FONTS = {
  semiBold: new URL("../../asset/font/Geist-SemiBold.ttf", import.meta.url),
  monospace: new URL("../../asset/font/GeistMono-Regular.ttf", import.meta.url),
};

/** Share card (Open Graph and Twitter): black canvas, a dotted planet rising from the bottom, the slogan in Geist. */
export async function renderShareImage({ locale, width, height }: ShareImageOptions) {
  const [semiBold, monospace] = await Promise.all([readFile(FONTS.semiBold), readFile(FONTS.monospace)]);
  return shareImage(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#000",
        color: "#fff",
        padding: 72,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -150,
          right: -150,
          top: 420,
          height: 1100,
          borderRadius: 9999,
          background: "#000",
          border: "1.5px solid rgba(255,255,255,0.55)",
          boxShadow: "0 -30px 140px rgba(255,255,255,0.22)",
          display: "flex",
        }}
      />
      {horizonDots().map((dot, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: dot.x,
            top: dot.y,
            width: 3,
            height: 3,
            borderRadius: 3,
            background: `rgba(255,255,255,${dot.opacity})`,
            display: "flex",
          }}
        />
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: "Geist",
          fontSize: 30,
          letterSpacing: -0.5,
        }}
      >
        <div style={{ width: 22, height: 22, borderRadius: 22, border: "2px solid #fff", display: "flex" }} />
        Sharadox
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 70,
          fontFamily: "Geist",
          fontSize: 84,
          lineHeight: 1.02,
          letterSpacing: -2.6,
          maxWidth: 980,
        }}
      >
        {translate(SLOGAN, locale)}
      </div>
      <div style={{ display: "flex", marginTop: 26, fontFamily: "GeistMono", fontSize: 22, color: "#8f8f8f" }}>
        sharadox.com
      </div>
    </div>,
    {
      width,
      height,
      fonts: [
        { name: "Geist", data: semiBold, weight: 600 },
        { name: "GeistMono", data: monospace, weight: 400 },
      ],
    },
  );
}
