import siteContent from "../data/siteContent";

function BuildTracks() {
  return (
    <section className="home-section tracks-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Tracks</p>
          <h2>How the Club Can Feel</h2>
          <p className="section-lead">
            These starter tracks turn the homepage into something closer to a
            CS hub than a generic student organization page.
          </p>
        </div>

        <div className="track-grid">
          {siteContent.homepage.tracks.map((track) => (
            <article className="track-card" key={track.title}>
              <p className="track-command">{track.command}</p>
              <h3>{track.title}</h3>
              <p>{track.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildTracks;
