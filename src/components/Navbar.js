import React, { useState } from "react";
import "./Navbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar row">
      <h1 className="navbar-logo col-8 ">IamJim</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links col-4"}>
        <div className="row">
          <li className={isMobile ? "row flex justify-center items-center":"col"}>
            <a href="/" onClick={() => setIsMobile(false)}>
              Home
            </a>
          </li>
          <li className={isMobile ? "row flex justify-center items-center":"col"}>
            <a href="/about" onClick={() => setIsMobile(false)}>
              About Me
            </a>
          </li>
          <li className={isMobile ? "row flex justify-center items-center":"col"}>
            <a href="/contact" onClick={() => setIsMobile(false)}>
              Contact Me!
            </a>
          </li>
        </div>
      </ul>
      <FontAwesomeIcon className="mobile-menu-icon col" icon={faBars} onClick={() => setIsMobile(!isMobile)}></FontAwesomeIcon>

    </nav>
  );
};

export default Navbar;