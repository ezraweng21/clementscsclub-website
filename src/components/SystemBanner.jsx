function SystemBanner({ eyebrow, title, text, chips = [], code = "" }) {
  return (
    <section className="system-banner">
      <div className="system-banner-copy">
        <p className="system-banner-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <div className="system-banner-panel">
        <div className="system-banner-chips">
          {chips.map((chip) => (
            <span className="system-banner-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>

        <div className="system-banner-code">
          <span className="system-banner-prompt">&gt;</span>
          <span>{code}</span>
        </div>
      </div>
    </section>
  );
}

export default SystemBanner;
