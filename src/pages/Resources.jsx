import siteContent from "../data/siteContent";
import SystemBanner from "../components/SystemBanner";
import TelemetryStrip from "../components/TelemetryStrip";

function Resources() {
  return (
    <section className="section page-section page-theme-resources">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Resources</p>
          <h1>Resources for Members</h1>
          <p className="section-text">
            Use this page as a central place for club links, public materials,
            dues information, communication channels, and shared member
            resources.
          </p>
        </div>

        <div className="events-layout">
          <SystemBanner
            eyebrow="Club Resources"
            title="Links, Materials, and Member Access"
            text="This page keeps the most important live club links easy to find, including Discord, the interest form, dues, shared materials, and official contact channels."
            chips={["discord", "drive", "interest form"]}
            code="resources / links / active"
          />

          <TelemetryStrip
            items={[
              {
                label: "Live Links",
                value: "DRIVE + DISCORD + FORM",
                text: "The main join and resource links are active and easy to reach from one place.",
              },
              {
                label: "Meetings",
                value: "FRIDAY AFTER SCHOOL",
                text: "Members can use these links to stay connected before and after weekly meetings.",
              },
              {
                label: "Materials",
                value: "SHARED DRIVE",
                text: "Slides and lesson materials are organized through the shared club drive.",
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
              {siteContent.resources
                .filter((resource) => resource.link)
                .map((resource, index) => (
                  <article
                    className="resource-card"
                    key={`${resource.category}-${resource.title}-${index}`}
                  >
                    <p className="resource-label">{resource.category}</p>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>

                    <a
                      href={resource.link}
                      className="resource-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Resource
                    </a>
                  </article>
                ))}
            </div>

            <p className="resource-note">
              Only finalized links are shown here so the page stays clean and
              useful for members.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Resources;
