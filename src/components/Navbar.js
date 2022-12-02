/* eslint-disable */
import React, { useState } from "react";
import "../App.css";
import NavFooter from "./NavFooter";
import MobileMenu from "./Mobilemenu";
import iconShow from "../images/icon-show-sidebar.svg";
import iconHide from "../images/icon-hide-sidebar.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
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

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="main-nav">
      <div className="mobile-menu">
        <MobileMenu />
        <div className=""></div>
      </div>
      <div className={`Navbar ${isOpen ? "" : "hidden"}`}>
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
      <div
        className={`navbar-toggle ${isOpen ? "" : "navbar-toggle-hidden"}`}
        onClick={toggleNavbar}
      >
        <img src={isOpen ? iconHide : iconShow} />
      </div>
    </div>
  );
}

export default Navbar;
