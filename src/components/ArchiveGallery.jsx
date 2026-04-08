import siteContent from "../data/siteContent";

function ArchiveGallery() {
  return (
    <section className="archive-gallery">
      <div className="archive-gallery-header">
        <div>
          <p className="archive-eyebrow">Digital Archive</p>
          <h3>Member Gallery Shell</h3>
        </div>

        <p className="archive-command">open ./gallery</p>
      </div>

      <div className="archive-grid">
        {siteContent.galleryArchive.map((entry) => (
          <article className="archive-card" key={entry.name}>
            <div className="archive-folder-icon" aria-hidden="true">
              <span></span>
              <span></span>
            </div>

            <p className="archive-name">{entry.name}</p>
            <p className="archive-type">{entry.type}</p>
            <p className="archive-note">{entry.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ArchiveGallery;
