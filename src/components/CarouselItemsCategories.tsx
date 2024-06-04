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

const CarouselItemsCategories = () => <Carousel images={images} />;
export default CarouselItemsCategories;