import siteContent from "../data/siteContent";

const portalLinks = [
  {
    label: "Discord",
    title: "Primary join path",
    text: "Get meeting updates, reminders, and announcements in the main communication space.",
    href: siteContent.contact.discordLink,
  },
  {
    label: "Instagram",
    title: "Club updates",
    text: "Follow the public-facing feed for highlights, announcements, and event posts.",
    href: siteContent.contact.instagramLink,
  },
  {
    label: "Email",
    title: "Direct contact",
    text: "Reach out for questions about joining, meetings, or general club information.",
    href: `mailto:${siteContent.contact.generalEmail}`,
  },
];

function JoinPortal() {
  return (
    <section className="join-portal">
      <div className="join-portal-panel">
        <div className="join-portal-header">
          <div>
            <p className="join-portal-eyebrow">Access Portal</p>
            <h2>Clean onboarding path for new members</h2>
          </div>

          <div className="join-portal-status">
            <span className="join-portal-status-dot"></span>
            OPEN
          </div>
        </div>

        <div className="join-portal-steps">
          {siteContent.join.steps.map((step, index) => (
            <article className="join-portal-step" key={step}>
              <p className="join-portal-step-number">0{index + 1}</p>
              <p>{step}</p>
            </article>
          ))}
        </div>

        <div className="join-portal-links">
          {portalLinks.map((item) => (
            <a
              className="join-portal-link-card"
              href={item.href || undefined}
              key={item.label}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noreferrer" : undefined}
            >
              <p className="join-portal-link-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinPortal;
