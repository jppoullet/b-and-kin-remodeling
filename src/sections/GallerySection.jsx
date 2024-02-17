import React, { useState } from "react";
import { images } from "../assets";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Modal from "../components/Modal";

const GallerySection = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const homePageImages = images.slice(0, 4);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center">
        {/* <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideLeft}
        /> */}
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {homePageImages.map((image) => (
            <img
              className="w-[220px] inline-block p-2 cursor-point hover:scale-105 ease-in-out duration-200"
              src={image.img}
              alt="/"
              key={image.id}
            ></img>
          ))}
        </div>
        {/* <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideRight}
        /> */}
      </div>
      <Modal />
    </div>
  );
};

export default GallerySection;
