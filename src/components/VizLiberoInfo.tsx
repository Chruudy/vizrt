import React, { useState, useEffect } from "react";
import VizLiberoImage from "../images/viz_libero_img.jpg";
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

const VizLiberoDemoInfo: React.FC = () => {
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const product = {
    image: VizLiberoImage,
    name: "Viz Libero",
    price: 1049,
    id: "37",
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
      Image: VizLiberoImage,
      name: "Viz Libero",
      price: 1049,
      id: "37",
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
      alert("Already added 'Viz Libero' to cart");
    }
  };

  return (
    // Add the following code to the return statement
    <div className="max-w-6xl mx-auto my-10 p-6 bg-grey090 rounded-xl">
      <div className="flex justify-start mb-4">
        <Link href="/" passHref>
          <Image src={backButton} alt="Back button" width={32} height={32} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div onClick={toggleImagePreview} className="cursor-pointer">
          <Image
            src={VizLiberoImage}
            alt="Viz Libero AR"
            className="w-full h-auto rounded-xl transform scale-105"
          />
        </div>
        <div className="bg-grey085 rounded-xl p-4 text-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Viz Libero AR</h1>
            <StarIcon
              className={`text-3xl cursor-pointer ${
                isStarClicked ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={handleStarClick}
              aria-label="Toggle favorite"
            />
          </div>
          <p className="text-base mb-3">
            Introducing Viz Libero AR, the cutting-edge augmented reality tool
            that revolutionizes sports broadcasting. With Viz Libero AR, you can
            transform your game coverage by seamlessly integrating stunning 3D
            graphics, lifelike player animations, and insightful visual elements
            directly onto live or replay footage.
          </p>
          <p className="text-base mb-3">
            Easy to use and incredibly efficient, Viz Libero AR empowers you to
            create these immersive enhancements quickly, allowing you to stay
            ahead of the competition and deliver top-notch broadcasts every
            time.
          </p>
          <h2 className="text-xl font-semibold text-center my-4">
            Price: $1049
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/demoTestPage2" passHref>
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
              src={VizLiberoImage}
              alt="Viz Libero AR"
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

export default VizLiberoDemoInfo;
