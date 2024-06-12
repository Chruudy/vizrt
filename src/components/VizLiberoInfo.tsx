import React, { useState } from "react";
import VizLiberoImage from "../images/viz_libero_img.jpg"; // Replace with your actual image
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png";

const VizLiberoDemoInfo: React.FC = () => {
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
                <Image src={VizLiberoImage} alt="Viz Libero AR" className="w-1/2 h-auto rounded-2xl" />
                <div className="w-1/2 bg-[#212121] rounded-2xl mx-12">
                    <div className="flex justify-between items-center pr-6">
                        <h1 className="text-white text-center text-4xl font-medium py-4 flex-grow pl-12">Viz Libero AR</h1>
                        <StarIcon className={`text-4xl cursor-pointer ${isStarClicked ? 'text-yellow-500' : 'text-white'}`} onClick={handleStarClick} />
                    </div>
                    <p className="text-white text-2xl pb-6 px-6">
                        Introducing Viz Libero AR, the cutting-edge augmented reality tool that revolutionizes sports broadcasting. With Viz Libero AR, you can transform your game coverage by seamlessly integrating stunning 3D graphics, lifelike player animations, and insightful visual elements directly onto live or replay footage.
                    </p>
                    <p className="text-white text-2xl pb-6 px-6">
                        Easy to use and incredibly efficient, Viz Libero AR empowers you to create these immersive enhancements quickly, allowing you to stay ahead of the competition and deliver top-notch broadcasts every time.
                    </p>
                    <h1 className="text-white text-center text-4xl font-medium pt-4 pb-8">Price: 1049kr</h1>
                    <div className="flex space-x-4 justify-evenly">
                        <Link href="/">
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

export default VizLiberoDemoInfo;
