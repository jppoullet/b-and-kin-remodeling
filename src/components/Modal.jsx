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
    let slider = document.getElementById("sliderr");
    slider.scrollLeft = slider.scrollLeft - 100;
  };

  const slideRight = () => {
    let slider = document.getElementById("sliderr");
    slider.scrollLeft = slider.scrollLeft + 100;
  };

  const prevImg = () => {
    // setCurrentImg((currentImg) =>
    //   currentImg === 0 ? images.length - 1 : currentImg - 1
    // );
    let slider = document.getElementById("sliderr");
    if (currentImg === 0) {
      slider.scrollTo(10000, 0);
      setCurrentImg(images.length - 1);
    } else {
      slider.scrollLeft = slider.scrollLeft - 100;
      setCurrentImg(currentImg - 1);
    }
  };

  const nextImg = () => {
    // setCurrentImg((currentImg) =>
    //   currentImg === images.length - 1 ? 0 : currentImg + 1
    // );
    // // let nextImgBtn = document.getElementById("nextImgBtn");
    let slider = document.getElementById("sliderr");
    if (currentImg === images.length - 1) {
      slider.scrollTo(0, 0);
      setCurrentImg(0);
    } else {
      slider.scrollLeft = slider.scrollLeft + 100;
      setCurrentImg(currentImg + 1);
    }
  };

  return (
    <>
      <button
        className="rounded-full bg-primary text-white py-2 px-5 my-2 shadow-md hover:bg-alternate hover:scale-105 transform transition duration-150"
        onClick={toggleDialog}
      >
        View Our Work
      </button>
      <dialog
        ref={dialogRef}
        className="min-w-full min-h-full text-white bg-black bg-opacity-90"
      >
        <div className="flex flex-col items-end">
          <div className="h-[600px] w-full flex justify-center items-center px-9 md:h-[800px] md:gap-2">
            <div className="flex items-center">
              <button
                id="prevImgBtn"
                className="rounded-full p-2 text-black bg-white opacity-80 hover:opacity-100"
              >
                <BsChevronCompactLeft
                  className="size-5 md:size-9"
                  onClick={prevImg}
                />
              </button>
            </div>
            <img
              src={images[currentImg].img}
              alt=""
              className="object-contain h-[600px] md:h-full md:w-[800px] px-0"
            />
            <div className="flex items-center">
              <button
                id="nextImgBtn"
                className="rounded-full p-2 text-black bg-white opacity-80 hover:opacity-100"
              >
                <BsChevronCompactRight
                  className="size-5 md:size-9"
                  onClick={nextImg}
                />
              </button>
            </div>
            {/* <div className="flex items-center justify-between absolute w-full"></div> */}
          </div>

          <div className="flex items-center">
            <div
              id="sliderr"
              className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
            >
              {images.map((image, index) => (
                <img
                  className="w-[100px] inline-block p-2 cursor-point hover:scale-105 ease-in-out duration-200"
                  src={image.img}
                  alt="/"
                  key={image.id}
                  onClick={() => {
                    setCurrentImg(index);
                  }}
                ></img>
              ))}
            </div>
          </div>

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
