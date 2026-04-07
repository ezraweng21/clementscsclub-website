import siteContent from "../data/siteContent";

function SignalGrid() {
  return (
    <section className="home-section signal-section">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">Live Signals</p>
            <h2>System Snapshot</h2>
            <p className="section-lead">
              Temporary status cards that give the template a more technical,
              dashboard-like entry point.
            </p>
          </div>

          <p className="binary-stamp">01000011 01010011</p>
        </div>

        <div className="signal-grid">
          {siteContent.homepage.signalItems.map((item) => (
            <article className="signal-card" key={item.label}>
              <p className="signal-label">{item.label}</p>
              <h3>{item.value}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignalGrid;
