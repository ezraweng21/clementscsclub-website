const majorRoutes = [
  "M40 130 H230 V430 H640",
  "M40 165 H270 V462 H640",
  "M40 200 H310 V494 H640",
  "M40 235 H350 V526 H640",
  "M40 270 H390 V558 H640",
  "M40 305 H430 V590 H640",
  "M610 40 V210 H680 V430",
  "M655 40 V246 H722 V430",
  "M700 40 V282 H764 V430",
  "M900 40 V210 H920 V430",
  "M945 40 V246 H878 V430",
  "M990 40 V282 H836 V430",
  "M1560 130 H1370 V430 H960",
  "M1560 165 H1330 V462 H960",
  "M1560 200 H1290 V494 H960",
  "M1560 235 H1250 V526 H960",
  "M1560 270 H1210 V558 H960",
  "M1560 305 H1170 V590 H960",
  "M610 1160 V950 H680 V730",
  "M655 1160 V914 H722 V730",
  "M700 1160 V878 H764 V730",
  "M900 1160 V950 H920 V730",
  "M945 1160 V914 H878 V730",
  "M990 1160 V878 H836 V730",
];

const minorRoutes = [
  "M110 365 H190 V470 H280",
  "M110 398 H160 V506 H250",
  "M110 431 H130 V542 H220",
  "M1490 365 H1410 V470 H1320",
  "M1490 398 H1440 V506 H1350",
  "M1490 431 H1470 V542 H1380",
  "M150 770 H320 V840 H520",
  "M150 804 H290 V874 H488",
  "M150 838 H260 V908 H456",
  "M1450 770 H1280 V840 H1080",
  "M1450 804 H1310 V874 H1112",
  "M1450 838 H1340 V908 H1144",
  "M520 110 V260 H620",
  "M560 110 V300 H660",
  "M1040 110 V320 H980",
  "M1080 110 V356 H940",
  "M520 1090 V940 H620",
  "M560 1090 V900 H660",
  "M1040 1090 V840 H980",
  "M1080 1090 V804 H940",
];

const thinRoutes = [
  "M80 105 H180 V150 H210",
  "M80 250 H170 V295 H205",
  "M80 955 H240 V900 H360",
  "M1520 105 H1420 V150 H1390",
  "M1520 250 H1430 V295 H1395",
  "M1520 955 H1360 V900 H1240",
  "M720 110 V186",
  "M760 110 V222",
  "M840 978 V1090",
  "M880 942 V1090",
];

const vias = [
  [230, 130], [270, 165], [310, 200], [350, 235], [390, 270], [430, 305],
  [680, 210], [722, 246], [764, 282], [920, 210], [878, 246], [836, 282],
  [1370, 130], [1330, 165], [1290, 200], [1250, 235], [1210, 270], [1170, 305],
  [680, 950], [722, 914], [764, 878], [920, 950], [878, 914], [836, 878],
  [190, 470], [160, 506], [130, 542], [1410, 470], [1440, 506], [1470, 542],
  [320, 840], [290, 874], [260, 908], [1280, 840], [1310, 874], [1340, 908],
  [520, 260], [560, 300], [1040, 320], [1080, 356], [520, 940], [560, 900], [1040, 840], [1080, 804],
  [180, 150], [170, 295], [240, 900], [1420, 150], [1430, 295], [1360, 900],
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
