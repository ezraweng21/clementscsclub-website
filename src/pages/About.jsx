import siteContent from "../data/siteContent";
import DigitalGlobe from "../components/DigitalGlobe";

function About() {
  return (
    <section className="section page-section page-theme-about">
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
                  {siteContent.aboutPoints.map((point, index) => (
                    <article className="card card-structured" key={point.title}>
                      <div className="card-topline">
                        <span className="card-chip">mission</span>
                        <span className="card-index">0{index + 1}</span>
                      </div>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                      <p className="card-footer-note">club identity layer</p>
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
              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">focus</span>
                  <span className="card-code">explore.cs()</span>
                </div>
                <h3>Learn Computer Science</h3>
                <p>
                  Explore programming concepts, technical ideas, and creative
                  problem-solving through approachable meetings and workshops.
                </p>
                <p className="card-footer-note">curiosity first</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">growth</span>
                  <span className="card-code">build.projects()</span>
                </div>
                <h3>Grow Through Projects</h3>
                <p>
                  Build experience through demos, collaborative projects,
                  practice challenges, and hands-on experimentation.
                </p>
                <p className="card-footer-note">learning by doing</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">people</span>
                  <span className="card-code">connect.members()</span>
                </div>
                <h3>Build Community</h3>
                <p>
                  Meet students with shared interests in coding, engineering,
                  design, and technology.
                </p>
                <p className="card-footer-note">collaborative culture</p>
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
              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">timing</span>
                  <span className="card-index">01</span>
                </div>
                <h3>When</h3>
                <p>{siteContent.meetingInfo.schedule}</p>
                <p className="card-footer-note">weekly club rhythm</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">location</span>
                  <span className="card-index">02</span>
                </div>
                <h3>Where</h3>
                <p>{siteContent.meetingInfo.location}</p>
                <p className="card-footer-note">room info can be updated later</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">access</span>
                  <span className="card-index">03</span>
                </div>
                <h3>Joining</h3>
                <p>{siteContent.meetingInfo.joinText}</p>
                <p className="card-footer-note">community is open and welcoming</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
