const toPath = (...points) => {
  const [first, ...rest] = points;
  return [
    `M${first[0]} ${first[1]}`,
    ...rest.map(([x, y], index) => {
      const [prevX, prevY] = index === 0 ? first : rest[index - 1];
      return prevY === y ? `H${x}` : `V${y}`;
    }),
  ].join(" ");
};

// Keep each lane bundle monotonic so the traces stay parallel and never cross.
const majorRoutes = [
  ...[
    [140, 228, 430],
    [174, 262, 462],
    [208, 296, 494],
    [242, 330, 526],
    [276, 364, 558],
    [310, 398, 590],
  ].map(([startY, branchX, joinY]) => toPath([40, startY], [branchX, startY], [branchX, joinY], [640, joinY])),
  ...[
    [680, 40, 430],
    [722, 40, 430],
    [764, 40, 430],
    [836, 40, 430],
    [878, 40, 430],
    [920, 40, 430],
  ].map(([x, startY, endY]) => toPath([x, startY], [x, endY])),
  ...[
    [140, 1372, 430],
    [174, 1338, 462],
    [208, 1304, 494],
    [242, 1270, 526],
    [276, 1236, 558],
    [310, 1202, 590],
  ].map(([startY, branchX, joinY]) => toPath([1560, startY], [branchX, startY], [branchX, joinY], [960, joinY])),
  ...[
    [680, 730, 1160],
    [722, 730, 1160],
    [764, 730, 1160],
    [836, 730, 1160],
    [878, 730, 1160],
    [920, 730, 1160],
  ].map(([x, startY, endY]) => toPath([x, startY], [x, endY])),
];

const minorRoutes = [
  ...[
    [365, 184, 470, 272],
    [399, 218, 504, 306],
    [433, 252, 538, 340],
  ].map(([startY, branchX, joinY, endX]) => toPath([110, startY], [branchX, startY], [branchX, joinY], [endX, joinY])),
  ...[
    [365, 1416, 470, 1328],
    [399, 1382, 504, 1294],
    [433, 1348, 538, 1260],
  ].map(([startY, branchX, joinY, endX]) => toPath([1490, startY], [branchX, startY], [branchX, joinY], [endX, joinY])),
  ...[
    [770, 324, 840, 520],
    [804, 290, 874, 486],
    [838, 256, 908, 452],
  ].map(([startY, branchX, joinY, endX]) => toPath([150, startY], [branchX, startY], [branchX, joinY], [endX, joinY])),
  ...[
    [770, 1276, 840, 1080],
    [804, 1310, 874, 1114],
    [838, 1344, 908, 1148],
  ].map(([startY, branchX, joinY, endX]) => toPath([1450, startY], [branchX, startY], [branchX, joinY], [endX, joinY])),
  ...[
    [520, 110, 260],
    [560, 110, 298],
    [1040, 110, 320],
    [1080, 110, 356],
  ].map(([x, startY, endY]) => toPath([x, startY], [x, endY])),
  ...[
    [520, 940, 1090],
    [560, 902, 1090],
    [1040, 840, 1090],
    [1080, 804, 1090],
  ].map(([x, startY, endY]) => toPath([x, startY], [x, endY])),
];

const thinRoutes = [
  toPath([80, 108], [176, 108], [176, 152], [214, 152]),
  toPath([80, 252], [176, 252], [176, 296], [214, 296]),
  toPath([80, 956], [242, 956], [242, 902], [360, 902]),
  toPath([1520, 108], [1424, 108], [1424, 152], [1386, 152]),
  toPath([1520, 252], [1424, 252], [1424, 296], [1386, 296]),
  toPath([1520, 956], [1358, 956], [1358, 902], [1240, 902]),
  toPath([720, 110], [720, 186]),
  toPath([760, 110], [760, 222]),
  toPath([840, 978], [840, 1090]),
  toPath([880, 942], [880, 1090]),
];

const vias = [
  [228, 140], [262, 174], [296, 208], [330, 242], [364, 276], [398, 310],
  [680, 430], [722, 430], [764, 430], [836, 430], [878, 430], [920, 430],
  [1372, 140], [1338, 174], [1304, 208], [1270, 242], [1236, 276], [1202, 310],
  [680, 730], [722, 730], [764, 730], [836, 730], [878, 730], [920, 730],
  [184, 470], [218, 504], [252, 538], [1416, 470], [1382, 504], [1348, 538],
  [324, 840], [290, 874], [256, 908], [1276, 840], [1310, 874], [1344, 908],
  [520, 260], [560, 298], [1040, 320], [1080, 356], [520, 940], [560, 902], [1040, 840], [1080, 804],
  [176, 152], [176, 296], [242, 902], [1424, 152], [1424, 296], [1358, 902],
  [720, 186], [760, 222], [840, 978], [880, 942],
];

function CircuitBoardBackdrop() {
  return (
    <svg
      className="pcb-backdrop"
      viewBox="0 0 1600 1200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="pcb-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 24 0 L 0 0 0 24"
            fill="none"
            stroke="rgba(120,255,210,0.08)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="1600" height="1200" fill="url(#pcb-grid)" opacity="0.45" />

      <g className="pcb-routes pcb-routes-major">
        {majorRoutes.map((d) => (
          <g key={d}>
            <path className="pcb-trace pcb-trace-major" d={d} />
            <path className="pcb-trace pcb-trace-flash pcb-flow-fast" d={d} />
          </g>
        ))}
      </g>

      <g className="pcb-routes pcb-routes-minor">
        {minorRoutes.map((d) => (
          <g key={d}>
            <path className="pcb-trace pcb-trace-minor" d={d} />
            <path className="pcb-trace pcb-trace-flash-soft pcb-flow-slow" d={d} />
          </g>
        ))}
      </g>

      <g className="pcb-routes pcb-routes-thin">
        {thinRoutes.map((d) => (
          <path className="pcb-trace pcb-trace-thin" d={d} key={d} />
        ))}
      </g>

      <g className="pcb-chipset">
        <rect
          className="pcb-chip-outer"
          x="640"
          y="430"
          width="320"
          height="300"
          rx="2"
        />
        <rect
          className="pcb-chip-inner"
          x="704"
          y="494"
          width="192"
          height="172"
          rx="2"
        />
        <rect
          className="pcb-chip-core"
          x="742"
          y="530"
          width="116"
          height="100"
          rx="1"
        />
      </g>

      <g className="pcb-vias">
        {vias.map(([cx, cy], index) => (
          <circle
            className={index % 4 === 0 ? "pcb-via pcb-via-large pcb-pulse" : "pcb-via"}
            cx={cx}
            cy={cy}
            r={index % 4 === 0 ? "7" : "4.4"}
            key={`${cx}-${cy}`}
          />
        ))}
      </g>
    </svg>
  );
}

export default CircuitBoardBackdrop;
