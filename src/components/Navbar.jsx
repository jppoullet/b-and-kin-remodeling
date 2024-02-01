import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return isActive
      ? "text-gray-800 font-bold block p-2 my-0"
      : "block p-2 my-0";
  };

  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const mobileMenuActiveHandler = () => {
    const body = document.querySelector("body");

    setMobileMenuActive(!mobileMenuActive);

    if (!mobileMenuActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
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
            {/* Facebook Icon */}
            <button className="bg-primary p-3 rounded-full">
              <a href="https://www.facebook.com/profile.php?id=100063549162496">
                <svg
                  class="w-6 h-6 text-white dark:text-white"
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
              </a>
            </button>

            {/* Contact Us */}
            <button className="bg-primary text-white py-3 px-6 rounded-full">
              Contact Us
            </button>
          </div>

          {/* Home - Business Name/Logo */}
          <div className="flex flex-col items-center">
            <div className="text-center text-2xl text-gray-800 font-bold no-underline cursor-pointer pb-4">
              <Link
                to="/"
                onClick={() => {
                  setState({ isOpen: false });
                }}
              >
                B & Kin
                <br />
                Remodeling
              </Link>
            </div>
          </div>

          {/* Nav Menu */}
          <div className={`hidden md:flex text-black justify-end`}>
            <NavLink to="/services" className={activeLink}>
              Services
            </NavLink>

            {/* <NavLink to="/gallery" className={activeLink}>
              Galley
            </NavLink> */}

            <NavLink to="/testimonials" className={activeLink}>
              Testimonials
            </NavLink>

            <NavLink to="/about" className={activeLink}>
              About
            </NavLink>
          </div>

          {/* Mobile Menu Button*/}
          <div className="md:hidden flex justify-end items-center">
            {/* Mobile Menu Button */}
            <button className="" onClick={mobileMenuActiveHandler}>
              {openMenu}
            </button>
          </div>
        </div>

        {/* Mobile Menu List */}
        <div
          className={`flex flex-col justify-center items-center bg-primary md:hidden overflow-x-hidden fixed z-[1] h-full top-0 left-0 transition duration-200 ease-in ${
            mobileMenuActive
              ? "translate-x-0 w-full"
              : "-translate-x-full w-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center md:hidden w-full bg-primary text-secondary my-20">
            {/* Close Mobile Menu Btn */}
            <button
              className="absolute top-[66px] right-10"
              onClick={mobileMenuActiveHandler}
            >
              {closeMenu}
            </button>

            {/* Facebook Icon */}
            <button className="bg-secondary p-3 rounded-full absolute top-[66px] left-10">
              <a href="https://www.facebook.com/profile.php?id=100063549162496">
                <svg
                  class="w-6 h-6 text-white dark:text-white"
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
              </a>
            </button>

            <NavLink
              to="/services"
              className="hover:bg-secondary focus:text-primary block p-6 my-0 w-full text-center"
              onClick={() => {
                setState({ isOpen: false });
              }}
            >
              Services
            </NavLink>

            <NavLink
              to="/testimonials"
              className="hover:bg-secondary focus:text-primary block p-6 my-0 w-full text-center"
              onClick={() => {
                setState({ isOpen: false });
              }}
            >
              Testimonials
            </NavLink>

            <NavLink
              to="/about"
              className="hover:bg-secondary focus:text-primary block p-6 my-0 w-full text-center"
              onClick={() => {
                setState({ isOpen: false });
              }}
            >
              About
            </NavLink>
          </div>

          <button className="bg-secondary text-white py-3 px-6 rounded-full">
            <NavLink to="/contact">Contact Us</NavLink>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
