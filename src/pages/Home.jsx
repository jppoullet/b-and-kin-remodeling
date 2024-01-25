import React from "react";
import GallerySection from "../sections/GallerySection";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  return (
    <div className="mx-10">
      <div>
        <img
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/stock-photography/thumbnail.jpeg"
          alt="homepage-img"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero,
        voluptatem eaque repellendus aliquid earum esse officiis sapiente atque
        ipsam adipisci fuga. Maxime esse in distinctio cum, suscipit amet
        excepturi?
      </p>
      <div className="flex flex-col items-center mx-10">
        <section>
          <GallerySection />
        </section>
        <section>
          <ServicesSection />
        </section>
        <section>
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default Home;
