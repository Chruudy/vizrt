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
    <div className="flex flex-col items-center mb-4">
      <h2 className="text-2xl text-white">Sub-Categories</h2>
      <div className="border-t border-white mt-2" style={{ width: '150%' }}></div>
    </div>
    <Carousel images={images} />
  </div>
);

export default CarouselItemsCategories;
