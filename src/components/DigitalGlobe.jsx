import siteContent from "../data/siteContent";

function DigitalGlobe({
  eyebrow = "Simulation",
  title = "Networked Earth",
  description = "A floating visual anchor that makes the page feel more like a live system interface.",
  stats = siteContent.homepage.globeStats,
  nodes = siteContent.homepage.globeNodes,
  className = "",
}) {
  return (
    <div className={`globe-panel ${className}`.trim()}>
      <div className="globe-hud globe-hud-left">
        <p className="globe-hud-label">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="globe-stage" aria-hidden="true">
        <div className="globe-beacon beacon-one"></div>
        <div className="globe-beacon beacon-two"></div>
        <div className="globe-beacon beacon-three"></div>
        <div className="globe-scan-ring"></div>
        <div className="globe-orbit orbit-one"></div>
        <div className="globe-orbit orbit-two"></div>
        <div className="globe-orbit orbit-three"></div>

        <div className="globe-core">
          <div className="globe-night-lights"></div>
          <div className="globe-grid globe-grid-horizontal"></div>
          <div className="globe-grid globe-grid-vertical"></div>
          <div className="globe-atmosphere"></div>
          <div className="globe-aurora"></div>
          <div className="globe-continent continent-one"></div>
          <div className="globe-continent continent-two"></div>
          <div className="globe-continent continent-three"></div>
          <div className="globe-continent continent-four"></div>
          <div className="globe-continent continent-five"></div>
          <div className="globe-coastlines"></div>
          <div className="globe-clouds cloud-one"></div>
          <div className="globe-clouds cloud-two"></div>
          <div className="globe-clouds cloud-three"></div>
          <div className="globe-clouds cloud-four"></div>
          <div className="globe-shine"></div>
          <div className="globe-shadow"></div>
        </div>

        <div className="globe-particle particle-one"></div>
        <div className="globe-particle particle-two"></div>
        <div className="globe-particle particle-three"></div>
        <div className="globe-particle particle-four"></div>
      </div>

      <div className="globe-stats">
        {stats.map((item) => (
          <article className="globe-stat-card" key={item.label}>
            <p className="globe-stat-label">{item.label}</p>
            <h4>{item.value}</h4>
          </article>
        ))}
      </div>

      <div className="globe-node-row">
        {nodes.map((node) => (
          <article className="globe-node-card" key={node.title}>
            <p className="globe-node-title">{node.title}</p>
            <p className="globe-node-value">{node.value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default DigitalGlobe;
