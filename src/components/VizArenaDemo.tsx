import React, { useState } from "react";
import VizArenaInput from "../images/vizarenainput.jpg";
import Image from "next/image";
import Link from "next/link";
import backButton from "../images/back-button.png";

const VizArenaDemo: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <div className="flex pt-4 pl-8">
        <Link href="/demoInfoPage1">
          <Image src={backButton} alt="Back button" className="w-8 h-auto" />
        </Link>
        <p className="text-white text-xl pl-4 pt-1">Demo review</p>
      </div>

      <div className="pl-12 pt-8 relative flex">
        <Image
          src={VizArenaInput}
          alt="Viz Arena Demo Picture"
          className="w-1/2 h-auto rounded-2xl"
        />
        <div className="w-1/2 bg-[#212121] rounded-2xl mx-12 pl-6 pt-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-36">
              <p className="text-white font-medium text-4xl pb-4 pr-4 relative top-2">
                Name:
              </p>
              <input
                type="text"
                className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-lg"
                placeholder="Type here"
              />
            </div>

            <div className="flex items-center space-x-28">
              <p className="text-white font-medium text-4xl pb-4 pr-2 relative top-2">
                Number:
              </p>
              <input
                type="number"
                className="bg-white py-3 rounded-xl w-3/5 px-4 text-lg"
                placeholder="1"
                min="1"
                max="99"
              />
            </div>

            <div className="flex items-center space-x-36">
              <p className="text-white font-medium text-4xl pb-4 relative top-2">
                Nation:
              </p>
              <select className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-lg">
                <option value="">Select Nation</option>
                <option value="USA">United States</option>
                <option value="CHN">China</option>
                <option value="JPN">Japan</option>
                <option value="DEU">Germany</option>
                <option value="IND">India</option>
                <option value="GBR">United Kingdom</option>
                <option value="FRA">France</option>
                <option value="BRA">Brazil</option>
                <option value="ITA">Italy</option>
                <option value="CAN">Canada</option>
                <option value="RUS">Russia</option>
                <option value="KOR">South Korea</option>
                <option value="AUS">Australia</option>
                <option value="ESP">Spain</option>
                <option value="MEX">Mexico</option>
              </select>
            </div>

            <div className="flex items-center space-x-36">
              <p className="text-white font-medium text-4xl pb-4 relative top-2">
                Colour:
              </p>
              <input
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
                className="h-12 w-3/5 rounded-xl"
              />
            </div>

            <div className="flex items-center space-x-32">
              <p className="text-white font-medium text-4xl pb-5 pr-1 relative top-2">
                Opacity:
              </p>
              <input
                type="text"
                className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-xl"
              />
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-white font-medium text-4xl pb-4 pr-1 relative top-1.5">
                X:
              </p>
              <input
                type="text"
                className="bg-white py-3 rounded-xl font-medium text-xl w-1/3 px-28"
              />
              <p className="text-white font-medium text-4xl pb-4 pr-1 relative top-1.5">
                Y:
              </p>
              <input
                type="text"
                className="bg-white py-3 rounded-xl font-medium text-xl w-1/3 px-28"
              />
            </div>

            <div className="flex items-center space-x-32">
              <p className="text-white font-medium text-4xl pb-5 pr-1 relative top-2">
                Duration:
              </p>
              <input
                type="number"
                className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-xl"
                min="5"
                max="15"
                placeholder="5 seconds"
              />
            </div>

            <div className="flex space-x-4 justify-evenly ">
              <Link href="/demoTestPage1">
                <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                  Test
                </button>
              </Link>

              <Link href="/cart">
                <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                  Add to shopping cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24"></div>
    </div>
  );
};

export default VizArenaDemo;
