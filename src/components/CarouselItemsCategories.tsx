"use client";
import React from 'react';
import Carousel from './Carousel';
import tennis from '../images/tennis.webp';
import football from '../images/football.webp';
import esport2 from '../images/esport2.jpg';
import volleyball from '../images/volleyball.jpg';
import basketball from '../images/basketball.jpg';
import golf from '../images/golf.jpeg';

const images = [tennis, football, esport2, volleyball, basketball, golf].map((image) => image.src);

const CarouselItemsCategories = () => (
  <div className="relative flex flex-col items-center justify-center">
    <div className="mb-16">
      <h2 className="mt-6 text-sm font-medium text-white w-64 h-10 flex items-center justify-center rounded-md">
        Hello world
      </h2>
    </div>
    <Carousel images={images} />
  </div>
);

export default CarouselItemsCategories;
