import siteContent from "../data/siteContent";
import SystemBanner from "../components/SystemBanner";
import TelemetryStrip from "../components/TelemetryStrip";

function Resources() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Resources</p>
          <h1>Resources for Members</h1>
          <p className="section-text">
            Use this page as a central place for club links, public materials,
            dues information, communication channels, and future member
            resources.
          </p>
        </div>

        <div className="events-layout">
          <SystemBanner
            eyebrow="Resource Network"
            title="Club Links, Materials, and Access Points"
            text="This page acts like a central command panel for the club's live links now, while still leaving room for future forms, gallery content, and competition materials."
            chips={["drive", "dues", "socials"]}
            code="resources.mount('/club-hub');"
          />

          <TelemetryStrip
            items={[
              {
                label: "Live Links",
                value: "DRIVE + DUES + IG",
                text: "The main public links are already active and easy to reach from one place.",
              },
              {
                label: "Next Up",
                value: "DISCORD + FORMS",
                text: "Communication and sign-up links can slide in later without changing the page layout.",
              },
              {
                label: "Expansion",
                value: "GALLERY READY",
                text: "The design leaves room for a future member gallery and more club content.",
              },
            ]}
          />

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Resources</p>
                <h2 className="subsection-title">Club Links and Materials</h2>
              </div>
            </div>

            <div className="resource-grid">
              {siteContent.resources.map((resource, index) => (
                <article
                  className="resource-card"
                  key={`${resource.category}-${resource.title}-${index}`}
                >
                  <p className="resource-label">{resource.category}</p>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>

                  {resource.link ? (
                    <a
                      href={resource.link}
                      className="resource-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Resource
                    </a>
                  ) : (
                    <span className="resource-link resource-link-disabled">
                      Link Coming Soon
                    </span>
                  )}
                </article>
              ))}
            </div>

            <p className="resource-note">
              The shared drive, dues link, email, and Instagram are live.
              Discord, forms, contest materials, and the future member gallery
              can stay as polished placeholders until final links are ready.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Resources;
