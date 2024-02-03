import React from "react";
import { NavLink } from "react-router-dom";

const ContactBtn = () => {
  return (
    <NavLink to="/contact">
      <button className="bg-primary text-white py-3 px-6 rounded-full">
        Contact Us
      </button>
    </NavLink>
  );
};

export default ContactBtn;
