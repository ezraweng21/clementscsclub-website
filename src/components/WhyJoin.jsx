function WhyJoin() {
  return (
    <section className="home-section alt-surface">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Why Join</p>
          <h2>What Members Gain</h2>
          <p className="section-lead">
            Computer Science Club is built for students who want both fun,
            interactive experiences and stronger technical growth through
            regular practice and community.
          </p>
        </div>

        <div className="content-grid two-col">
          <article className="content-card content-card-structured">
            <div className="card-topline">
              <span className="card-chip">pathway 01</span>
              <span className="card-code">learn.interactive()</span>
            </div>
            <h3>Interactive Learning</h3>
            <p>
              Explore computer science through engaging activities, themed
              lessons, and meetings that make technical topics feel exciting.
            </p>
            <p className="card-footer-note">hands-on and beginner-friendly</p>
          </article>

          <article className="content-card content-card-structured">
            <div className="card-topline">
              <span className="card-chip">pathway 02</span>
              <span className="card-code">train.competitive()</span>
            </div>
            <h3>Competition Readiness</h3>
            <p>
              Strengthen logic, speed, and problem-solving through
              competition-focused lessons and coaching support.
            </p>
            <p className="card-footer-note">challenge-based growth</p>
          </article>

          <article className="content-card content-card-structured">
            <div className="card-topline">
              <span className="card-chip">pathway 03</span>
              <span className="card-code">progress.weekly()</span>
            </div>
            <h3>Consistent Growth</h3>
            <p>
              Build skills week by week through Friday meetings, structured
              practice, and guidance from a large officer and coaching team.
            </p>
            <p className="card-footer-note">steady improvement over time</p>
          </article>

          <article className="content-card content-card-structured">
            <div className="card-topline">
              <span className="card-chip">pathway 04</span>
              <span className="card-code">community.sync()</span>
            </div>
            <h3>Community and Support</h3>
            <p>
              Meet students who are interested in coding, current CS students,
              and club leaders who want to help everyone improve.
            </p>
            <p className="card-footer-note">student-led support system</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;
