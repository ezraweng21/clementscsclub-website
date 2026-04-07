function TelemetryStrip({ items }) {
  return (
    <div className="telemetry-strip">
      {items.map((item) => (
        <article className="telemetry-card" key={item.label}>
          <p className="telemetry-label">{item.label}</p>
          <h3>{item.value}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default TelemetryStrip;
