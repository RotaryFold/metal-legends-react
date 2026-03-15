/**
 * NOTA PARA EL ESTUDIO DE JOEL:
 * Menú hamburguesa: abro y cierro usando un simple estado true/false.
 */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/bands", label: "Bands" },
  { to: "/gallery", label: "Gallery" },
  { to: "/concerts", label: "Concerts" },
  { to: "/forum", label: "Forum" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="main-header">
      <div className="header-inner">
        {/* Logo */}
        <NavLink to="/home" className="brand-link" onClick={handleNavClick}>
          <span className="brand-icon">🤘</span>
          <span className="brand-title">Metal Legends</span>
        </NavLink>

        {/* Hamburger button (mobile only) */}
        <button
          className={`hamburger-btn ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Nav menu */}
        <nav className={`nav-menu ${isMenuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink className={navClass} to={to} onClick={handleNavClick}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
