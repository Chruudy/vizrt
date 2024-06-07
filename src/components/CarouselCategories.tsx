"use client";
import React, { useState } from "react";
import Image from "next/image";
import tennis from '../images/tennis.webp';
import football from '../images/football.webp';
import esport2 from '../images/esport2.jpg';
import volleyball from '../images/volleyball.jpg';
import basketball from '../images/basketball.jpg';
import golf from '../images/golf.jpeg';

const images = [
  { src: tennis, alt: 'Tennis', text: 'Tennis' },
  { src: football, alt: 'Football', text: 'Football' },
  { src: esport2, alt: 'E-sport', text: 'E-sport' },
  { src: volleyball, alt: 'Volleyball', text: 'Volleyball' },
  { src: basketball, alt: 'Basketball', text: 'Basketball' },
  { src: golf, alt: 'Golf', text: 'Golf' },
];

const CarouselCategories = () => {
  const middleIndex = Math.floor(images.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);

  const handlePrev = () =>
    setActiveIndex((prevActiveIndex) => {
      const newIndex = prevActiveIndex - 1;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });

  const handleNext = () =>
    setActiveIndex((prevActiveIndex) => {
      const newIndex = prevActiveIndex + 1;
      return newIndex >= images.length ? 0 : newIndex;
    });

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="mb-16">
      </div>
      <div className="relative flex items-center justify-center perspective mt-16">
        <button
          onClick={handlePrev}
          className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-96 p-4 bg-orange-500 text-white rounded-full z-40 flex items-center justify-center ${activeIndex === 0 ? 'opacity-50' : ''}`}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute bottom-4 left-0 right-0 text-white text-center text-xs font-bold">
                  {image.text}
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className={`absolute right-1/2 top-1/2 transform -translate-y-1/2 translate-x-96 p-4 bg-orange-500 text-white rounded-full z-40 flex items-center justify-center ${activeIndex === images.length - 1 ? 'opacity-50' : ''}`}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          disabled={activeIndex === images.length - 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CarouselCategories;