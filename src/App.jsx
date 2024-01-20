import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import { Home, About, Contact, Testimonials, Services } from "./pages";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
