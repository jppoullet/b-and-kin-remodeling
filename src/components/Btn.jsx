import React, { Children } from "react";

const Btn = ({ children }) => {
  return (
    <button className="md:bg-secondary bg-secondary text-white py-3 px-6 rounded-full hover:bg-alternate transition duration-300">
      {children}
    </button>
  );
};

export default Btn;
