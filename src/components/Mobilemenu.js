/* eslint-disable camelcase */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const MobileMenu = () => {
  const [hamburger_class, setHamBurgerClass] = useState(
    "hamburger-icon unclicked",
  );
  const [mobile_menu_class, setMobileMenuClass] = useState("menu hidden");
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMobileMenuClicked) {
      setHamBurgerClass("hamburger-icon clicked");
      setMobileMenuClass("menu visible");
    } else {
      setHamBurgerClass("hamburger-icon unclicked");
      setMobileMenuClass("menu hidden");
    }
    setIsMobileMenuClicked(!isMobileMenuClicked);
  };

  const NavbarData = [
    {
      name: "MODELS",
      link: "/",
    },
    {
      name: "RESERVE",
      link: "/reserve",
    },
    {
      name: "MY RESERVATIONS",
      link: "/my_reservations",
    },
    {
      name: "ADD CAR",
      link: "/add_car",
    },
    {
      name: "DELETE CAR",
      link: "/delete_car",
    },
  ];

  return (
    <div className="all" style={{ width: "100%", height: "100vh" }}>
      <nav>
        <button type="button" className="burger-menu" onClick={updateMenu}>
          <div className={hamburger_class} />
          <div className={hamburger_class} />
          <div className={hamburger_class} />
        </button>
      </nav>

      <div id="menu" className={mobile_menu_class}>
        <ul className="menu-ul">
          {NavbarData.map((value) => (
            <li className="menu-li" key={value.name}>
              <Link to={value.link}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
