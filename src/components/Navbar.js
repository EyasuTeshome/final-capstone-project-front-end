import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import NavFooter from "./NavFooter";
import MobileMenu from "./Mobilemenu";
import iconShow from "../images/icon-show-sidebar.svg";
import iconHide from "../images/icon-hide-sidebar.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const user = useSelector((state) => state.user);
  const [NavbarData, setNavbarData] = useState([
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
  ]);

  // remove add and delete car options if user is not admin
  useEffect(() => {
    if (user.data.role !== "admin") {
      setNavbarData((prevState) => prevState.slice(0, 3));
    }
  }, []);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="main-nav">
      <div
        className={`mobile-menu ${
          window.location.pathname === "/reserve" ? "show" : ""
        }`}
      >
        <MobileMenu />
      </div>
      <div
        className={`Navbar ${isOpen ? "" : "hidden"} ${
          window.location.pathname === "/reserve" ? "hidden" : ""
        }`}
      >
        <img
          className="logo"
          src="https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2017/08/TESLA-Logo.jpg"
          alt=""
        />
        <div>
          <ul className="navbar-ul">
            {NavbarData.map((val) => (
              <li
                className="navbar-li"
                key={val.name}
                id={window.location.pathname === val.link ? "active" : ""}
              >
                <Link to={val.link}>{val.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <NavFooter />
        </div>
      </div>

      <div
        className={window.location.pathname.includes("cars") ? null : "hidden"}
      >
        <button
          type="button"
          className={`navbar-toggle ${isOpen ? "" : "navbar-toggle-hidden"}`}
          onClick={toggleNavbar}
        >
          <img src={isOpen ? iconHide : iconShow} alt="toggle navbar" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
