import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark-mode', newDarkMode);
  };
  
  const toggleClass = isDarkMode ? '' : 'dark-mode';
  
  return (
    <nav className='navbar'>
      <div className='brand-logo'>MTech Solutions</div>
      <div className='nav-links'>
        <NavLink to="/" end activeClassName='active-nav-link'>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login" className='nav-auth'>Login</NavLink>
        <button 
          onClick={toggleDarkMode}
          className='theme-toggle' 
          aria-label='Toggle dark mode'
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
