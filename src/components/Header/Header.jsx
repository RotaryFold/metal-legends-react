import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const navClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="brand">
          <NavLink to="/home" className="brand-title" style={{ textDecoration: "none" }}>
            Metal Legends
          </NavLink>
        </div>

        <nav className="nav-menu">
          <ul className="nav-list">
            <li>
              <NavLink className={navClass} to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navClass} to="/bands">
                Bands
              </NavLink>
            </li>
            <li>
              <NavLink className={navClass} to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink className={navClass} to="/concerts">
                Concerts
              </NavLink>
            </li>
            <li>
              <NavLink className={navClass} to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className={navClass} to="/forum">
                Forum
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
