import React from "react";

const ServicesSection = () => {
  return (
    <div className="text-center w-full">
      <h2 className="md:text-3xl text-2xl font-bold">Services Offered</h2>

      <div className="flex justify-between gap-20 mt-3">
        <ul>
          <li>Bathrooms</li>
          <li>Kitchens</li>
          <li>Basements</li>
          <li>Bathrooms</li>
        </ul>
        <ul>
          <li>Tile Work</li>
          <li>Door Install</li>
          <li>Flooring Install</li>
          <li>Painting</li>
          <li>Drywall</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;
