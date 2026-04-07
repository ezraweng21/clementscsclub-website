import { useState } from "react";
import siteContent from "../data/siteContent";

function BuildTracks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTrack = siteContent.homepage.tracks[activeIndex];

  const dashboardStats = [
    {
      label: "Mode",
      value: activeTrack.title.toUpperCase(),
      detail: "active pathway",
    },
    {
      label: "Cadence",
      value: activeIndex === 1 ? "TRAINING" : "LIVE",
      detail: "club rhythm",
    },
    {
      label: "Power",
      value: ["78%", "92%", "84%"][activeIndex],
      detail: "member energy",
    },
  ];

  const dashboardFeeds = [
    `route.init('${activeTrack.title.toLowerCase().replaceAll(" ", "-")}')`,
    activeTrack.command,
    "discord.sync(status => members.online)",
    "render.clubInterface({ theme: 'command-center' })",
  ];

  return (
    <section className="home-section tracks-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Command Center</p>
          <h2>Interactive Club Dashboard</h2>
          <p className="section-lead">
            A more creative control-panel view of how the club operates across
            learning, competition, and community.
          </p>
        </div>

        <div className="command-center">
          <div className="command-sidebar">
            <p className="command-label">System Modes</p>

            <div className="command-track-list">
              {siteContent.homepage.tracks.map((track, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={track.title}
                    type="button"
                    className={
                      isActive
                        ? "command-track-button command-track-button-active"
                        : "command-track-button"
                    }
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="command-track-dot"></span>
                    <span className="command-track-copy">
                      <span className="command-track-title">{track.title}</span>
                      <span className="command-track-command">
                        {track.command}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="command-mini-panel">
              <p className="command-mini-eyebrow">Core Loop</p>
              <p className="command-mini-code">
                observe() -&gt; practice() -&gt; collaborate()
              </p>
            </div>
          </div>

          <div className="command-hologram">
            <div className="command-hologram-head">
              <div>
                <p className="command-label">Live View</p>
                <h3>{activeTrack.title}</h3>
              </div>

              <div className="command-status-pill">
                <span className="command-status-dot"></span>
                ACTIVE
              </div>
            </div>

            <div className="command-display">
              <div className="command-radar">
                <div className="command-radar-ring ring-a"></div>
                <div className="command-radar-ring ring-b"></div>
                <div className="command-radar-ring ring-c"></div>
                <div className="command-radar-core"></div>
                <div className="command-radar-sweep"></div>
                <div className="command-radar-node node-a"></div>
                <div className="command-radar-node node-b"></div>
                <div className="command-radar-node node-c"></div>
              </div>

              <div className="command-info-grid">
                {dashboardStats.map((item) => (
                  <article className="command-stat-card" key={item.label}>
                    <p className="command-stat-label">{item.label}</p>
                    <h4>{item.value}</h4>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="command-description-card">
              <p className="command-label">Selected Route</p>
              <p className="command-description">{activeTrack.text}</p>
            </div>

            <div className="command-feed">
              {dashboardFeeds.map((line) => (
                <p className="command-feed-line" key={line}>
                  <span className="command-feed-prompt">&gt;</span>
                  <span>{line}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildTracks;
