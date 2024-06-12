import React, { useState } from "react";
import VizWorldImage from "../images/viz_world_img.jpg"; // Replace with your actual image
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png";

const VizWorldDemoInfo: React.FC = () => {
    const [isStarClicked, setStarClicked] = useState(false);

    const handleStarClick = () => {
        setStarClicked(!isStarClicked);
    };

    return (
        <div>
            <div className="pt-8 pl-16">
                <Link href="/">
                    <Image src={backButton} alt="Back button" className="w-12 h-auto" />
                </Link>
            </div>

            <div className="pl-12 pt-8 relative flex">
                <Image src={VizWorldImage} alt="Viz World" className="w-1/2 h-auto rounded-2xl" />
                <div className="w-1/2 bg-[#212121] rounded-2xl mx-12">
                    <div className="flex justify-between items-center pr-6">
                        <h1 className="text-white text-center text-4xl font-medium py-4 flex-grow pl-12">Viz World</h1>
                        <StarIcon className={`text-4xl cursor-pointer ${isStarClicked ? 'text-yellow-500' : 'text-white'}`} onClick={handleStarClick} />
                    </div>
                    <p className="text-white text-2xl pb-6 px-6">
                        Viz World enables producers, journalists, and operators to include maps and geographical information in any Vizrt graphic template.
                    </p>
                    <p className="text-white text-2xl pb-6 px-6">
                        Users can automatically change map locations, add animated 3D objects and labels, show street and traffic information, display on-demand satellite images, create geographical locators, and design fully animated real-time 3D branded maps.
                    </p>
                    <p className="text-white text-2xl pb-6 px-6">
                        Invest in Viz World to elevate your broadcasts with stunning, customizable maps that enhance storytelling and captivate your audience.
                    </p>
                    <h1 className="text-white text-center text-4xl font-medium pt-4 pb-8">Price: 2699kr</h1>
                    <div className="flex space-x-4 justify-evenly">
                        <Link href="/demo">
                            <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-brandOrange to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                Demo
                            </button>
                        </Link>
                        <Link href="/cart">
                            <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-brandOrange to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                Add to cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-24"></div>
        </div>
    );
};

export default VizWorldDemoInfo;
