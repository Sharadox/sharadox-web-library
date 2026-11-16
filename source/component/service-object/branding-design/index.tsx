import styles from "./index.module.scss";

/** One full round of the drag, in seconds; every part of the drawing moves on the same clock. */
const DURATION = "7s";
/** When each pose is reached, as a share of the round; the moves between them ease in and out. */
const KEY_TIMES = "0;0.18;0.42;0.56;0.8;1";
const KEY_SPLINES = Array(5).fill("0.65 0 0.35 1").join(";");

/** The middle anchor's place at each pose: where it starts, and where the pointer drags it. */
const ANCHOR_X = [100, 100, 116, 116, 100, 100];
const ANCHOR_Y = [86, 86, 40, 40, 86, 86];
/** How far its two handles reach out on either side. */
const HANDLE = 34;

const poses = (place: (index: number) => string) => ANCHOR_X.map((_, index) => place(index)).join(";");

/** Animates one attribute through the poses, in step with everything else. */
function Move({ attribute, values }: { attribute: string; values: string }) {
  return (
    <animate
      attributeName={attribute}
      values={values}
      dur={DURATION}
      keyTimes={KEY_TIMES}
      calcMode="spline"
      keySplines={KEY_SPLINES}
      repeatCount="indefinite"
    />
  );
}

/** The curve through the three anchors, with the middle one at pose `index`. */
const curve = (index: number) => {
  const x = ANCHOR_X[index]!;
  const y = ANCHOR_Y[index]!;
  return `M36 112 C52 70 ${x - HANDLE} ${y} ${x} ${y} S152 74 164 112`;
};

/** The vector drawing, still (for visitors who ask for less motion) or moving. */
function Drawing({ moving }: { moving: boolean }) {
  const x = ANCHOR_X[0]!;
  const y = ANCHOR_Y[0]!;
  return (
    <svg className={moving ? styles.moving : styles.still} viewBox="0 0 200 150">
      <path className={styles.curve} d={curve(0)}>
        {moving && <Move attribute="d" values={poses(curve)} />}
      </path>
      <line className={styles.handle} x1={x - HANDLE} y1={y} x2={x + HANDLE} y2={y}>
        {moving && <Move attribute="x1" values={poses((index) => String(ANCHOR_X[index]! - HANDLE))} />}
        {moving && <Move attribute="x2" values={poses((index) => String(ANCHOR_X[index]! + HANDLE))} />}
        {moving && <Move attribute="y1" values={ANCHOR_Y.join(";")} />}
        {moving && <Move attribute="y2" values={ANCHOR_Y.join(";")} />}
      </line>
      {[-HANDLE, HANDLE].map((reach) => (
        <circle key={reach} className={styles.knob} cx={x + reach} cy={y} r="3.5">
          {moving && <Move attribute="cx" values={poses((index) => String(ANCHOR_X[index]! + reach))} />}
          {moving && <Move attribute="cy" values={ANCHOR_Y.join(";")} />}
        </circle>
      ))}
      <rect className={styles.anchor} x="32" y="108" width="8" height="8" />
      <rect className={styles.anchor} x="160" y="108" width="8" height="8" />
      <rect className={styles.selected} x={x - 5} y={y - 5} width="10" height="10">
        {moving && <Move attribute="x" values={poses((index) => String(ANCHOR_X[index]! - 5))} />}
        {moving && <Move attribute="y" values={poses((index) => String(ANCHOR_Y[index]! - 5))} />}
      </rect>
      {/* The pointer: comes in, grabs the anchor, drags it up, holds, drags it back down and leaves. */}
      <path className={styles.pointer} d="M0 0 L0 17 L4.5 13 L8 20.5 L11 19 L7.5 11.8 L13 11.5 Z">
        {moving ? (
          <animateTransform
            attributeName="transform"
            type="translate"
            values={[
              "176 146",
              ...ANCHOR_X.slice(1, -1).map((ax, index) => `${ax} ${ANCHOR_Y[index + 1]}`),
              "176 146",
            ].join(";")}
            dur={DURATION}
            keyTimes={KEY_TIMES}
            calcMode="spline"
            keySplines={KEY_SPLINES}
            repeatCount="indefinite"
          />
        ) : null}
      </path>
    </svg>
  );
}

/**
 * Branding design: designing the logo itself. On an artboard, a pointer grabs an anchor of a vector curve and drags
 * it, its handles following and the curve reshaping, as in a design tool.
 */
export function BrandingDesign() {
  return (
    <div className={styles.object}>
      <div className={styles.artboard}>
        <Drawing moving />
        <Drawing moving={false} />
      </div>
    </div>
  );
}
