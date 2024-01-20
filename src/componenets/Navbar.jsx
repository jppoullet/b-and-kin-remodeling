import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = "bg-slate-600 text-yellow";
  const normalLink = "";

  const mobileMenuHandler = () => {};

  return (
    <nav className="flex justify-between items-center bg-slate-300 ">
      <Link to="/" className="text-2xl font-bold no-underline m-4 text-black">
        Home
      </Link>
      <ul className="hidden sm:flex text-black">
        <NavLink
          to="/services"
          className={`block p-2 my-0 mx-2 rounded-lg ${({ isActive }) => {
            isActive ? "bg-slate-600 text-yellow" : "";
          }}`}
        >
          Services
        </NavLink>

        <NavLink
          to="/gallery"
          className={`block p-2 my-0 mx-2 rounded-lg ${({ isActive }) => {
            isActive ? "bg-slate-600 text-yellow" : "";
          }}`}
        >
          Galley
        </NavLink>

        <NavLink to="/testimonials" className="block p-2 my-0 mx-2 rounded-lg">
          Testimonials
        </NavLink>

        <NavLink to="/about" className="block p-2 my-0 mx-2 rounded-lg">
          About
        </NavLink>
      </ul>
      {/* Mobile Menu Button */}
      <div
        className="sm:hidden flex items-center mx-2"
        onClick={mobileMenuHandler}
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden">
        <a href="#">Serv</a>
        <a href="#">Gal</a>
        <a href="#">Test</a>
      </div>
    </nav>
  );
};

export default Navbar;
