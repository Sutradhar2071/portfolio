import React from "react";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/Ringku (1).pdf";
import img from "../../assets/Picture of Ringku.jpg";
import { NavLink } from "react-router"; 

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : "hover:text-primary"
          }
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : "hover:text-primary"
          }
        >
          Contact Me
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for small devices */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {navItems}
          </ul>
        </div>

        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <img src={img} alt="Logo" className="h-10 w-10 rounded-full" />
          <a className="btn btn-ghost text-xl font-bold text-primary hidden sm:inline-block">Ringku.SD</a>
        </div>
      </div>

      {/* Navbar Center for large screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {/* Resume button visible only in lg+ */}
        <a
          href={resume}
          download
          className="hidden lg:flex btn btn-sm btn-success gap-2 items-center"
        >
          <FaDownload className="text-base" />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
