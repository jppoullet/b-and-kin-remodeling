import React from "react";
import { AboutMeImg } from "../assets/index";

const AboutSection = () => {
  return (
    <div className="py-16">
      <h1 className="text-2xl text-center font-bold">
        B & Kin Remodeling - 25 Years of Excellence in Columbus, Ohio
      </h1>
      <br />
      <p className="text-center">
        In Business Since 2011. Our business is Family owned and operated.
      </p>
      <br />
      <p className="mx-auto">
        B & Kin Remodeling is your trusted professional for transforming your
        living spaces. From concept to completion, my expertise ensures quality
        craftsmanship and attention to detail. Let's bring your home improvement
        dreams to life!
      </p>
      <br />
      <img src={AboutMeImg} alt="ben-img" className="w-[450px] mx-auto" />
      <br />
      <p>
        Hello, I am Benjamin Pinero - Owner of B & Kin Remodeling. My goal is to
        provide you with efficient, accurate and timely home improvement work,
        with integrity and a guarantee that exceeds any of our customer's
        expectations. With our 25 years of experience, we realize how important
        communication is about your most important asset. That's why at every
        job, large or small; I am on site to make sure the job is done right.
      </p>
    </div>
  );
};

export default AboutSection;
