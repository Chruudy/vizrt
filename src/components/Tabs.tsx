import React, { useState } from "react";
import Image from "next/image";

import unitedgraphic1 from "../images/unitedgraphic1.jpg";
import graphic1 from "../images/graphic1.webp";
import graphic2 from "../images/graphic2.webp";
import graphic3 from "../images/graphic3.webp";
import graphic4 from "../images/graphic4.webp";
import graphic5 from "../images/graphic5.jpeg";
import unitedgraphic2 from "../images/unitedgraphic2.jpg";
import graphic6 from "../images/graphic6.webp";
import graphic7 from "../images/graphic7.jpeg";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Owned");

  const images: any = {
    Owned: [
      { src: unitedgraphic1, alt: "Owned Image 1" },
      { src: graphic1, alt: "Owned Image 2" },
      { src: graphic2, alt: "Owned Image 3" },
    ],
    Wishlist: [
      { src: graphic3, alt: "Wishlist Image 1" },
      { src: graphic4, alt: "Wishlist Image 2" },
      { src: graphic5, alt: "Wishlist Image 3" },
    ],
    Projects: [
      { src: unitedgraphic2, alt: "Projects Image 1" },
      { src: graphic6, alt: "Projects Image 2" },
      { src: graphic7, alt: "Projects Image 3" },
    ],
  };

  return (
    <div className="text-center w-full">
      <div className="border-t border-white w-full mt-8" />
      <div className="flex justify-start mt-16 ml-4">
        {["Owned", "Wishlist", "Projects"].map((tab) => (
          <button
            key={tab}
            className={`mx-2 py-2 px-4 rounded-lg text-black ${
              activeTab === tab
                ? "bg-brandOrange shadow-lg transform scale-105 rounded-full"
                : "bg-grey010 rounded"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex justify-start mt-8 ml-4 space-x-4">
        {images[activeTab].map((image: any, index: any) => (
          <div
            key={index}
            className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
