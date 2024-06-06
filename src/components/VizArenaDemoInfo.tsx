import React, { useState } from "react";
import VizArenaBg from "../images/vizarena.jpg";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png"

const VizArenaDemoInfo: React.FC = () => {
    // useState hook to declare state variable for if "StarIcon" is clicked
    const [isStarClicked, starStarClicked] = useState(false);

    // function to toggle the value of "isStarClicked" when called
    const handleStarClick = () => {
        starStarClicked(!isStarClicked);
    };

    return (
        <div>
            <div className="pt-8 pl-16">
                <Link href="/">
                    <Image src={backButton} alt="Back button" className="w-12 h-auto"></Image>
                </Link>
            </div>

            <div className="pl-12 pt-8 relative flex ">
                <Image src={VizArenaBg} alt="Viz Arena Demo Picture" className="w-1/2 h-auto rounded-2xl" />
                <div className="w-1/2 bg-[#212121] rounded-2xl mx-12">
                    <div className="flex justify-between items-center pr-6">
                        <h1 className="text-white text-center text-4xl font-medium py-4 flex-grow pl-12">Viz Arena</h1>
                        <StarIcon className={`text-4xl cursor-pointer ${isStarClicked ? 'text-yellow-500' : 'text-white'}`} onClick={handleStarClick} />
                    </div>
                    <p className="text-white text-2xl pb-6 px-6">
                        Viz Arena is the leading image-based AR graphics and virtual advertising solution
                        designed to keep fans engaged, sponsors satisfied, and costs low.
                    </p>

                    <p className="text-white text-2xl pb-6 px-6">
                        It contains graphics like Virtual Ads,  Data Driven Graphics, 3D Virtual Graphics, Lineups & Player Presentations and so on.
                    </p>

                    <p className="text-white text-2xl pb-6 px-6">
                        The software can display information on the field or screen in real-time, making the viewing experience more engaging and informative for fans.
                        It helps broadcasters provide a more interactive and visually appealing presentation of sports games.
                    </p>

                    <h1 className="text-white text-center text-4xl font-medium pt-4 pb-8">Price: 1499kr</h1>

                    <div className="flex space-x-4 justify-evenly ">
                        <Link href="/demoTestPage1">
                            <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                Demo
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

            <div className="pt-24"></div>
        </div>
    );
};

export default VizArenaDemoInfo;
