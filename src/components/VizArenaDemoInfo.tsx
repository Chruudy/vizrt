import React, { useState } from "react";
import VizArenaBg from "../images/viz_arena_img.jpg";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png";
import vizArena from "../images/viz_arena_img.jpg";

const VizArenaDemoInfo: React.FC = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleStarClick = () => {
    setIsStarClicked(!isStarClicked);
  };

  const toggleImagePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      image: { vizArena },
      name: "Viz Arena",
      price: 6969,
      id: "viz-arena-1",
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isAlreadyInCart = existingCart.some(
      (item: { id: string }) => item.id === productToAdd.id
    );
  };

  return (
    <div className="max-w-6xl mx-auto my-12 p-4 md:p-6 bg-gray-900 rounded-xl">
      <div className="flex justify-start mb-4">
        <Link href="/" passHref>
          <Image src={backButton} alt="Back button" width={32} height={32} />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
        <div onClick={toggleImagePreview} className="cursor-pointer">
          <Image
            src={VizArenaBg}
            alt="Viz Arena Demo Picture"
            className="w-full h-auto rounded-xl transform scale-100 md:scale-105"
          />
        </div>
        <div className="bg-gray-800 rounded-xl p-4 md:p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-2xl font-semibold">Viz Arena</h1>
            <StarIcon
              className={`text-2xl md:text-3xl cursor-pointer ${
                isStarClicked ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={handleStarClick}
              aria-label="Toggle favorite"
            />
          </div>
          <p className="text-sm md:text-base mb-2 md:mb-3">
            Viz Arena is the leading image-based AR graphics and virtual
            advertising solution designed to keep fans engaged, sponsors
            satisfied, and costs low.
          </p>
          <p className="text-sm md:text-base mb-2 md:mb-3">
            It contains graphics like Virtual Ads, Data Driven Graphics, 3D
            Virtual Graphics, Lineups & Player Presentations and so on.
          </p>
          <p className="text-sm md:text-base mb-2 md:mb-3">
            The software can display information on the field or screen in
            real-time, making the viewing experience more engaging and
            informative for fans.
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-center my-2 md:my-4">
            Price: 1499kr
          </h2>
          <div className="flex justify-center gap-2 md:gap-4">
            <Link href="/demoTestPage1" passHref>
              <button className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-3 md:py-2 md:px-4 rounded transition duration-200 ease-in-out text-xs md:text-sm">
                Demo
              </button>
            </Link>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-3 md:py-2 md:px-4 rounded transition duration-200 ease-in-out text-xs md:text-sm"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={toggleImagePreview}
        >
          <div
            className="cursor-pointer"
            style={{ maxWidth: "60%", maxHeight: "100%" }}
          >
            <Image
              src={VizArenaBg}
              alt="Viz Arena Demo Picture"
              layout="intrinsic"
              width={1200}
              height={675}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VizArenaDemoInfo;
