import React from "react";
import ContactCard from "../cards/ContactCard";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-10 mx-auto px-10 max-w-[900px] text-center">
      <div>
        <h1 className="text-xl font-bold">
          Make your remodeling dreams come true.
          <br />
          Reach out today!
        </h1>
        <br />
        <p>
          Phone:{" "}
          <a href="tel:6143906882" className="hover:font-bold">
            614-390-6882
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:" className="hover:font-bold">
            name@address.com
          </a>
        </p>
      </div>
      <ContactCard />
    </div>
  );
};

export default Contact;
