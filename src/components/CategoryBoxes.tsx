import React from 'react';

const images1 = [
  { src: '/path/to/graphic1.jpg', alt: 'Graphic 1' },
  { src: '/path/to/graphic2.jpg', alt: 'Graphic 2' },
  { src: '/path/to/graphic3.jpg', alt: 'Graphic 3' },
  { src: '/path/to/graphic4.jpg', alt: 'Graphic 4' },
  { src: '/path/to/graphic5.jpg', alt: 'Graphic 5' },
  { src: '/path/to/graphic6.jpg', alt: 'Graphic 6' },
  { src: '/path/to/graphic7.jpg', alt: 'Graphic 7' },
  { src: '/path/to/graphic8.jpg', alt: 'Graphic 8' },
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
];

const GridItem = ({ src, alt }: { src: string; alt: string }) => (
  <button className="flex justify-center items-center bg-gray-200 rounded-lg p-2 focus:outline-none">
    <img src={src} alt={alt} className="w-full object-cover rounded-lg" />
  </button>
);

const CategorySection = ({ title, images }: { title: string; images: { src: string; alt: string }[] }) => (
  <div className="mb-10">
    <h2 className="mb-2 text-xl font-semibold text-white">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
      {images.map((image, index) => (
        <GridItem key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  </div>
);

const CategoryBoxes = () => {
  return (
    <div className="p-5" style={{ backgroundColor: '#1D3641' }}>
      <CategorySection title="Text 1" images={images1} />
      <CategorySection title="Text 2" images={images2} />
    </div>
  );
};

export default CategoryBoxes;
