import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function Hero() {
  const logoSrc = "/images/csclub-logo.webp";

  return (
    <section className="hero">
      <div className="hero-grid-overlay" aria-hidden="true"></div>
      <div className="container hero-layout">
        <div className="hero-left">
          <p className="hero-tag">
            {siteContent.club.school} • Student-Led • Technology
          </p>

          <h1>
            {siteContent.homepage.heroTitle}
            <span className="hero-accent"> {siteContent.homepage.heroAccent}</span>
          </h1>

          <p className="hero-text">{siteContent.homepage.intro}</p>

          <div className="hero-chip-row">
            {siteContent.homepage.heroChips.map((chip) => (
              <span className="hero-chip" key={chip}>
                {chip}
              </span>
            ))}
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
          <div className="hero-visual-stack">
            <div className="terminal-card">
              <div className="terminal-topbar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="terminal-body">
                <div className="hero-brand-lockup">
                  <div className="hero-brand-badge" aria-hidden="true">
                    <img src={logoSrc} alt="" />
                  </div>

                  <div className="hero-brand-copy">
                    <p className="hero-brand-name">{siteContent.club.shortName}</p>
                    <span className="hero-brand-subtitle">clements.cs</span>
                  </div>
                </div>

                <p className="feature-label">{siteContent.club.tagline}</p>

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
      </div>
    </section>
  );
}

export default Hero;
