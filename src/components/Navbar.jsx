import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FacebookBtn from "./FacebookBtn";
import Btn from "./Btn";

const Navbar = () => {
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
    <nav className="bg-primary w-full fixed top-0 z-50">
      {/* Desktop View */}
      <div className="flex items-center justify-between mx-10 md:py-6 py-8 md:max-w-[1200px] xl:mx-auto">
        {/* Social Contact Us */}

        {/* Home - Business Name/Logo */}
        <div className="flex flex-col items-center">
          <div className="text-center text-3xl text-white font-bold no-underline cursor-pointer">
            <a href="/">B & Kin Remodeling</a>
          </div>
        </div>

        {/* Nav Menu */}
        <div className="hidden md:flex text-secondary text-xl justify-end">
          <a
            href="#home"
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            Home
          </a>
          <a
            href="#aboutSection"
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            About
          </a>
          <a
            href="#gallerySection"
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            Services
          </a>
          <a
            href="#contactSection"
            className="block relative p-2 my-0 hover:font-bold after:block after:scale-x-0 after:h-1 after:w-full after:bg-secondary after:transition after:ease-in-out after:duration-200 after:hover:scale-x-100"
          >
            Contact
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
            href="#home"
            onClick={mobileMenuActiveHandler}
            className="hover:bg-secondary hover:text-primary block p-6 my-0 w-full text-center"
          >
            Home
          </a>

          <a
            href="#servicesSection"
            className="hover:bg-secondary hover:text-primary block p-6 my-0
            w-full text-center"
            onClick={mobileMenuActiveHandler}
          >
            Services
          </a>

          <a
            href="#testimonialsSection"
            className="hover:bg-secondary hover:text-primary block p-6 my-0 w-full text-center"
            onClick={mobileMenuActiveHandler}
          >
            Testimonials
          </a>

          <a
            href="#aboutSection"
            className="hover:bg-secondary hover:text-primary block p-6 my-0 w-full text-center"
            onClick={mobileMenuActiveHandler}
          >
            About
          </a>
        </div>

        <a
          href="#contactSection"
          className="absolute bottom-32"
          onClick={mobileMenuActiveHandler}
        >
          <Btn>Contact Us</Btn>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
