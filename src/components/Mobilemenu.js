/* eslint-disable */
import React, { useState } from 'react';
import './navbar.css';

const MobileMenu = () => {
  // eslint-disable-next-line camelcase
  const [hamburger_class, setHamBurgerClass] = useState('hamburger-icon unclicked');
  // eslint-disable-next-line camelcase
  const [mobile_menu_class, setMobileMenuClass] = useState('menu hidden');
  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMobileMenuClicked) {
      setHamBurgerClass('hamburger-icon clicked');
      setMobileMenuClass('menu visible');
    } else {
      setHamBurgerClass('hamburger-icon unclicked');
      setMobileMenuClass('menu hidden');
    }
    setIsMobileMenuClicked(!isMobileMenuClicked);
  };

  const NavbarData = [
    {
      name: 'MODELS',
      link: '/models',
    },
    {
      name: 'LIFESTYLE',
      link: '/lifestyle',
    },
    {
      name: 'STYLE',
      link: '/style',
    },
    {
      name: 'TEST DRIVE',
      link: '/testdrive',
    },
  ];

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <hamburger>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={hamburger_class} />
          <div className={hamburger_class} />
          <div className={hamburger_class} />
        </div>
      </hamburger>

      <div className={mobile_menu_class}>
        <div>
        <ul className='menu-ul'>
          {NavbarData.map((val, key) => (
            <li className="menu-li"
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
                updateMenu;
              }}
            >
              <div>{val.name}</div>
            </li>
          ))}

        </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
