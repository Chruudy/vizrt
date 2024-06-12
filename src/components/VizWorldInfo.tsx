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
        <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-900 rounded-xl">
            <div className="flex justify-start mb-4">
                <Link href="/" passHref>
                    <Image src={backButton} alt="Back button" width={48} height={48} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div onClick={toggleImagePreview} className="cursor-pointer">
                    <Image src={VizWorldImage} alt="Viz World" className="w-full h-auto rounded-xl" />
                </div>
                <div className="bg-gray-900 rounded-xl p-6 text-white">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold">Viz World</h1>
                        <StarIcon className={`text-4xl cursor-pointer ${isStarClicked ? 'text-yellow-500' : 'text-gray-300'}`} onClick={handleStarClick} aria-label="Toggle favorite" />
                    </div>
                    <p className="text-xl mb-4">
                        Viz World enables producers, journalists, and operators to include maps and geographical information in any Vizrt graphic template.
                    </p>
                    <p className="text-xl mb-4">
                        Users can automatically change map locations, add animated 3D objects and labels, show street and traffic information, display on-demand satellite images, create geographical locators, and design fully animated real-time 3D branded maps.
                    </p>
                    <p className="text-xl mb-4">
                        Invest in Viz World to elevate your broadcasts with stunning, customizable maps that enhance storytelling and captivate your audience.
                    </p>
                    <h2 className="text-2xl font-semibold text-center my-6">Price: 2699kr</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="/demo" passHref>
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
                                Demo
                            </button>
                        </Link>
                        <Link href="/cart" passHref>
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
                                Add to shopping cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {isPreviewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={toggleImagePreview}>
                    <div className="cursor-pointer" style={{ maxWidth: '80%', maxHeight: '80%' }}>
                        <Image src={VizWorldImage} alt="Viz World" layout="intrinsic" width={800} height={450} objectFit="contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VizWorldDemoInfo;