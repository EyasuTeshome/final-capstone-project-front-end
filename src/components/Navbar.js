<<<<<<< HEAD
/* eslint-disable */
import React from 'react';
import '../App.css';
import NavFooter from './NavFooter';
import MobileMenu from './Mobilemenu';
=======
/*eslint-disable*/

import React from "react";
import "../App.css";
import NavFooter from "./NavFooter";
>>>>>>> dev

function Navbar() {
  const NavbarData = [
    {
      name: "MODELS",
      link: "/models",
    },
    {
      name: "LIFESTYLE",
      link: "/lifestyle",
    },
    {
      name: "STYLE",
      link: "/style",
    },
    {
      name: "TEST DRIVE",
      link: "/testdrive",
    },
  ];
  return (
    <div className="main-nav">
      <div className="mobile-menu">
        <MobileMenu/>
        <div className="">

        </div>
      </div>
    <div className="Navbar">
      <img
        className="logo"
        src="https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2017/08/TESLA-Logo.jpg"
        alt=""
      />
      <div>
        <ul className="navbar-ul">
          {NavbarData.map((val, key) => (
            <li
              className="navbar-li"
              key={key}
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer">
        <NavFooter />
      </div>
    </div>
    </div>
  );
}

export default Navbar;
