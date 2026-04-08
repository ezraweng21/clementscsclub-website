import siteContent from "../data/siteContent";
import SystemBanner from "../components/SystemBanner";
import TelemetryStrip from "../components/TelemetryStrip";

function Officers() {
  return (
    <section className="section page-section page-theme-officers">
      <div className="container">
        <div className="page-header officer-page-header">
          <p className="page-eyebrow">Leadership</p>
          <h1>Meet Our Officers</h1>
          <p className="section-text officer-intro">
            The officer team includes presidents, coaches, support roles, and
            organizers who help run meetings, lessons, communication, contests,
            and club operations throughout the year.
          </p>
        </div>

        <div className="officer-grid-compact">
          <div className="officer-page-full">
            <SystemBanner
              eyebrow="Leadership Matrix"
              title="A Large Team Running the Club"
              text="The leadership side of the site now feels more like an internal systems board, showing how presidents, coaches, support roles, and organizers all fit together."
              chips={["22 officers", "coaching", "operations"]}
              code="leadership.map(role => supportMembers(role));"
            />

            <TelemetryStrip
              items={[
                {
                  label: "Leadership Size",
                  value: "22 MEMBERS",
                  text: "A broad officer and coaching team helps distribute work and support members.",
                },
                {
                  label: "Contest Roles",
                  value: "THANKSGIVING READY",
                  text: "Seasonal contest leadership can be highlighted within the broader officer structure.",
                },
                {
                  label: "Coverage",
                  value: "MEETINGS TO SYSTEMS",
                  text: "Roles span presidents, coaches, sys admins, historian, and secretary support.",
                },
              ]}
            />
          </div>

        </div>

        <div className="officer-grid-compact">
          {siteContent.officers.map((officer, index) => (
            <article
              className="officer-card-compact officer-card-tight"
              key={`${officer.role}-${officer.name}-${index}`}
            >
              <div className="officer-image-shell">
                {officer.image ? (
                  <img
                    src={officer.image}
                    alt={`${officer.name} - ${officer.role}`}
                    className="officer-image-compact"
                  />
                ) : (
                  <div className="officer-placeholder">
                    <span>{officer.name.charAt(0)}</span>
                  </div>
                )}
              </div>

              <div className="officer-info-compact">
                <p className="officer-role-compact">{officer.role}</p>
                <h2 className="officer-name-compact">{officer.name}</h2>
                {officer.grade ? (
                  <p className="officer-grade-compact">Grade {officer.grade}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Officers;
