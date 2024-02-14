import React, { useState } from "react";
import { GallerySection } from "../sections";
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

<section class="gallery">
  <div class="gallery__item">
    <input
      type="radio"
      id="img-1"
      checked
      name="gallery"
      class="gallery__selector"
    />
    <img
      class="gallery__img"
      src="https://picsum.photos/id/1015/600/400.jpg"
      alt=""
    />
    <label for="img-1" class="gallery__thumb">
      <img src="https://picsum.photos/id/1015/150/100.jpg" alt="" />
    </label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector" />
    <img
      class="gallery__img"
      src="https://picsum.photos/id/1039/600/400.jpg"
      alt=""
    />
    <label for="img-2" class="gallery__thumb">
      <img src="https://picsum.photos/id/1039/150/100.jpg" alt="" />
    </label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-3" name="gallery" class="gallery__selector" />
    <img
      class="gallery__img"
      src="https://picsum.photos/id/1057/600/400.jpg"
      alt=""
    />
    <label for="img-3" class="gallery__thumb">
      <img src="https://picsum.photos/id/1057/150/100.jpg" alt="" />
    </label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-4" name="gallery" class="gallery__selector" />
    <img
      class="gallery__img"
      src="https://picsum.photos/id/106/600/400.jpg"
      alt=""
    />
    <label for="img-4" class="gallery__thumb">
      <img src="https://picsum.photos/id/106/150/100.jpg" alt="" />
    </label>
  </div>
</section>;

export default Services;
