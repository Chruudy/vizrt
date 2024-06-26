import React, { useState, useEffect } from "react";
import VizWorldImage from "../images/viz_world_img.jpg";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png";

const FAVORITES_KEY = "favoriteProducts";

const getFavoritesFromLocalStorage = (): string[] => {
  if (typeof window === "undefined") return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoriteToLocalStorage = (productId: string) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

const removeFavoriteFromLocalStorage = (productId: string) => {
  let favorites = getFavoritesFromLocalStorage();
  favorites = favorites.filter((id) => id !== productId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const VizWorldDemoInfo: React.FC = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const product = {
    image: VizWorldImage,
    name: "Viz World",
    price: 1049,
    id: "38",
  };

  // Check if the product is already in favorites
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
      image: VizWorldImage,
      name: "Viz World",
      price: 2699,
      id: "38",
    };

    // Save the product to the cart
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
      alert("Already added 'Viz World' to cart");
    }
  };

  // Render the product information
  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-grey090 rounded-xl">
      <div className="flex justify-start mb-4">
        <Link href="/" passHref>
          <Image src={backButton} alt="Back button" width={32} height={32} />
        </Link>
      </div>

      <div className="flex flex-row gap-8 items-stretch">
        <div onClick={toggleImagePreview} className="cursor-pointer flex-1">
          <div className="h-full">
            <Image
              src={VizWorldImage}
              alt="Viz World"
              className="mt-3 w-full h-96 object-cover rounded-xl transform scale-105"
            />
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-white flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold">Viz World</h1>
              <StarIcon
                className={`text-3xl cursor-pointer ${
                  isStarClicked ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={handleStarClick}
                aria-label="Toggle favorite"
              />
            </div>
            <p className="text-base mb-3">
              Viz World enables producers, journalists, and operators to include
              maps and geographical information in any Vizrt graphic template.
            </p>
            <p className="text-base mb-3">
              Users can automatically change map locations, add animated 3D
              objects and labels, show street and traffic information, display
              on-demand satellite images, create geographical locators, and
              design fully animated real-time 3D branded maps.
            </p>
            <p className="text-base mb-3">
              Invest in Viz World to elevate your broadcasts with stunning,
              customizable maps that enhance storytelling and captivate your
              audience.
            </p>
          </div>
          <h2 className="text-xl font-semibold text-center my-4">
            Price: $2699
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/demoTestPage3" passHref>
              <button className="bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out text-sm">
                Demo
              </button>
            </Link>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out text-sm"
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
              src={VizWorldImage}
              alt="Viz World"
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

export default VizWorldDemoInfo;
