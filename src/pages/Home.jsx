import React, { forwardRef, useRef, useState } from "react";
import ContactCard from "../cards/ContactCard";
import {
  GallerySection,
  ServicesSection,
  TestimonialsSection,
} from "../sections";
import { HomePageImg } from "../assets/index";
import AboutSection from "../sections/AboutSection";

const Home = () => {
  return (
    <div id="home" className="">
      <div>
        <img
          src={HomePageImg}
          alt="homepage-img"
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="mx-auto px-10 max-w-[1000px]">
        <section id="aboutSection">
          <AboutSection />
        </section>
        <div className="flex flex-col items-center">
          <section id="testimonialsSection" className="bg-primary w-[100vw]">
            <TestimonialsSection />
          </section>
          <section id="gallerySection" className="py-16">
            <GallerySection />
          </section>
          <hr aria-hidden="true" className="size-1 bg-primary w-4/5" />
          <section id="servicesSection" className="py-16">
            <ServicesSection />
          </section>
          <hr aria-hidden="true" className="size-1 bg-primary w-4/5" />
          <section id="contactSection" className="w-full pt-16">
            <ContactCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
