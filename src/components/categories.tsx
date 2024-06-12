import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import sport from "../images/sport.jpeg";
import graphics from "../images/graphics.jpeg";
import virtual from "../images/virtual.webp";
import esport from "../images/esport.jpeg";
import live from "../images/live.jpeg";

const Categories: React.FC = () => {
  const router = useRouter();
  const isSportsPage = router.pathname === "/categoriesPage";

  return (
    <div className="flex flex-col justify-center items-center my-2">
      <ul className="flex justify-center space-x-4">
        <li className="flex flex-col items-center">
          <Link href="/categoriesPage">
            <button
              className={`relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-200 
                  ${isSportsPage ? "scale-105" : "hover:scale-105"
                }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={sport}
                  alt="Sport"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <span className="relative text-white z-10 font-bold">Sport</span>
            </button>
          </Link>
          {isSportsPage && (
            <div className="w-full h-0.5 mt-2 bg-orange-500 rounded-full"></div>
          )}
        </li>
        <li className="flex flex-col items-center">
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={graphics}
                alt="Graphics"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <span className="relative text-white z-10 font-bold">Graphics</span>
          </button>
        </li>
        <li className="flex flex-col items-center">
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={virtual}
                alt="Virtual & XR"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <span className="relative text-white z-10 font-bold">Virtual & XR</span>
          </button>
        </li>
        <li className="sm:flex hidden flex-col items-center">
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={esport}
                alt="E-sport"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <span className="relative text-white z-10 font-bold">E-sport</span>
          </button>
        </li>
        <li className="sm:flex hidden flex-col items-center">
          <button className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0">
              <Image
                src={live}
                alt="Live Production"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <span className="relative text-white z-10 font-bold">Live Production</span>
          </button>
        </li>
      </ul>
      <Link href="/allProductsPage">
        <button className="my-8 px-4 py-2 text-base font-medium text-white rounded-md bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200">
          View all Products
        </button>
      </Link>
    </div>
  );
};

export default Categories;