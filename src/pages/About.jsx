import siteContent from "../data/siteContent";
import DigitalGlobe from "../components/DigitalGlobe";

function About() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">About</p>
          <h1>About {siteContent.club.name}</h1>
          <p className="section-text">{siteContent.club.description}</p>
        </div>

        <div className="events-layout">
          <section className="section-panel about-feature-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">{siteContent.aboutFeature.eyebrow}</p>
                <h2 className="subsection-title">{siteContent.aboutFeature.title}</h2>
              </div>
            </div>

            <div className="about-feature-layout">
              <div className="about-feature-copy">
                <p className="section-text">
                  {siteContent.aboutFeature.description}
                </p>

                <div className="card-grid">
                  {siteContent.aboutPoints.map((point) => (
                    <article className="card" key={point.title}>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <DigitalGlobe
                className="about-globe"
                eyebrow={siteContent.aboutFeature.eyebrow}
                title={siteContent.aboutFeature.title}
                description={siteContent.aboutFeature.description}
                stats={siteContent.aboutFeature.stats}
                nodes={siteContent.aboutFeature.nodes}
              />
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Mission</p>
                <h2 className="subsection-title">What the Club Is For</h2>
              </div>
            </div>

            <div className="card-grid">
              <article className="card">
                <h3>Learn Computer Science</h3>
                <p>
                  Explore programming concepts, technical ideas, and creative
                  problem-solving through approachable meetings and workshops.
                </p>
              </article>

              <article className="card">
                <h3>Grow Through Projects</h3>
                <p>
                  Build experience through demos, collaborative projects,
                  practice challenges, and hands-on experimentation.
                </p>
              </article>

              <article className="card">
                <h3>Build Community</h3>
                <p>
                  Meet students with shared interests in coding, engineering,
                  design, and technology.
                </p>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Meetings</p>
                <h2 className="subsection-title">Meeting Information</h2>
              </div>
            </div>

            <div className="card-grid">
              <article className="card">
                <h3>When</h3>
                <p>{siteContent.meetingInfo.schedule}</p>
              </article>

              <article className="card">
                <h3>Where</h3>
                <p>{siteContent.meetingInfo.location}</p>
              </article>

              <article className="card">
                <h3>Joining</h3>
                <p>{siteContent.meetingInfo.joinText}</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
