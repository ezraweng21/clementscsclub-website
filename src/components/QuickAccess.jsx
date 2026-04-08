import siteContent from "../data/siteContent";

function QuickAccessCard({ label, title, description, href, cta }) {
  return (
    <article className="resource-card resource-card-structured">
      <div className="card-topline">
        <p className="resource-label">{label}</p>
        <span className="card-code">link.ready()</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

      {href ? (
        <a
          href={href}
          className="resource-link"
          target="_blank"
          rel="noreferrer"
        >
          {cta}
        </a>
      ) : (
        <span className="resource-link resource-link-disabled">
          Link Coming Soon
        </span>
      )}

      <p className="card-footer-note">club access point</p>
    </article>
  );
}

function QuickAccess() {
  return (
    <section className="home-section alt-surface">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Quick Access</p>
          <h2>Meeting Info, Joining, and Links</h2>
          <p className="section-lead">
            The most important club information in one place.
          </p>
        </div>

        <div className="content-grid three-col">
          <article className="content-card content-card-structured">
            <div className="card-topline">
              <span className="card-chip">schedule</span>
              <span className="card-index">01</span>
            </div>
            <h3>General Meetings</h3>
            <p>{siteContent.meetingInfo.shortSchedule}</p>
            <p className="card-footer-note">
              Location: {siteContent.meetingInfo.location}
            </p>
          </article>

          <article className="content-card content-card-structured">
            <div className="card-topline">
              <span className="card-chip">build</span>
              <span className="card-index">02</span>
            </div>
            <h3>Workshops & Build Sessions</h3>
            <p>{siteContent.meetingInfo.workshopSchedule}</p>
            <p className="card-footer-note">practice, prep, and live sessions</p>
          </article>

          <article className="content-card content-card-structured">
            <div className="card-topline">
              <span className="card-chip">join</span>
              <span className="card-index">03</span>
            </div>
            <h3>Join the Club</h3>
            <p>{siteContent.meetingInfo.joinText}</p>
            <p className="card-footer-note">open to all interested students</p>
          </article>
        </div>

        <div className="resource-grid top-spacing">
          <QuickAccessCard
            label="Discord"
            title="Join Discord"
            description="Stay updated on announcements, resources, and meetings."
            href={siteContent.contact.discordLink}
            cta="Open Link"
          />

          <QuickAccessCard
            label="Remind"
            title="Join Remind"
            description={`Use code ${siteContent.contact.remindCode} for club reminders.`}
            href={siteContent.contact.remindLink}
            cta="Open Link"
          />

          <QuickAccessCard
            label="Interest Form"
            title="Sign Up"
            description="Fill out the interest form once the CS Club signup is published."
            href={siteContent.contact.interestFormLink}
            cta="Open Form"
          />
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;
