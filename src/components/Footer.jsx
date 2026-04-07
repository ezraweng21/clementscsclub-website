import siteContent from "../data/siteContent";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2026 {siteContent.club.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
