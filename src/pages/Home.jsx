import React from "react";
import GallerySection from "../sections/GallerySection";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";
import HomePageImg from "../assets/HomePageImg.jpg";
import ContactCard from "../cards/ContactCard";

const Home = () => {
  return (
    <div className="mx-10">
      <div>
        <img src={HomePageImg} alt="homepage-img" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero,
        voluptatem eaque repellendus aliquid earum esse officiis sapiente atque
        ipsam adipisci fuga. Maxime esse in distinctio cum, suscipit amet
        excepturi?
      </p>
      <div className="flex flex-col items-center">
        <ContactCard />
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
