import { NavLink } from "react-router-dom";
import "./Footer.css";

const CURRENT_YEAR = 2025;

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-inner">

        <div className="footer-col">
          <p className="footer-brand">🤘 Metal Legends</p>
          <p className="footer-copy">
            © {CURRENT_YEAR} Metal Legends. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="/privacy" className="footer-legal-link">Privacy Policy &amp; Cookies</a>
            <span>|</span>
            <a href="/terms" className="footer-legal-link">Terms of Sale</a>
          </div>
          <p className="footer-legal-text">
            Metal Legends is an independent fan project and is not affiliated
            with any artist or record label. All trademarks belong to their
            respective owners.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Explore</h4>
          <nav className="footer-nav" aria-label="Footer navigation">
            <NavLink className="footer-link" to="/home">Home</NavLink>
            <NavLink className="footer-link" to="/bands">Bands</NavLink>
            <NavLink className="footer-link" to="/concerts">Concerts</NavLink>
            <NavLink className="footer-link" to="/gallery">Gallery</NavLink>
            <NavLink className="footer-link" to="/forum">Forum</NavLink>
            <NavLink className="footer-link" to="/news">News</NavLink>
            <NavLink className="footer-link" to="/contact">Contact</NavLink>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Resources</h4>
          <div className="footer-resources">
            <a
              href="https://github.com/RotaryFold/metal-legends-react"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub Repository
            </a>
            <a
              href="https://www.figma.com/community"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Figma Design Inspiration
            </a>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              📡 RSS Feed
            </a>
          </div>

          <h4 className="footer-heading" style={{ marginTop: "16px" }}>Follow Us</h4>
          <div className="footer-socials">
            <a className="footer-icon" href="https://github.com/RotaryFold" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="footer-icon" href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="footer-icon" href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X / Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a className="footer-icon" href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a className="footer-icon" href="https://spotify.com/" target="_blank" rel="noreferrer" aria-label="Spotify">
              <i className="fa-brands fa-spotify"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
