import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-overlay" aria-hidden="true"></div>
      <div className="container hero-layout">
        <div className="hero-left">
          <p className="hero-tag">
            {siteContent.club.school} • Student-Led • Technology
          </p>

          <h1>
            Build with code
            <span className="hero-accent"> beyond the classroom.</span>
          </h1>

          <p className="hero-text">{siteContent.homepage.intro}</p>

          <div className="hero-chip-row">
            <span className="hero-chip">binary systems</span>
            <span className="hero-chip">project builds</span>
            <span className="hero-chip">creative problem-solving</span>
          </div>

          <div className="hero-buttons">
            <Link to="/about" className="primary-btn">
              Learn More
            </Link>
            <Link to="/events" className="secondary-btn">
              View Events
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="terminal-card">
            <div className="terminal-topbar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p className="feature-label">Starter Console</p>

              <div className="terminal-lines">
                {siteContent.homepage.terminalLines.map((line) => (
                  <p className="terminal-line" key={line}>
                    <span className="terminal-prompt">&gt;</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>

              <div className="feature-list">
                {siteContent.homepage.highlights.map((item) => (
                  <div className="feature-item" key={item}>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
