import siteContent from "../data/siteContent";

function ArchiveGallery() {
  const archiveStats = [
    { label: "Sections Planned", value: `${siteContent.galleryArchive.length}` },
    { label: "Current Purpose", value: "Club Media" },
    { label: "Status", value: "Ready to Fill" },
  ];

  const archiveUses = [
    "meeting photos and event highlights",
    "contest materials and practice packets",
    "member projects and demos",
  ];

  return (
    <section className="archive-gallery">
      <div className="archive-gallery-header">
        <div>
          <p className="archive-eyebrow">Digital Archive</p>
          <h3>Future Gallery and Media Archive</h3>
          <p className="archive-summary">
            This is a larger preview area for the future member gallery. It is
            meant to hold photos, club highlights, contest materials, and
            project showcases in one organized place.
          </p>
        </div>

        <div className="archive-status-cluster">
          <p className="archive-command">resources / archive / gallery</p>
          <div className="archive-status-pill">
            <span className="archive-status-dot" aria-hidden="true"></span>
            Layout ready for real content
          </div>
        </div>
      </div>

      <div className="archive-overview">
        {archiveStats.map((stat) => (
          <article className="archive-stat-tile" key={stat.label}>
            <p className="archive-type">{stat.label}</p>
            <p className="archive-stat-value">{stat.value}</p>
          </article>
        ))}
      </div>

      <div className="archive-layout">
        <aside className="archive-sidebar">
          <p className="archive-type">What This Section Can Hold</p>
          <div className="archive-directory-list">
            {archiveUses.map((item, index) => (
              <div className="archive-directory-row" key={`${item}-${index}`}>
                <span className="archive-directory-index">{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="archive-feed">
            <p className="archive-feed-title">Suggested use</p>
            <p className="archive-feed-line">
              Keep this as the main place for visuals, snapshots, and shared
              memory content once those assets are ready.
            </p>
          </div>
        </aside>

        <div className="archive-grid">
          {siteContent.galleryArchive.map((entry, index) => (
            <article className="archive-card" key={entry.name}>
              <div className="archive-card-topline">
                <span className="archive-card-index">
                  Section {index + 1}
                </span>
                <span className="archive-card-tag">Planned Area</span>
              </div>

              <div className="archive-folder-icon" aria-hidden="true">
                <span></span>
                <span></span>
              </div>

              <p className="archive-name">{entry.name}</p>
              <p className="archive-type">{entry.type}</p>
              <p className="archive-note">{entry.note}</p>

              <div className="archive-card-meter" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArchiveGallery;
