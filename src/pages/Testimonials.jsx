import React from "react";
import { reviews } from "../assets";

const Testimonials = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-10">
      {reviews.map((review) => (
        <div className="bg-primary text-white rounded-md p-3 shadow-md">
          <p>{review.Review}</p>
          <br />
          <p className="text-secondary">
            {review.Name} - {review.Location}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
