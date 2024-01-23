import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return isActive
      ? "bg-red-500 block p-2 my-0 rounded-lg"
      : "block p-2 my-0 rounded-lg";
  };

  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const mobileMenuActiveHandler = () => {
    console.log("hello");
    setMobileMenuActive(!mobileMenuActive);
  };

  const openMenu = (
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
  );

  const closeMenu = (
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <>
      <nav className="bg-white">
        <div className="grid grid-cols-3 flex-1 items-center py-10 mx-10">
          {/* Social Contact Us */}
          <div className="md:hidden"></div>
          <div className="hidden md:flex gap-4">
            <button className=" bg-black p-3 rounded-full">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button className="bg-black text-white py-3 px-6 rounded-full">
              Contact Us
            </button>
          </div>

          {/* Home - Business Name/Logo */}
          <div className="flex flex-col items-center">
            <div className="text-center text-2xl font-bold no-underline cursor-pointer pb-4">
              <Link to="/">
                B & Kin
                <br />
                Remodeling
              </Link>
            </div>
          </div>
          {/* Nav Menu */}

          <div
            className={`md:flex text-black  ${
              mobileMenuActive ? "block" : "hidden"
            }`}
          >
            <NavLink to="/services" className={activeLink}>
              Services
            </NavLink>

            <NavLink to="/gallery" className={activeLink}>
              Galley
            </NavLink>

            <NavLink to="/testimonials" className={activeLink}>
              Testimonials
            </NavLink>

            <NavLink to="/about" className={activeLink}>
              About
            </NavLink>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex justify-end items-center mx-10">
            {/* Mobile Menu Button */}
            <button className="" onClick={mobileMenuActiveHandler}>
              {mobileMenuActive ? closeMenu : openMenu}
            </button>
          </div>
        </div>
        {/* Mobile Menu List */}
        {/* <div
          className={`md:hidden py-5 fixed w-full h-full left-0 right-0 z-10 bg-red-300 ${
            mobileMenuActive ? "block" : "hidden"
          }`}
        >
          <a href="#">Serv</a>
          <a href="#">Gal</a>
          <a href="#">Test</a>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
