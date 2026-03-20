import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">ShopHub</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isOpen ? 'line line-1 active' : 'line line-1'}></span>
          <span className={isOpen ? 'line line-2 active' : 'line line-2'}></span>
          <span className={isOpen ? 'line line-3 active' : 'line line-3'}></span>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={() => setIsOpen(false)}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link nav-link-btn" onClick={() => setIsOpen(false)}>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
