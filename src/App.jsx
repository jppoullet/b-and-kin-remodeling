import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Testimonials, Services } from "./pages";
import Gallery from "./pages/Gallery";
import FooterCard from "./cards/FooterCard";

function App() {
  return (
    <div className="font-lato">
      <header>
        <Navbar />
      </header>
      <main className="mt-[168px]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <footer>
        <FooterCard />
      </footer>
    </div>
  );
}

export default App;
