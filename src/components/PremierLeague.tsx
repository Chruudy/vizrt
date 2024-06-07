import React, { useState } from "react";
import BackButton from "../images/back-button.png";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import UnitedGraphic1 from "../images/unitedgraphic1.jpg";
import UnitedGraphic2 from "../images/unitedgraphic2.jpg";
import PLScoreboard from "../images/pl_scoreboard_graphic.jpg";
import PLCasters from "../images/pl_casters_graphic.jpg";
import YellowCard from "../images/pl_player_graphic.jpg";
import PLTable from "../images/pl_table_graphic.jpg";


const PremierLeague: React.FC = () => {
    // useState hook to declare state variable for if "StarIcon" is clicked
    const [isStarClicked, setStarClicked] = useState(false);

    // function to toggle the value of "isStarClicked" when called
    const handleStarClick = () => {
        setStarClicked(!isStarClicked);
    };

    return (
        <div>
            <div className="p-6">
                <div className="bg-[#1A323C] rounded-lg shadow-lg border-2 border-black border-opacity-20 p-4">
                    <div className="flex items-center space-x-2">
                        <Link href="/">
                            <Image src={BackButton} className="w-12 h-auto" alt="Go back button"></Image>
                        </Link>
                        <p className="text-white font-medium text-xl pb-2">Premier League Package</p>
                        <StarIcon className={`text-3xl cursor-pointer ml-auto ${isStarClicked ? 'text-yellow-500' : 'text-white'}`} onClick={handleStarClick} />
                    </div>

                    <div className="flex items-center justify-center mt-4 space-x-8 px-4">
                        <Image src={UnitedGraphic1} className="w-1/2 h-auto rounded-xl" alt="United Graphic 1"></Image>
                        <Image src={UnitedGraphic2} className="w-1/2 h-auto rounded-xl" alt="United Graphic 2"></Image>
                    </div>

                    <div className="flex flex-wrap">
                        <p className="text-white text-lg w-full md:w-1/2 pl-4 pt-6 md:pr-6">
                            Enhance your Premier League broadcasts with our comprehensive Premier League Match Graphics Package.
                            This package includes all the essential on-screen elements needed to deliver a professional and
                            engaging viewing experience for your audience.
                        </p>

                        <p className="text-white text-3xl pt-6 pl-4">Price: 5999kr</p>

                        <div className="ml-auto mr-4 mb-4 pb-4">
                            <Link href="/">
                                <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200 mb-4 md:mb-0 md:mr-36">
                                    Test
                                </button>
                            </Link>

                            <Link href="/cart">
                                <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200 md:ml-4 md:mr-12">
                                    Add to shopping cart
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="bg-[#1A323C] rounded-lg shadow-lg border-2 border-black border-opacity-20 p-4 flex items-start">
                    <div className="pl-4 flex space-x-20">
                        <div className="flex flex-col">
                            <p className="text-white text-2xl font-medium pb-8">Graphic Elements Included</p>
                            <div className="pb-4">
                                <Image src={PLScoreboard} alt="Premier League Scoreboard Graphic"></Image>
                            </div>
                            <div className="pb-4">
                                <Image src={PLCasters} alt="Premier League Casters Graphic"></Image>
                            </div>
                            <div className="pb-4">
                                <Image src={YellowCard} alt="Yellow Card Given Graphic"></Image>
                            </div>
                        </div>
                        <div>
                            <Image src={PLTable} alt="Premier League Table Graphic" className="w-48 h-auto pt-6"></Image>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default PremierLeague;
