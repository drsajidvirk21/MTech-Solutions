import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              MTech
              <span className="text-cyan-500"> Solutions</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <NavLink
              to="/login"
              className="bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600"
            >
              Login
            </NavLink>

            <button
              onClick={toggleDarkMode}
              className="text-xl"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

          </nav>

        </div>

      </div>
    </header>
  );
};

export default Navbar;