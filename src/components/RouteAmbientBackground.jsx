import CircuitBoardBackdrop from "./CircuitBoardBackdrop";

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
          <span className="ambient-holo-layer holo-a"></span>
          <span className="ambient-holo-layer holo-b"></span>
          <span className="ambient-holo-layer holo-c"></span>
          <span className="ambient-holo-layer holo-d"></span>
          <span className="ambient-holo-beam"></span>
        </div>
      ) : null}

      {variant === "contact" ? (
        <div className="ambient-keyboard-field">
          {["J", "O", "I", "N", "C", "S", "L", "I", "N", "K", "T", "E"].map(
            (key, index) => (
              <span className={`ambient-key key-${index + 1}`} key={`${key}-${index}`}>
                {key}
              </span>
            ),
          )}
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
