import styles from "./index.module.scss";

/** One full round of the drag, in seconds; every part of the drawing moves on the same clock. */
const DURATION = "7s";
/** When each pose is reached, as a share of the round; the moves between them ease in and out. */
const KEY_TIMES = "0;0.18;0.42;0.56;0.8;1";
const KEY_SPLINES = Array(5).fill("0.65 0 0.35 1").join(";");

/** The shape: a round blob of four anchors around this middle, this far out. */
const MIDDLE_X = 100;
const MIDDLE_Y = 80;
const RADIUS = 38;
/** The top anchor's place at each pose: where it starts, and where the pointer drags it (up, into a drop). */
const ANCHOR_X = [100, 100, 100, 100, 100, 100];
const ANCHOR_Y = [42, 42, 14, 14, 42, 42];
/** How far the top anchor's two handles reach out at each pose: shorter as it is pulled up, so the tip sharpens. */
const HANDLE = [21, 21, 6, 6, 21, 21];
/** How far the other anchors' handles reach (a circle's, for this radius). */
const ROUND = 21;

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

/** The closed shape, with its top anchor at pose `index`. */
const shape = (index: number) => {
  const x = ANCHOR_X[index]!;
  const y = ANCHOR_Y[index]!;
  const reach = HANDLE[index]!;
  const right = MIDDLE_X + RADIUS;
  const left = MIDDLE_X - RADIUS;
  const bottom = MIDDLE_Y + RADIUS;
  return [
    `M${x} ${y}`,
    `C${x + reach} ${y} ${right} ${MIDDLE_Y - ROUND} ${right} ${MIDDLE_Y}`,
    `C${right} ${MIDDLE_Y + ROUND} ${MIDDLE_X + ROUND} ${bottom} ${MIDDLE_X} ${bottom}`,
    `C${MIDDLE_X - ROUND} ${bottom} ${left} ${MIDDLE_Y + ROUND} ${left} ${MIDDLE_Y}`,
    `C${left} ${MIDDLE_Y - ROUND} ${x - reach} ${y} ${x} ${y}Z`,
  ].join(" ");
};

/** The other three anchors, which stay put: right, bottom and left. */
const STILL_ANCHORS = [
  [MIDDLE_X + RADIUS, MIDDLE_Y],
  [MIDDLE_X, MIDDLE_Y + RADIUS],
  [MIDDLE_X - RADIUS, MIDDLE_Y],
] as const;

/** The vector drawing, still (for visitors who ask for less motion) or moving. */
function Drawing({ moving }: { moving: boolean }) {
  const x = ANCHOR_X[0]!;
  const y = ANCHOR_Y[0]!;
  const reach = HANDLE[0]!;
  return (
    <svg className={moving ? styles.moving : styles.still} viewBox="0 0 200 150">
      <path className={styles.shape} d={shape(0)}>
        {moving && <Move attribute="d" values={poses(shape)} />}
      </path>
      {STILL_ANCHORS.map(([ax, ay]) => (
        <rect key={`${ax} ${ay}`} className={styles.anchor} x={ax - 4} y={ay - 4} width="8" height="8" />
      ))}
      <line className={styles.handle} x1={x - reach} y1={y} x2={x + reach} y2={y}>
        {moving && <Move attribute="x1" values={poses((index) => String(ANCHOR_X[index]! - HANDLE[index]!))} />}
        {moving && <Move attribute="x2" values={poses((index) => String(ANCHOR_X[index]! + HANDLE[index]!))} />}
        {moving && <Move attribute="y1" values={ANCHOR_Y.join(";")} />}
        {moving && <Move attribute="y2" values={ANCHOR_Y.join(";")} />}
      </line>
      {[-1, 1].map((side) => (
        <circle key={side} className={styles.knob} cx={x + side * reach} cy={y} r="3.5">
          {moving && (
            <Move attribute="cx" values={poses((index) => String(ANCHOR_X[index]! + side * HANDLE[index]!))} />
          )}
          {moving && <Move attribute="cy" values={ANCHOR_Y.join(";")} />}
        </circle>
      ))}
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
 * Branding design: designing the logo itself. On an artboard, a pointer grabs the top anchor of a round vector shape
 * and drags it up, its handles following and closing in, and the shape becomes a drop, as in a design tool.
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
