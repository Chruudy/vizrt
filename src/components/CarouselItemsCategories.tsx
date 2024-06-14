"use client";
import React from "react";
import Carousel from "./Carousel";
import tennis from "../images/tennis.webp";
import football from "../images/football.webp";
import esport2 from "../images/esport2.jpg";
import volleyball from "../images/volleyball.jpg";
import basketball from "../images/basketball.jpg";
import golf from "../images/golf.jpeg";

//This is the images array that contains the images to be displayed in the carousel
const images = [tennis, football, esport2, volleyball, basketball, golf].map(
  (image) => image.src
);

//This is the CarouselItemsCategories component that displays a 3D carousel of images
const CarouselItemsCategories = () => (
  <div className="relative flex flex-col items-center justify-center">
    <Carousel images={images} />
  </div>
);

export default CarouselItemsCategories;
