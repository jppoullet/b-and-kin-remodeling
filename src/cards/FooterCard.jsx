import React from "react";

const FooterCard = () => {
  return (
    <div className="text-center pt-12 pb-16 mt-10 bottom-0 leading-relaxed bg-primary text-secondary">
      <h1 className="text-xl">Contact</h1>
      <br />
      <p>Benjamin - Owner</p>
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
  );
};

export default FooterCard;
