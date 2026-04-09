import siteContent from "../data/siteContent";
import SystemBanner from "../components/SystemBanner";
import TelemetryStrip from "../components/TelemetryStrip";

function Officers() {
  const showOfficerPhotos = false;

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
              eyebrow="Leadership Roster"
              title="A Team of Officers, Coaches, and Organizers"
              text="This page is meant to read like a clean leadership directory, showing how presidents, coaches, support roles, and contest organizers all contribute to the club."
              chips={["22 officers", "coaches", "club ops"]}
              code="leadership / roster / active"
            />

            <TelemetryStrip
              items={[
                {
                  label: "Leadership Size",
                  value: "22 MEMBERS",
                  text: "A broad officer and coaching team helps distribute work and support members.",
                },
                {
                  label: "Role Coverage",
                  value: "MEETINGS TO CONTESTS",
                  text: "The roster covers weekly meetings, coaching, communication, and seasonal events.",
                },
                {
                  label: "Structure",
                  value: "PRESIDENTS + SUPPORT",
                  text: "Roles span presidents, coaches, sys admins, historian, secretary, and support leadership.",
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
                {showOfficerPhotos && officer.image ? (
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
                <div className="officer-record-topline">
                  <span className="officer-record-id">
                    ID-{(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="officer-record-status">active roster</span>
                </div>
                <p className="officer-role-compact">{officer.role}</p>
                <h2 className="officer-name-compact">{officer.name}</h2>
                {officer.grade ? (
                  <p className="officer-grade-compact">Grade {officer.grade}</p>
                ) : null}
                <p className="officer-record-note">leadership directory</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Officers;
