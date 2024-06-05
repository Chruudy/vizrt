import React, { useState } from 'react';
import volleyball from '../images/volleyball.jpg';
import basketball from '../images/basketball.jpg';

const sportArray = [volleyball, basketball].map((image) => image.src);

const images1 = [
  { src: sportArray[0], alt: 'Graphic 1', description: 'Volleyball game', category: 'Sports', price: '$49' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$99' },
  { src: '/path/to/graphic3.jpg', alt: 'Graphic 3', description: 'Graphic 3 description', category: 'Graphics', price: '$30' },
  { src: '/path/to/graphic4.jpg', alt: 'Graphic 4', description: 'Graphic 4 description', category: 'Graphics', price: '$40' },
  { src: '/path/to/graphic5.jpg', alt: 'Graphic 5', description: 'Graphic 5 description', category: 'Graphics', price: '$50' },
  { src: '/path/to/graphic6.jpg', alt: 'Graphic 6', description: 'Graphic 6 description', category: 'Graphics', price: '$60' },
  { src: '/path/to/graphic7.jpg', alt: 'Graphic 7', description: 'Graphic 7 description', category: 'Graphics', price: '$70' },
  { src: '/path/to/graphic8.jpg', alt: 'Graphic 8', description: 'Graphic 8 description', category: 'Graphics', price: '$80' },
  { src: '/path/to/graphic9.jpg', alt: 'Graphic 9', description: 'Graphic 9 description', category: 'Graphics', price: '$90' },
  { src: '/path/to/graphic10.jpg', alt: 'Graphic 10', description: 'Graphic 10 description', category: 'Graphics', price: '$100' },
];

const images2 = [
  { src: '/path/to/contribution1.jpg', alt: 'Contribution 1', description: 'Contribution 1 description', category: 'Contributions', price: '$10' },
  { src: '/path/to/contribution2.jpg', alt: 'Contribution 2', description: 'Contribution 2 description', category: 'Contributions', price: '$20' },
  { src: '/path/to/contribution3.jpg', alt: 'Contribution 3', description: 'Contribution 3 description', category: 'Contributions', price: '$30' },
  { src: '/path/to/contribution4.jpg', alt: 'Contribution 4', description: 'Contribution 4 description', category: 'Contributions', price: '$40' },
  { src: '/path/to/contribution5.jpg', alt: 'Contribution 5', description: 'Contribution 5 description', category: 'Contributions', price: '$50' },
  { src: '/path/to/contribution6.jpg', alt: 'Contribution 6', description: 'Contribution 6 description', category: 'Contributions', price: '$60' },
  { src: '/path/to/contribution7.jpg', alt: 'Contribution 7', description: 'Contribution 7 description', category: 'Contributions', price: '$70' },
  { src: '/path/to/contribution8.jpg', alt: 'Contribution 8', description: 'Contribution 8 description', category: 'Contributions', price: '$80' },
  { src: '/path/to/contribution9.jpg', alt: 'Contribution 9', description: 'Contribution 9 description', category: 'Contributions', price: '$90' },
  { src: '/path/to/contribution10.jpg', alt: 'Contribution 10', description: 'Contribution 10 description', category: 'Contributions', price: '$100' },
];

const GridItem = ({ src, alt, description, category, price }: { src: string; alt: string; description: string; category: string; price: string }) => (
  <div className="flex flex-col justify-between items-center bg-gray-200 rounded-lg p-2 focus:outline-none w-48 h-72 m-2 relative">
    <img src={src} alt={alt} className="w-full h-32 object-cover rounded-lg" />
    <div className="mt-2 text-sm text-center">
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
    </div>
    {alt === 'Graphic 1' && (
      <button className="text-xs font-medium text-white w-24 h-8 flex items-center justify-center rounded-md bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2">
        Quick Review
      </button>
    )}
  </div>
);

const CategorySection = ({ title, images, link }: { title: string; images: { src: string; alt: string; description: string; category: string; price: string }[], link: string }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  const handleNext = () => setSlideIndex((prevIndex) => Math.min(prevIndex + 1, 1));

  return (
    <div className="relative mb-10">
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold text-white mr-2">{title}</h2>
        <button className="text-xl font-semibold text-white bg-orange-500 rounded-full p-2" onClick={() => window.location.href = link}>
          {">"}
        </button>
      </div>
      <div className="overflow-hidden" style={{ maxWidth: 'calc(6 * 12rem)' }}>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          <div className="flex">
            {images.slice(0, 6).map((image, index) => (
              <GridItem key={index} src={image.src} alt={image.alt} description={image.description} category={image.category} price={image.price} />
            ))}
          </div>
          <div className="flex">
            {images.slice(6, 12).map((image, index) => (
              <GridItem key={index} src={image.src} alt={image.alt} description={image.description} category={image.category} price={image.price} />
            ))}
          </div>
        </div>
      </div>
      {slideIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-orange-500 text-white rounded-full -ml-8"
        >
          {"<"}
        </button>
      )}
      {slideIndex < 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-orange-500 text-white rounded-full -mr-8"
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
      <CategorySection title="Most Popular Graphics" images={images1} link="/popular" />
      <CategorySection title="Latest Contributions" images={images2} link="/contributions" />
    </div>
  );
};

export default CategoryBoxes;
