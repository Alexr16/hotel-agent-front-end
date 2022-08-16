// import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import Social from './Social';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    if (window.innerWidth < 769) {
      document.body.classList.toggle('hidden');
      setShowMenu(!showMenu);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 769 && showMenu === true) {
      setShowMenu(!showMenu);
      document.body.classList.toggle('hidden');
    }
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    color: '$text',
  };

  return (
    <nav className="nav-style">
      <div id="logo" style={logoStyle}>
        <span id="logo-img" />
        <h1 id="logo-text">Hotel Agent</h1>
      </div>
      <div className="menu-mobile">
        <button
          className="hamburguer"
          type="button"
          label="menu"
          onClick={displayMenu}
        >
          {showMenu ? <AiFillCloseCircle /> : <AiOutlineMenu />}
        </button>
      </div>
      <ul className={showMenu ? 'menu-link mobile' : 'menu-link'}>
        <li className="menu-item" key={1}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to="/"
          >
            FEATURED HOTELS
          </NavLink>
        </li>

        <li className="menu-item" key={2}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to="/hotel-details"
          >
            HOTELS
          </NavLink>
        </li>
        <li className="menu-item" key={3}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to=""
          >
            RESERVATIONS
          </NavLink>
        </li>
        <li className="menu-item" key={4}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to=""
          >
            LOG IN
          </NavLink>
        </li>
        <li className="menu-item" key={5}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to=""
          >
            SIGN UP
          </NavLink>
        </li>
        <li className="menu-item" key={6}>
          <NavLink
            className="nav-link-style"
            onClick={handleClick}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              color: isActive ? 'white' : '#27363f',
              backgroundColor: isActive ? '#97bf0d' : 'white',
            })}
            to=""
          >
            LOG OUT
          </NavLink>
        </li>
      </ul>
      <div className="social-menu">
        <Social />
      </div>
      <div className="footer-menu">
        <p>&copy; 2022 All rights reserved</p>
      </div>
    </nav>
  );
};

export default Navbar;
