"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const router = useRouter();
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

  const handleMoreClick = () => {
    router.push('/categoriesPage');
  };

  return (
    <div className="mb-24 relative flex flex-col items-center justify-center">
      <div className="mb-16">
      </div>
      <div className="relative flex items-center justify-center perspective mt-16">
        <button
          onClick={handlePrev}
          className={`absolute left-1/2 top-1/2 transform -translate-y-3/4 -translate-x-96 p-4 bg-brandOrange text-white rounded-full z-40 flex items-center justify-center ${activeIndex === 0 ? 'opacity-50' : ''}`}
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
              <Image
                key={index}
                src={image}
                alt={`Carousel image ${index}`}
                width={1000}
                height={1000}
                className={`rounded-xl absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
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
              />
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className={`absolute right-1/2 top-1/2 transform -translate-y-3/4 translate-x-96 p-4 bg-brandOrange text-white rounded-full z-40 flex items-center justify-center ${activeIndex === images.length - 1 ? 'opacity-50' : ''}`}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          disabled={activeIndex === images.length - 1}
        >
          {">"}
        </button>
      </div>
      <button
        className="mt-24 my-8 text-sm font-medium text-white w-32 h-10 flex items-center justify-center rounded-md bg-gradient-to-r from-brandOrange to-red03 shadow-lg transform hover:scale-105 transition-transform duration-200"
        onClick={handleMoreClick}
      >
        More
      </button>
    </div>
  );
};

export default Carousel;
