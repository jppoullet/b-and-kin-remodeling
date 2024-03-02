import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages";
import FooterCard from "./cards/FooterCard";

function App() {
  return (
    <div className="font-lato">
      <Navbar />

      <main className="mt-[95px]">
        <Home />
      </main>
      <footer>
        <FooterCard />
      </footer>
    </div>
  );
}

export default App;
