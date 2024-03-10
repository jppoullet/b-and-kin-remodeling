import React from "react";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const FooterCard = () => {
  return (
    <div className="text-center pt-12 pb-16 mt-10 bottom-0 leading-relaxed bg-primary text-secondary">
      <h1 className="text-xl">Contact</h1>
      <br />
      <p>Benjamin - Owner</p>
      <p>
        <a
          href="tel:6143906882"
          aria-label="Phone Number"
          className="hover:font-bold flex justify-center items-center gap-3"
        >
          <HiOutlinePhone />
          614-390-6882
        </a>
      </p>
      <p>
        <a
          href="mailto:"
          aria-label="Email Address"
          className="hover:font-bold flex justify-center items-center gap-3"
        >
          <HiOutlineMail />
          bnkin.remodeling@yahoo.com
        </a>
      </p>
    </div>
  );
};

export default FooterCard;
