import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar row">
      <h1 className="navbar-logo col-8 ">IamJim</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links col-4"}>
        <div className="row">
          <li className="col">
            <a href="/" onClick={() => setIsMobile(false)}>
              Home
            </a>
          </li>
          <li className="col">
            <a href="/about" onClick={() => setIsMobile(false)}>
              About Me
            </a>
          </li>
          <li className="col">
            <a href="/contact" onClick={() => setIsMobile(false)}>
              Contact Me!
            </a>
          </li>
        </div>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;