/* eslint-disable */
import React, { useState, useEffect } from "react";
import NavFooter from "./NavFooter";
import "./navbar.css";

const MobileMenu = () => {
  // eslint-disable-next-line camelcase
  const [hamburger_class, setHamBurgerClass] = useState(
    "hamburger-icon unclicked"
  );
  const [menu_li, setMenuLiClass] = useState("menu-li unclicked");
  // eslint-disable-next-line camelcase
  const [mobile_menu_class, setMobileMenuClass] = useState("menu hidden");
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false);
  const slider = document.querySelector(".slider");

  useEffect(() => {
    if (window.location.pathname === "/reserve") {
      setHamBurgerClass((prev) => prev + " bg-white");
    }
  }, [hamburger_class]);

  const updateMenu = () => {
    if (!isMobileMenuClicked) {
      setHamBurgerClass("hamburger-icon clicked");
      setMobileMenuClass("menu visible");
      slider.style.zIndex = -1;
    } else {
      setHamBurgerClass("hamburger-icon unclicked");
      setMobileMenuClass("menu hidden");
      slider.style.zIndex = "0";
    }
    setIsMobileMenuClicked(!isMobileMenuClicked);
  };

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
    <div className="all" style={{ width: "100%", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={hamburger_class} />
          <div className={hamburger_class} />
          <div className={hamburger_class} />
        </div>
      </nav>

      <div id="menu" className={mobile_menu_class}>
        <ul className="menu-ul">
          {NavbarData.map((value, key) => (
            <li
              className="menu-li"
              key={key}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div>{value.name}</div>
            </li>
          ))}
        </ul>
        {/* <div className="nav-footer">
        <NavFooter/>
        </div> */}
      </div>
    </div>
  );
};

export default MobileMenu;
