import React from "react";

const Btn = ({ text }) => {
  return (
    <button className="md:bg-secondary bg-secondary text-white py-3 px-6 rounded-full hover:bg-alternate transition duration-300">
      {text}
    </button>
  );
};

export default Btn;
