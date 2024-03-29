import React, { useRef, useState } from "react";
import { images } from "../assets";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Services = () => {
  const [currentImg, setCurrentImg] = useState(images[0].img);

  const imgByRoom = images.filter((item) => {
    return item.room == "flooring";
  });

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <div className="text-center my-10 pt-10 mx-auto px-10 max-w-[1000px]">
      <h1 className="text-xl">
        Specialty in bathrooms, basements, kitchens and interior work
      </h1>
      <br />
      <div className="group -z-50 flex justify-center items-center">
        <div className="hidden group-hover:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft size={30} className="" />
        </div>

        <img src={currentImg} alt="" className="object-contain h-[600px]" />

        <div className="hidden group-hover:block text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight size={30} className="" />
        </div>
      </div>

      <div className="flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideLeft}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {images.map((image) => (
            <img
              className="w-[100px] inline-block p-2 cursor-point hover:scale-105 ease-in-out duration-200"
              src={image.img}
              alt="/"
              key={image.id}
            ></img>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={40}
          onClick={slideRight}
        />
      </div>

      {/* {images
        .filter((item) => {
          return item.room == "bath";
        })
        .map((item) => {
          return <img src={item.img} key={item.id}></img>;
        })} */}
    </div>
  );
};

export default Services;
