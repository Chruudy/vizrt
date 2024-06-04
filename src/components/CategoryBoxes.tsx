import React, { useState } from 'react';

const images1 = [
  { src: '/path/to/graphic1.jpg', alt: 'Graphic 1' },
  { src: '/path/to/graphic2.jpg', alt: 'Graphic 2' },
  { src: '/path/to/graphic3.jpg', alt: 'Graphic 3' },
  { src: '/path/to/graphic4.jpg', alt: 'Graphic 4' },
  { src: '/path/to/graphic5.jpg', alt: 'Graphic 5' },
  { src: '/path/to/graphic6.jpg', alt: 'Graphic 6' },
  { src: '/path/to/graphic7.jpg', alt: 'Graphic 7' },
  { src: '/path/to/graphic8.jpg', alt: 'Graphic 8' },
  { src: '/path/to/graphic9.jpg', alt: 'Graphic 9' },
  { src: '/path/to/graphic10.jpg', alt: 'Graphic 10' },
  { src: '/path/to/graphic11.jpg', alt: 'Graphic 11' },
  { src: '/path/to/graphic12.jpg', alt: 'Graphic 12' },
  { src: '/path/to/graphic13.jpg', alt: 'Graphic 13' },
  { src: '/path/to/graphic14.jpg', alt: 'Graphic 14' },
  { src: '/path/to/graphic15.jpg', alt: 'Graphic 15' },
  { src: '/path/to/graphic16.jpg', alt: 'Graphic 16' },
];

const images2 = [
  { src: '/path/to/contribution1.jpg', alt: 'Contribution 1' },
  { src: '/path/to/contribution2.jpg', alt: 'Contribution 2' },
  { src: '/path/to/contribution3.jpg', alt: 'Contribution 3' },
  { src: '/path/to/contribution4.jpg', alt: 'Contribution 4' },
  { src: '/path/to/contribution5.jpg', alt: 'Contribution 5' },
  { src: '/path/to/contribution6.jpg', alt: 'Contribution 6' },
  { src: '/path/to/contribution7.jpg', alt: 'Contribution 7' },
  { src: '/path/to/contribution8.jpg', alt: 'Contribution 8' },
  { src: '/path/to/contribution9.jpg', alt: 'Contribution 9' },
  { src: '/path/to/contribution10.jpg', alt: 'Contribution 10' },
  { src: '/path/to/contribution11.jpg', alt: 'Contribution 11' },
  { src: '/path/to/contribution12.jpg', alt: 'Contribution 12' },
  { src: '/path/to/contribution13.jpg', alt: 'Contribution 13' },
  { src: '/path/to/contribution14.jpg', alt: 'Contribution 14' },
  { src: '/path/to/contribution15.jpg', alt: 'Contribution 15' },
  { src: '/path/to/contribution16.jpg', alt: 'Contribution 16' },
];

const GridItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2 focus:outline-none w-32 h-32 m-2">
    <img src={src} alt={alt} className="w-full object-cover rounded-lg" />
  </div>
);

const CategorySection = ({ title, images }: { title: string; images: { src: string; alt: string }[] }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  const handleNext = () => setSlideIndex((prevIndex) => Math.min(prevIndex + 1, 1));

  return (
    <div className="relative mb-10">
      <h2 className="mb-2 text-xl font-semibold text-white">{title}</h2>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          <div className="flex">
            {images.slice(0, 8).map((image, index) => (
              <GridItem key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="flex">
            {images.slice(8, 16).map((image, index) => (
              <GridItem key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>
      {slideIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-orange-500 text-white rounded-full"
        >
          {"<"}
        </button>
      )}
      {slideIndex < 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-orange-500 text-white rounded-full"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

const CategoryBoxes = () => {
  return (
    <div className="p-5" style={{ backgroundColor: '#1D3641' }}>
      <CategorySection title="Text 1" images={images1} />
      <CategorySection title="Text 2" images={images2} />
    </div>
  );
};

export default CategoryBoxes;
