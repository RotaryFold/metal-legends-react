import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-text">© 2025 Metal Legends. All rights reserved.</p>
          <p className="footer-links">
            <a href="#">Privacy Policy</a> | <a href="#">Cookies</a> | <a href="#">Terms & Conditions</a>
          </p>
          <p className="footer-links">
            <a href="/home">Home</a> | <a href="/bands">Bands</a> | <a href="/gallery">Gallery</a> | <a href="/concerts">Concerts</a> | <a href="/contact">Contact</a> |{" "}
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>

        <div className="footer-right">
          <a className="footer-icon" href="#" aria-label="facebook"><i className="fa-brands fa-facebook"></i></a>
          <a className="footer-icon" href="#" aria-label="instagram"><i className="fa-brands fa-instagram"></i></a>
          <a className="footer-icon" href="#" aria-label="twitter"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
