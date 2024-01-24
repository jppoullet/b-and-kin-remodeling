import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Testimonials, Services } from "./pages";
import Gallery from "./pages/Gallery";
import GallerySection from "./sections/GallerySection";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
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
}

export default App;
