import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import Logo from "../images/Vizrt-Logo-Orange.webp";
import Link from "next/link";
import CreateIcon from "@mui/icons-material/Create";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to get cart items from localStorage
  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.length);
  };

  // Update cart count on component mount
  useEffect(() => {
    getCartCount();

    // Add event listener to update cart count when cart is updated
    window.addEventListener('storage', getCartCount);
    return () => {
      window.removeEventListener('storage', getCartCount);
    };
  }, []);

  return (
    <header className="flex justify-between items-center bg-[#212121] h-20">
      <Link href="/">
        <Image src={Logo} alt="Site Icon" className="w-20 mx-16 my-4" />
      </Link>
      <div className="relative text-white w-1/3 ml-32">
        <input
          type="text"
          className=" py-1 rounded bg-white text-black w-full text-center"
          placeholder="search"
        />
        <button className="absolute left-0 top-0 mt-1">
          <SearchIcon className="text-black mx-2" />
        </button>
      </div>
      <ul className="flex items-center text-white mr-2">
        <li>
          <Link href="/uploadtest">
            <button className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20">
              <CreateIcon />
            </button>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <button className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20">
              <StarIcon />
            </button>
          </Link>
        </li>
        <li className="relative">
          <Link href="/cart">
            <button className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20 flex items-center justify-center">
              <ShoppingCartIcon />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <button className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20">
              <Person2Icon />
            </button>
          </Link>
        </li>
        <li className="relative">
          <button
            onClick={toggleMenu}
            className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20 flex items-center justify-center"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 bg-[#212121] shadow-lg">
              <Link
                href="/demoInfoPage1"
                className="block text-white hover:bg-orange-500 hover:text-black px-4 py-2"
              >
                Viz Arena
              </Link>
              <Link
                href="/demoInfoPage2"
                className="block text-white hover:bg-orange-500 hover:text-black px-4 py-2"
              >
                Viz Libero
              </Link>
              <Link
                href="/demoInfoPage3"
                className="block text-white hover:bg-orange-500 hover:text-black px-4 py-2"
              >
                Viz World
              </Link>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
