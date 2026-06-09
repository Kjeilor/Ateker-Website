// src/components/header/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../header/assets/Ateker Logo.png";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setExpandedMenu(null);
      }
    };

    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setExpandedMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleExpanded = (section) => {
    setExpandedMenu((prev) => (prev === section ? null : section));
  };

  return (
    <header className={`header ${menuOpen ? "open" : ""}`}>
      <nav className="nav">
        <div className="logo">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="Ateker" className="logo__img" />
          </Link>
        </div>

        <ul className="main-menu hide-for-mobile">
          <li>
            <a href="#products" className="nav-btn">
              Products
            </a>
            <div className="dropdown">
              <Link to="/storebook">Storebook</Link>
              <Link to="/channel-blue">Channel Blue</Link>
              <Link to="/sudo-canary">Sudo Canary</Link>
              <Link to="/corner-store">Corner Store</Link>
            </div>
          </li>
          <li>
            <Link to="/about" className="nav-btn">
              Research
            </Link>
          </li>
          <li>
            <Link to="/newsroom" className="nav-btn">
              Company
            </Link>
          </li>
        </ul>

        <div className="cta hide-for-mobile">
          <Link className="fb-cta" to="/get-NOTIFIED">
            Request Demo
          </Link>
        </div>

        <div
          className="header__toggle hide-for-desktop"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <button
            className={`menu-toggle ${
              expandedMenu === "products" ? "active" : ""
            }`}
            onClick={() => toggleExpanded("products")}
          >
            Products
          </button>
          <ul
            className={`submenu ${
              expandedMenu === "products" ? "expanded" : ""
            }`}
          >
            <li>
              <Link to="/storebook">Storebook</Link>
            </li>
            <li>
              <Link to="/channel-blue">Channel Blue</Link>
            </li>
            <li>
              <Link to="/sudo-canary">Sudo Canary</Link>
            </li>
            <li>
              <Link to="/corner-store">Corner Store</Link>
            </li>
          </ul>

          <Link to="/about" className="menu-item">
            About
          </Link>
          <Link to="/newsroom" className="menu-item">
            Newsroom
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
