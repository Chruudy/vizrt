"use client";
import React from 'react';
import Carousel from './Carousel';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

const images = [img1, img2, img3, img4, img5, img6].map((image) => image.src);

const CarouselItems = () => <Carousel images={images} />;
export default CarouselItems;