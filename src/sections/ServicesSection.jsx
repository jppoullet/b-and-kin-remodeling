import React from "react";

const ServicesSection = () => {
  return (
    <div className="text-center w-full">
      <h1 className="text-2xl">Services Offered</h1>
      <br />
      <div className="flex justify-between">
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
