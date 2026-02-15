import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="brand">
          <h1 className="brand-title">Metal Legends</h1>
        </div>

        <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <ul className="nav-list">
            <li><NavLink className={navClass} to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink className={navClass} to="/bands" onClick={() => setIsMenuOpen(false)}>Bands</NavLink></li>
            <li><NavLink className={navClass} to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
            <li><NavLink className={navClass} to="/concerts" onClick={() => setIsMenuOpen(false)}>Concerts</NavLink></li>
            <li><NavLink className={navClass} to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
