import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Football1 from "../images/Football1.avif";
import Football2 from "../images/Football2.jpg";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.webp";

const images = [
  { src: Football1.src, price: 10, lastPublished: "2022-05-15", mostSold: 123, name: "Ronaldo Soccer", graphicType: "Scoreboard", type: "sport" },
  { src: Football2.src, price: 15, lastPublished: "2023-01-20", mostSold: 456, name: "Perfect Goalkeeper", graphicType: "Lower Thirds", type: "sport" },
  { src: news1.src, price: 5, lastPublished: "2023-08-10", mostSold: 789, name: "News Transition", graphicType: "Transitions", type: "news" },
  { src: news2.src, price: 8, lastPublished: "2023-11-25", mostSold: 321, name: "Maldives Ban", graphicType: "Scoreboard", type: "news" },
  { src: news3.src, price: 12, lastPublished: "2024-03-12", mostSold: 654, name: "Multiple News", graphicType: "Transitions", type: "news" }
];

// Define types for image parts and categories
interface Image {
  name: string;
  src: string;
  price: number;
  lastPublished: string;
  mostSold: number;
  graphicType: string;
  type: string;
}

const AllProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show-all");
  const [sortBy, setSortBy] = useState("LastPublished");
  const [selectedType, setSelectedType] = useState("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (criteria: string) => {
    setSortBy(criteria);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const sportsImages: Image[] = images.filter(image => image.type === "sport");
  const newsImages: Image[] = images.filter(image => image.type === "news");
  

  const renderImages = () => {
    let filteredImages: Image[] = [];
    if (selectedCategory === "Show-all") {
      filteredImages = images;
    } else if (selectedCategory === "Sports") {
      filteredImages = sportsImages;
    } else if (selectedCategory === "News") {
      filteredImages = newsImages;
    }

    // Filter images based on selected type
    if (selectedType !== "All") {
      filteredImages = filteredImages.filter(image => image.graphicType === selectedType);
    }

    // Sort images based on selected criteria
    if (sortBy === "Price") {
      filteredImages.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Alphabetical") {
      filteredImages.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "ReverseAlphabetical") {
      filteredImages.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "LastPublished") {
      filteredImages.sort((a, b) => new Date(b.lastPublished).getTime() - new Date(a.lastPublished).getTime());
    } else if (sortBy === "MostSold") {
      filteredImages.sort((a, b) => b.mostSold - a.mostSold);
    }

    return filteredImages.map((image, index) => (
      <div key={index} className="flex flex-col items-center mb-4">
        <img src={image.src} alt={`Image ${index}`} className="w-32 h-auto rounded-lg" />
        <p className="mt-2 text-white">${image.name}</p>
        <p className="mt-2 text-white">${image.price}</p>
        <p className="mt-2 text-white">${image.type}</p>
      </div>
    ));
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="grid grid-cols-4">
        <div className="bg-brandBGLighter h-full p-4">
          <div className="relative">
            <label className="block text-white font-bold mb-2" htmlFor="Category">
              Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Show-all">Show all</option>
              <option value="Sports">Sports</option>
              <option value="News">News</option>
            </select>
            {/* Dropdown for selecting type */}
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="graphicType">
              Graphic Type:
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="All">All</option>
              <option value="Scoreboard">Scoreboard</option>
              <option value="Lower Thirds">Lower Thirds</option>
              <option value="Transitions">Transitions</option>
            </select>
          </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 13.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-brandBG p-4 col-span-3">
          {/* Dropdown for sorting */}
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="sortBy">
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Price">Price</option>
              <option value="Alphabetical">Alphabetical</option>
              <option value="ReverseAlphabetical">Reverse Alphabetical</option>
              <option value="LastPublished">Last Published</option>
              <option value="MostSold">Most Sold</option>
            </select>
          </div>
          {/* Render images */}
          <div className="flex flex-wrap justify-around">{renderImages()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProductsPage;
