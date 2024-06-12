import React, { useState } from "react";
import VizArenaBg from "../images/viz_arena_img.jpg";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import backButton from "../images/back-button.png";

const VizArenaDemoInfo: React.FC = () => {
    const [isStarClicked, setIsStarClicked] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handleStarClick = () => {
        setIsStarClicked(!isStarClicked);
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
                    <Image src={VizArenaBg} alt="Viz Arena Demo Picture" className="w-full h-auto rounded-xl" />
                </div>
                <div className="bg-gray-900 rounded-xl p-6 text-white">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold">Viz Arena</h1>
                        <StarIcon className={`text-4xl cursor-pointer ${isStarClicked ? 'text-yellow-500' : 'text-gray-300'}`} onClick={handleStarClick} aria-label="Toggle favorite" />
                    </div>
                    <p className="text-xl mb-4">
                        Viz Arena is the leading image-based AR graphics and virtual advertising solution designed to keep fans engaged, sponsors satisfied, and costs low.
                    </p>
                    <p className="text-xl mb-4">
                        It contains graphics like Virtual Ads, Data Driven Graphics, 3D Virtual Graphics, Lineups & Player Presentations and so on.
                    </p>
                    <p className="text-xl mb-4">
                        The software can display information on the field or screen in real-time, making the viewing experience more engaging and informative for fans.
                    </p>
                    <h2 className="text-2xl font-semibold text-center my-6">Price: 1499kr</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="/demoTestPage1" passHref>
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
                        <Image src={VizArenaBg} alt="Viz Arena Demo Picture" layout="intrinsic" width={800} height={450} objectFit="contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VizArenaDemoInfo;