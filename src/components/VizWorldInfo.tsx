import React, { useState } from "react";
import VizWorldImage from "../images/viz_world_img.jpg";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png";

const VizWorldDemoInfo: React.FC = () => {
    const [isStarClicked, setStarClicked] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handleStarClick = () => {
        setStarClicked(!isStarClicked);
    };

    const toggleImagePreview = () => {
        setIsPreviewOpen(!isPreviewOpen);
    };

    return (
        <div className="max-w-6xl mx-auto my-10 p-6 bg-gray-900 rounded-xl">
            <div className="flex justify-start mb-4">
                <Link href="/" passHref>
                    <Image src={backButton} alt="Back button" width={32} height={32} />
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-stretch">
                <div onClick={toggleImagePreview} className="cursor-pointer flex-1">
                    <div className="h-full">
                        <Image src={VizWorldImage} alt="Viz World" className="mt-3 w-full h-96 object-cover rounded-xl transform scale-105" />
                    </div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-white flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-semibold">Viz World</h1>
                            <StarIcon className={`text-3xl cursor-pointer ${isStarClicked ? 'text-yellow-500' : 'text-gray-300'}`} onClick={handleStarClick} aria-label="Toggle favorite" />
                        </div>
                        <p className="text-base mb-3">
                            Viz World enables producers, journalists, and operators to include maps and geographical information in any Vizrt graphic template.
                        </p>
                        <p className="text-base mb-3">
                            Users can automatically change map locations, add animated 3D objects and labels, show street and traffic information, display on-demand satellite images, create geographical locators, and design fully animated real-time 3D branded maps.
                        </p>
                        <p className="text-base mb-3">
                            Invest in Viz World to elevate your broadcasts with stunning, customizable maps that enhance storytelling and captivate your audience.
                        </p>
                    </div>
                    <h2 className="text-xl font-semibold text-center my-4">Price: 2699kr</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="/demoTestPage3" passHref>
                            <button className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out text-sm">
                                Demo
                            </button>
                        </Link>
                        <Link href="/cart" passHref>
                            <button className="bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out text-sm">
                                Add to cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {isPreviewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={toggleImagePreview}>
                    <div className="cursor-pointer" style={{ maxWidth: '60%', maxHeight: '100%' }}>
                        <Image src={VizWorldImage} alt="Viz World" layout="intrinsic" width={1200} height={675} objectFit="contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VizWorldDemoInfo;
