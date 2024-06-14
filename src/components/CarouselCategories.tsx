"use client";
import React, { useState } from "react";
import Image from "next/image";
import tennis from "../images/tennis.webp";
import football from "../images/football.webp";
import esport2 from "../images/esport2.jpg";
import volleyball from "../images/volleyball.jpg";
import basketball from "../images/basketball.jpg";
import golf from "../images/golf.jpeg";

// This is the images array that contains the images to be displayed in the carousel
const images = [
  { src: tennis, alt: "Tennis", text: "Tennis" },
  { src: football, alt: "Football", text: "Football" },
  { src: esport2, alt: "E-sport", text: "E-sport" },
  { src: volleyball, alt: "Volleyball", text: "Volleyball" },
  { src: basketball, alt: "Basketball", text: "Basketball" },
  { src: golf, alt: "Golf", text: "Golf" },
];

// This is the CarouselCategories component that displays a 3D carousel of images
const CarouselCategories = () => {
  const middleIndex = Math.floor(images.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);

// This function is used to handle the previous button click event
  const handlePrev = () =>
    setActiveIndex((prevActiveIndex) => {
      const newIndex = prevActiveIndex - 1;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });

// This function is used to handle the next button click event
  const handleNext = () =>
    setActiveIndex((prevActiveIndex) => {
      const newIndex = prevActiveIndex + 1;
      return newIndex >= images.length ? 0 : newIndex;
    });

  return (
    // This is the container for the carousel
    <div className="relative flex flex-col items-center justify-center mt-14">
      <div className="relative flex items-center justify-center perspective mt-14">
        <button
          onClick={handlePrev}
          className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-96 p-4 bg-brandOrange text-white rounded-full z-40 flex items-center justify-center w-10 h-10 ${
            activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={activeIndex === 0}
        >
          {"<"}
        </button>
        <div className="relative w-24 h-24">
          {images.map((image, index) => {
            const rotation = (index - activeIndex) * (180 / images.length);
            const isCurrent = index === activeIndex;
            const isNextOrPrev =
              Math.abs(index - activeIndex) === 1 ||
              Math.abs(index - activeIndex) === images.length - 1;
            const isNotInSight =
              Math.abs(index - activeIndex) > 1 &&
              Math.abs(index - activeIndex) < images.length - 1;
            return (
              <div
                key={index}
                className={`rounded-xl absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                  isCurrent
                    ? "opacity-100 z-30"
                    : isNextOrPrev
                    ? "opacity-100 z-20"
                    : isNotInSight
                    ? "opacity-100 z-10"
                    : "opacity-100 z-10"
                }`}
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(280px) scale(3)`,
                  height: isCurrent ? "80%" : isNextOrPrev ? "70%" : "60%",
                  top: isCurrent ? "-10%" : isNextOrPrev ? "-5%" : "0",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="relative w-full h-full group rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 text-white text-center font-bold bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ fontSize: "0.625rem" }}
                  >
                    {image.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className={`absolute right-1/2 top-1/2 transform -translate-y-1/2 translate-x-96 p-4 bg-brandOrange text-white rounded-full z-40 flex items-center justify-center w-10 h-10 ${
            activeIndex === images.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={activeIndex === images.length - 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CarouselCategories;
