import React, { useEffect, useRef, useState } from "react";
import { images } from "../assets";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Modal = () => {
  const dialogRef = useRef();

  const [currentImg, setCurrentImg] = useState(0);

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  const prevImg = () => {
    setCurrentImg((currentImg) =>
      currentImg === 0 ? images.length - 1 : currentImg - 1
    );
  };

  const nextImg = () => {
    setCurrentImg((currentImg) =>
      currentImg === images.length - 1 ? 0 : currentImg + 1
    );
  };

  return (
    <>
      <button
        className="rounded-full bg-primary text-white py-2 px-5 my-2"
        onClick={toggleDialog}
      >
        View More of Our Work
      </button>
      <dialog
        ref={dialogRef}
        className="bg-black min-w-full min-h-full text-white text-6xl backdrop-opacity-15"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="h-[600px] w-full flex flex-col justify-center relative">
            <img
              src={images[currentImg].img}
              alt=""
              className="object-contain h-[600px] px-10"
            />
            <div className="flex items-center justify-between absolute w-full">
              <button className="text-2xl rounded-full p-2 text-black bg-white opacity-80 hover:opacity-100">
                <BsChevronCompactLeft className="size-5" onClick={prevImg} />
              </button>
              <button className="text-2xl rounded-full p-2 text-black bg-white opacity-80 hover:opacity-100">
                <BsChevronCompactRight className="size-5" onClick={nextImg} />
              </button>
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={40}
              onClick={slideLeft}
            />
            <div
              id="slider"
              className="w-1/2 h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
            >
              {images.map((image) => (
                <img
                  className="w-[100px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-200"
                  src={image.img}
                  alt="/"
                  key={image.id}
                  onClick={() => {
                    setCurrentImg(image.img);
                  }}
                ></img>
              ))}
            </div>
            <MdChevronRight
              className="opacity-50 cursor-pointer hover:opacity-100"
              size={40}
              onClick={slideRight}
            />
          </div> */}
          <button
            onClick={toggleDialog}
            className="p-2 bg-secondary opacity-80 hover:opacity-100 text-black rounded-lg text-xl absolute top-7 right-7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
