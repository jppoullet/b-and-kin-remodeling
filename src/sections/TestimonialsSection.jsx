import React from "react";
import Btn from "../components/Btn";

const TestimonialsSection = () => {
  return (
    <div className="text-white mx-auto px-10 py-16 max-w-[1000px]">
      <h2 className="text-center text-2xl font-bold">
        What our customers are saying
      </h2>
      <br />
      <p>
        "Benjamin did an excellent job removing our old linoleum floor and
        installing a new ceramic floor for us. Benjamin treated our home as if
        it was his own paying close attention to detail and going above and
        beyond our expectations. I highly recommend B & Kin Remodeling."
      </p>
      <br />
      <p className="font-bold text-center text-secondary">
        Tom B. - Powell, OH
      </p>
      <a href="/Testimonials">Test</a>
      <div className="text-center mt-10">
        <a href="/Testimonials">
          <Btn>View Testimonials</Btn>
        </a>
      </div>
    </div>
  );
};

export default TestimonialsSection;
