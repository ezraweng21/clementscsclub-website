import CircuitBoardBackdrop from "./CircuitBoardBackdrop";

const contactKeyboardRows = [
  ["ESC", "TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "JOIN", "ENTER"],
  ["CTRL", "SHIFT", "A", "S", "D", "F", "G", "H", "J", "K", "L", "EMAIL", "OPEN"],
  ["ALT", "Z", "X", "C", "V", "B", "N", "M", "DISCORD", "UPDATES", "FRIDAY", "ROOM"],
  ["LINK", "CODE", "TEAM", "BUILD", "MEET", "CS", "CLUB", "JOIN", "EMAIL", "IG", "OPEN"],
  ["SPACE", "MEMBERS", "PROJECTS", "CONTACT", "FRIDAY", "AFTERSCHOOL", "DISCORD"],
  ["HELLO", "JOIN", "START", "ENTER", "REMIND", "NEWS", "EMAIL", "DISCORD", "CS"],
];

function RouteAmbientBackground({ variant }) {
  return (
    <div className={`route-ambient route-ambient-${variant}`} aria-hidden="true">
      {variant === "events" ? (
        <div className="ambient-circuit-field">
          <CircuitBoardBackdrop />
        </div>
      ) : null}

      {variant === "officers" ? (
        <div className="ambient-chip-field">
          <div className="ambient-chip-core">
            <div className="ambient-chip-inner"></div>
          </div>
          <span className="ambient-chip-trace trace-top"></span>
          <span className="ambient-chip-trace trace-right"></span>
          <span className="ambient-chip-trace trace-bottom"></span>
          <span className="ambient-chip-trace trace-left"></span>
        </div>
      ) : null}

      {variant === "resources" ? (
        <div className="ambient-hologram-field">
          <span className="ambient-holo-grid"></span>
          <span className="ambient-holo-column column-a"></span>
          <span className="ambient-holo-column column-b"></span>
          <span className="ambient-holo-column column-c"></span>
          <span className="ambient-holo-layer holo-a"></span>
          <span className="ambient-holo-layer holo-b"></span>
          <span className="ambient-holo-layer holo-c"></span>
          <span className="ambient-holo-layer holo-d"></span>
          <span className="ambient-holo-node node-a"></span>
          <span className="ambient-holo-node node-b"></span>
          <span className="ambient-holo-node node-c"></span>
          <span className="ambient-holo-node node-d"></span>
          <span className="ambient-holo-beam"></span>
        </div>
      ) : null}

      {variant === "contact" ? (
        <div className="ambient-keyboard-field">
          <span className="ambient-keyboard-glow glow-a"></span>
          <span className="ambient-keyboard-glow glow-b"></span>
          <span className="ambient-keyboard-cable cable-a"></span>
          <span className="ambient-keyboard-cable cable-b"></span>
          <span className="ambient-keyboard-cable cable-c"></span>
          <span className="ambient-floating-cap cap-a">ENTER</span>
          <span className="ambient-floating-cap cap-b">JOIN</span>
          <span className="ambient-floating-cap cap-c">CS</span>
            {contactKeyboardRows.map((row, rowIndex) => (
              <div className={`ambient-keyboard-row row-${rowIndex + 1}`} key={`contact-row-${rowIndex}`}>
                {row.map((key, keyIndex) => (
                  <span
                    className={`ambient-key ${
                      key === "JOIN" || key === "DISCORD" || key === "EMAIL" || key === "UPDATES"
                        ? "key-accent"
                        : ""
                    } ${
                      key === "JOIN" || key === "DISCORD"
                        ? "key-glow-cyan"
                        : key === "EMAIL" || key === "ENTER"
                          ? "key-glow-warm"
                          : key === "SPACE" || key === "AFTERSCHOOL" || key === "FRIDAY"
                            ? "key-outline"
                            : ""
                    } ${
                      key.length >= 8 ? "key-extra-wide" : key.length >= 5 ? "key-wide" : ""
                    }`}
                    key={`${key}-${rowIndex}-${keyIndex}`}
                  >
                  {key}
                </span>
              ))}
            </div>
          ))}
        </div>
      ) : null}

      {variant === "about" ? (
        <div className="ambient-orbit-field">
          <span className="ambient-orbit orbit-a"></span>
          <span className="ambient-orbit orbit-b"></span>
          <span className="ambient-orbit orbit-c"></span>
          <span className="ambient-orbit-dot dot-a"></span>
          <span className="ambient-orbit-dot dot-b"></span>
          <span className="ambient-orbit-dot dot-c"></span>
        </div>
      ) : null}
    </div>
  );
}

export default RouteAmbientBackground;
