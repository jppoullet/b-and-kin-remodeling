import React from "react";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";

const FooterCard = () => {
  return (
    <div className="flex flex-col items-center text-center pt-12 pb-16 mt-10 bottom-0 leading-relaxed bg-primary text-secondary">
      <h2 className="text-xl">Contact</h2>
      <br />
      <h3>Benjamin - Owner</h3>

      <a
        href="tel:6143906882"
        aria-label="Phone Number"
        className="hover:font-bold flex justify-center items-center gap-3 mt-4"
      >
        <HiOutlinePhone />
        614-390-6882
      </a>

      <a
        href="mailto:"
        aria-label="Email Address"
        className="hover:font-bold flex justify-center items-center gap-3"
      >
        <HiOutlineMail />
        bnkin.remodeling@yahoo.com
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100063549162496"
        className="mt-2 hover:scale-110"
      >
        <FaFacebookSquare size={40} />
      </a>
    </div>
  );
};

export default FooterCard;
