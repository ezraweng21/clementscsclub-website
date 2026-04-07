import siteContent from "../data/siteContent";

function QuickAccessCard({ label, title, description, href, cta }) {
  return (
    <article className="resource-card">
      <p className="resource-label">{label}</p>
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
            The most important starter information in one place.
          </p>
        </div>

        <div className="content-grid three-col">
          <article className="content-card">
            <h3>General Meetings</h3>
            <p>{siteContent.meetingInfo.shortSchedule}</p>
            <p>Location: {siteContent.meetingInfo.location}</p>
          </article>

          <article className="content-card">
            <h3>Workshops & Build Sessions</h3>
            <p>{siteContent.meetingInfo.workshopSchedule}</p>
          </article>

          <article className="content-card">
            <h3>Join the Club</h3>
            <p>{siteContent.meetingInfo.joinText}</p>
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
