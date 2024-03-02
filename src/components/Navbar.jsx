import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FacebookBtn from "./FacebookBtn";
import Btn from "./Btn";

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return isActive
      ? "text-white font-bold block p-2 my-0 after:block after:h-1 after:w-full after:bg-secondary"
      : "block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100";
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
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  const closeMenu = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <nav className="bg-primary w-full fixed top-0">
      {/* Desktop View */}
      <div className="grid grid-cols-3 items-center mx-10 py-1 md:max-w-[1200px] xl:mx-auto">
        {/* Social Contact Us */}
        <div className="md:hidden"></div>
        <div className="hidden md:flex gap-4">
          {/* Facebook Icon */}
          <FacebookBtn />

          {/* Contact Us */}

          <a
            onClick={() => {
              document.getElementById("contact-section").scrollIntoView();
            }}
          >
            <Btn>Contact Us</Btn>
          </a>
        </div>

        {/* Home - Business Name/Logo */}
        <div className="flex flex-col items-center">
          <div className="text-center text-3xl text-white font-bold no-underline cursor-pointer pb-4">
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
        <div className="hidden md:flex text-secondary text-xl justify-end">
          {/* <a
            href="#services-section"
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            Services
          </a> */}
          <a
            onClick={() => {
              document.getElementById("gallery-section").scrollIntoView();
            }}
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            Services
          </a>

          <a
            onClick={() => {
              document.getElementById("about-section").scrollIntoView();
            }}
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            About
          </a>

          {/* <a
            href="#home"
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            Home
          </a> */}

          <a
            onClick={() => {
              document.getElementById("home").scrollIntoView();
            }}
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            Home
          </a>
        </div>

        {/* Mobile Menu Button*/}
        <div className="md:hidden flex justify-end items-center">
          {/* Mobile Menu Button */}
          <button className="text-secondary" onClick={mobileMenuActiveHandler}>
            {openMenu}
          </button>
        </div>
      </div>

      {/* Mobile Menu List */}
      <div
        className={`flex flex-col justify-center items-center bg-primary md:hidden overflow-x-hidden fixed z-[1] h-full top-0 right-0 transition duration-200 ease-in ${
          mobileMenuActive ? "-translate-x-0 w-1/2" : "translate-x-full w-1/2"
        }`}
      >
        <div className="p-10 w-full flex justify-between top-4 absolute">
          {/* Facebook Icon */}
          <button className="bg-secondary p-3 rounded-full">
            <a href="https://www.facebook.com/profile.php?id=100063549162496">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </button>

          {/* Close Mobile Menu Btn */}
          <button className="text-secondary" onClick={mobileMenuActiveHandler}>
            {closeMenu}
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-center justify-center md:hidden w-full bg-primary text-secondary my-20">
          <a
            onClick={() => {
              document.getElementById("home").scrollIntoView();
              mobileMenuActiveHandler();
            }}
            className="hover:bg-secondary hover:text-primary block p-6 my-0 w-full text-center"
          >
            Home
          </a>

          <a
            className="hover:bg-secondary hover:text-primary block p-6 my-0
            w-full text-center"
            onClick={() => {
              document.getElementById("gallery-section").scrollIntoView();
              mobileMenuActiveHandler();
            }}
          >
            Services
          </a>

          <a
            className="hover:bg-secondary hover:text-primary block p-6 my-0 w-full text-center"
            onClick={() => {
              document.getElementById("testimonials-section").scrollIntoView();
              mobileMenuActiveHandler();
            }}
          >
            Testimonials
          </a>

          <a
            to="/about"
            className="hover:bg-secondary hover:text-primary block p-6 my-0 w-full text-center"
            onClick={() => {
              document.getElementById("about-section").scrollIntoView();
              mobileMenuActiveHandler();
            }}
          >
            About
          </a>
        </div>

        <a
          className="absolute bottom-32"
          onClick={() => {
            document.getElementById("contact-section").scrollIntoView();
            mobileMenuActiveHandler();
          }}
        >
          <Btn>Contact Us</Btn>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
