import siteContent from "../data/siteContent";
import SystemBanner from "../components/SystemBanner";
import TelemetryStrip from "../components/TelemetryStrip";
import JoinPortal from "../components/JoinPortal";

function Contact() {
  return (
    <section className="section page-section page-theme-contact">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Contact</p>
          <h1>Get Involved</h1>
          <p className="section-text">
            Find joining information, meeting details, and ways to stay updated
            with {siteContent.club.name}.
          </p>
        </div>

        <div className="events-layout">
          <SystemBanner
            eyebrow="Connection Layer"
            title="Join, Contact, and Stay Updated"
            text="The contact page can feel more like a live onboarding panel, giving students a clear path from curiosity to joining the club."
            chips={["discord", "email", "fridays"]}
            code="connect.member({ status: 'open' });"
          />

          <TelemetryStrip
            items={[
              {
                label: "Audience",
                value: "OPEN TO ALL",
                text: "Anyone can attend, with current computer science students especially encouraged to come.",
              },
              {
                label: "Primary Join Path",
                value: "DISCORD",
                text: "The club's main communication channel will remain the fastest way to get updates.",
              },
              {
                label: "Sponsor",
                value: siteContent.contact.sponsorName,
                text: "Faculty support stays visible alongside student-facing contact details.",
              },
            ]}
          />

          <JoinPortal />

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Join</p>
                <h2 className="subsection-title">{siteContent.join.title}</h2>
              </div>
            </div>

            <div className="card-grid">
              {siteContent.join.steps.map((step, index) => (
                <article className="card card-structured" key={step}>
                  <div className="card-topline">
                    <span className="card-chip">join step</span>
                    <span className="card-index">0{index + 1}</span>
                  </div>
                  <h3>Step {index + 1}</h3>
                  <p>{step}</p>
                  <p className="card-footer-note">new member onboarding</p>
                </article>
              ))}
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
                  <span className="card-chip">schedule</span>
                  <span className="card-code">friday.run()</span>
                </div>
                <h3>General Meetings</h3>
                <p>{siteContent.meetingInfo.shortSchedule}</p>
                <p className="card-footer-note">core weekly meetup</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">sessions</span>
                  <span className="card-code">practice.mode()</span>
                </div>
                <h3>Workshops & Build Sessions</h3>
                <p>{siteContent.meetingInfo.workshopSchedule}</p>
                <p className="card-footer-note">flexible throughout the semester</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">room</span>
                  <span className="card-code">locate.club()</span>
                </div>
                <h3>Location</h3>
                <p>{siteContent.meetingInfo.location}</p>
                <p className="card-footer-note">final room number still TBD</p>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Contact</p>
                <h2 className="subsection-title">Club Contact Information</h2>
              </div>
            </div>

            <div className="card-grid">
              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">email</span>
                  <span className="card-index">01</span>
                </div>
                <h3>Email</h3>
                <p>{siteContent.contact.generalEmail}</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">social</span>
                  <span className="card-index">02</span>
                </div>
                <h3>Instagram</h3>
                <p>{siteContent.contact.instagramHandle}</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">updates</span>
                  <span className="card-index">03</span>
                </div>
                <h3>Remind</h3>
                <p>{siteContent.contact.remindCode}</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">faculty</span>
                  <span className="card-index">04</span>
                </div>
                <h3>Sponsor</h3>
                <p>{siteContent.contact.sponsorName}</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">contact</span>
                  <span className="card-index">05</span>
                </div>
                <h3>Sponsor Email</h3>
                <p>{siteContent.contact.sponsorEmail}</p>
              </article>

              <article className="card card-structured">
                <div className="card-topline">
                  <span className="card-chip">hub</span>
                  <span className="card-index">06</span>
                </div>
                <h3>Linktree</h3>
                <p>{siteContent.contact.linktree}</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
