import React, { useState } from "react";
import VizArenaInput from "../images/viz_arena_input.jpg";
import VizArena from "../images/viz_arena_img.jpg";
import Image from "next/image";
import Link from "next/link";
import backButton from "../images/back-button.png"

const VizArenaDemo: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  // Function to handle changes in the color picker
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const toggleImagePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <div>
      <div className="flex pt-4 md:pl-96 lg:pl-52">
        <Link href="/demoInfoPage1">
          <Image src={backButton} alt="Back button" width={32} height={32}></Image>
        </Link>
        <p className="text-white text-lg pl-4 pt-0.5">Demo review</p>
      </div>

      <div className="pl-4 lg:pl-52 pt-4 relative flex flex-col lg:flex-row md: pl-40">
        <Image src={VizArenaInput} alt="Viz Arena Demo Picture" className="w-full md:w-3/5 lg:w-2/5 h-fill rounded-xl border border-gray-900" />
        <div className="max-w-xl bg-gray-900 rounded-xl mx-4 md:mx-8 lg:mx-12 p-4 mt-4 md:mt-0 lg:mt-0">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Name:</p>
              <input type="text" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" placeholder="Type here" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Number:</p>
              <input type="number" className="bg-white py-2 rounded-lg w-2/3 px-3 text-base" placeholder="1" min="1" max="99" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Nation:</p>
              <select className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base">
                <option value="Select Nation">Select Nation</option>
                <option value="Select Nation">Brazil</option>
                <option value="Select Nation">Canada</option>
                <option value="Select Nation">China</option>
                <option value="Select Nation">Germany</option>
                <option value="Select Nation">France</option>
                <option value="Select Nation">India</option>
                <option value="Select Nation">Japan</option>
                <option value="Select Nation">Norway</option>
                <option value="Select Nation">United Kingdom</option>
                <option value="Select Nation">United States</option>


              </select>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Colour:</p>
              <input type="color" value={selectedColor} onChange={handleColorChange} className="h-8 w-2/3 rounded-lg" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Opacity:</p>
              <input type="text" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" value="60 %" />
            </div>

            <div className="flex items-center space-x-3">
              <p className="text-white font-medium text-lg">X:</p>
              <input type="text" className="bg-white py-2 rounded-lg font-medium text-base w-1/3 px-8" value="80 %" />
              <p className="text-white font-medium text-lg">Y:</p>
              <input type="text" className="bg-white py-2 rounded-lg font-medium text-base w-1/3 px-8" value="15 %" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Duration:</p>
              <input type="number" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" min="5" max="15" placeholder="5 seconds" />
            </div>

            <div className="lg: flex justify-evenly">
              <div onClick={toggleImagePreview} className="cursor-pointer">
                <button className="text-white font-medium text-base rounded-lg px-4 py-2 w-36 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                  Test
                </button>
              </div>

              <Link href="/cart">
                <button className="text-white font-medium text-base rounded-lg px-4 py-2 w-36 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16"></div>
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={toggleImagePreview}>
          <div className="cursor-pointer" style={{ maxWidth: '60%', maxHeight: '100%' }}>
            <Image src={VizArena} alt="Viz Arena Demo Picture" layout="intrinsic" width={1200} height={675} objectFit="contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VizArenaDemo;
