import React from "react";
import { GallerySection } from "../sections";
import { images } from "../assets";

const Services = () => {
  // const imgByRoom = images.reduce((acc, item) => {
  //   const room = item.room;
  //   if (!acc[room]) {
  //     acc[room] = [];
  //   }
  //   acc[room].push(item.img);
  //   return acc;
  // }, {});

  const imgByRoom = images.filter((item) => {
    return item.room == "flooring";
  });

  // console.log(imgByRoom);

  return (
    <div className="text-center my-10 mx-auto px-10 max-w-[1000px]">
      <h1 className="text-xl">
        Specialty in bathrooms, basements, kitchens and interior work
      </h1>
      <br />
      <h2 className="">Bathrooms</h2>
      <div>
        {images.map((item) => {
          return <img src={item.img}></img>;
        })}
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
