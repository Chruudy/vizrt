import React, { useState, useEffect } from "react";
import VizArenaImage from "../images/viz_arena_img.jpg";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png";

const FAVORITES_KEY = "favoriteProducts";

// This function gets the favorite products from local storage
const getFavoritesFromLocalStorage = (): string[] => {
  if (typeof window === "undefined") return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

// This function saves the favorite product to local storage
const saveFavoriteToLocalStorage = (productId: string) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

// This function removes the favorite product from local storage
const removeFavoriteFromLocalStorage = (productId: string) => {
  let favorites = getFavoritesFromLocalStorage();
  favorites = favorites.filter((id) => id !== productId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

// This is the VizArenaDemoInfo component that displays the Viz Arena demo information
const VizArenaDemoInfo: React.FC = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const product = {
    image: VizArenaImage,
    name: "Viz Arena",
    price: 1499,
    id: "36",
  };

  // This useEffect hook checks if the product is a favorite
  useEffect(() => {
    const favorites = getFavoritesFromLocalStorage();
    setIsStarClicked(favorites.includes(product.id));
  }, [product.id]);

  const handleStarClick = () => {
    if (isStarClicked) {
      removeFavoriteFromLocalStorage(product.id);
    } else {
      saveFavoriteToLocalStorage(product.id);
    }
    setIsStarClicked(!isStarClicked);
  };

  const toggleImagePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      image: { VizArenaImage },
      name: "Viz Arena",
      price: 1499,
      id: "36",
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isAlreadyInCart = existingCart.some(
      (item: { id: string }) => item.id === productToAdd.id
    );

    if (!isAlreadyInCart) {
      localStorage.setItem(
        "cart",
        JSON.stringify([...existingCart, productToAdd])
      );
    } else {
      alert("Already added 'Viz Arena' to cart");
    }
  };

  return (
    // This is the TSX code that displays the Viz Arena demo information
    <div className="max-w-6xl mx-auto my-12 p-6 bg-grey090 rounded-xl">
      <div className="flex justify-start mb-4">
        <Link href="/" passHref>
          <Image src={backButton} alt="Back button" width={32} height={32} />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div onClick={toggleImagePreview} className="cursor-pointer">
          <Image
            src={VizArenaImage}
            alt="Viz Arena Demo Picture"
            className="w-full h-auto rounded-xl transform scale-100 scale-105"
          />
        </div>
        <div className="bg-grey085 rounded-xl p-4 text-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Viz Arena</h1>
            <StarIcon
              className={`text-3xl cursor-pointer ${
                isStarClicked ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={handleStarClick}
              aria-label="Toggle favorite"
            />
          </div>
          <p className="text-base mb-4">
            Viz Arena is the leading image-based AR graphics and virtual
            advertising solution designed to keep fans engaged, sponsors
            satisfied, and costs low.
          </p>
          <p className="text-base mb-4">
            It contains graphics like Virtual Ads, Data Driven Graphics, 3D
            Virtual Graphics, Lineups & Player Presentations and so on.
          </p>
          <p className="text-base mb-4">
            The software can display information on the field or screen in
            real-time, making the viewing experience more engaging and
            informative for fans.
          </p>
          <h2 className="text-xl font-semibold text-center my-4">
            Price: $1499
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/demoTestPage1" passHref>
              <button className="bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-3 rounded transition duration-200 ease-in-out text-xs md:text-sm">
                Demo
              </button>
            </Link>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-3 rounded transition duration-200 ease-in-out text-xs md:text-sm"
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
              src={VizArenaImage}
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
