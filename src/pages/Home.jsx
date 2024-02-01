import React from "react";
import ContactCard from "../cards/ContactCard";
import {
  GallerySection,
  ServicesSection,
  TestimonialsSection,
} from "../sections";
import { HomePageImg, AboutMeImg } from "../assets";
import BenImg from "../assets/DSC07714.jpg";

const Home = () => {
  return (
    <>
      <div>
        <img src={HomePageImg} alt="homepage-img" className="w-full" />
      </div>

      <div className="mx-auto px-10 max-w-[1200px]">
        <div className="py-16">
          <h1 className="text-2xl text-center font-bold">
            B & Kin Remodeling - 37 Years of Excellence in Columbus, Ohio
          </h1>
          <br />
          <img src={BenImg} alt="ben-img" className="w-[450px] mx-auto" />
          <br />
          <p className="mx-auto max-w-[1200px]">
            B & Kin Remodeling is your trusted professional for transforming
            your living spaces. As a seasoned professional, I have dedicated my
            career to delivering top-notch home remodeling services. From
            concept to completion, my expertise ensures quality craftsmanship
            and attention to detail. Let's bring your home improvement dreams to
            life!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <section className="bg-primary w-screen">
            <TestimonialsSection />
          </section>
          <section className="py-16">
            <GallerySection />
          </section>
          <hr className="size-1 bg-primary w-4/5" />
          <section className="py-16">
            <ServicesSection />
          </section>
          <hr className="size-1 bg-primary w-4/5" />
          <section className="w-full py-16">
            <ContactCard />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
