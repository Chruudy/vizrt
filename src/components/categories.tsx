import React from "react";
import Image from "next/image";
import sport from "../images/sport.jpeg";
import graphics from "../images/graphics.jpeg";
import virtual from "../images/virtual.webp";
import esport from "../images/esport.jpeg";
import live from "../images/live.jpeg";

const Categories: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-2">
      <ul className="flex justify-center space-x-4">
        <li>
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={sport}
                alt="Sport"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="relative text-white z-10 font-bold">Sport</span>
          </button>
        </li>
        <li>
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={graphics}
                alt="Graphics"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="relative text-white z-10 font-bold">Graphics</span>
          </button>
        </li>
        <li>
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={virtual}
                alt="Virtual & XR"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="relative text-white z-10 font-bold">Virtual & XR</span>
          </button>
        </li>
        <li className="sm:flex hidden">
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={esport}
                alt="E-sport"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="relative text-white z-10 font-bold">E-sport</span>
          </button>
        </li>
        <li className="sm:flex hidden">
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={live}
                alt="Live Production"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="relative text-white z-10 font-bold">Live Production</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
