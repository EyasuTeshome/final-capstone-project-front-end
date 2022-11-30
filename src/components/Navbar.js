import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className="Navbar">
      <img className="logo" src="https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2017/08/TESLA-Logo.jpg" alt="" />
      <ul className="navbar-ul">
        <li className="navbar-li">MODELS</li>
        <li className="navbar-li">LIFESTYLE</li>
        <li className="navbar-li">STYLE</li>
        <li className="navbar-li">TEST DRIVE</li>
      </ul>
    </div>
  );
}

export default Navbar;
