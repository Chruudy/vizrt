import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import Logo from "../images/Vizrt-Logo-Orange.webp";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-[#212121] h-20">
      <Link href="/">
        <Image src={Logo} alt="Site Icon" className="w-20 mx-16 my-4" />
      </Link>
      <div className="relative text-white w-1/3 mx-6">
        <input
          type="text"
          className="pr-8 pl-3 py-1 rounded bg-white text-black w-full text-center"
          placeholder="search"
        />
        <button className="absolute left-0 top-0 mt-1">
          <SearchIcon className="text-black mx-2" />
        </button>
      </div>
      <ul className="flex items-center text-white mr-6">
        <li>
          <button className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20">
            <MenuIcon />
          </button>
        </li>
        <li>
          <Link href="/favorites">
            <button className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20">
              <StarIcon />
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
        <li>
          <Link href="/uploadtest">
            <button className="transition-colors duration-400 ease-in-out hover:bg-orange-500 hover:text-black h-20 w-20">
              <ShoppingCartIcon />
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
