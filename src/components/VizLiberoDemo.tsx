import React, { useState } from "react";
import VizLiberoInput from "../images/viz_libero_input.jpg";
import VizLibero from "../images/viz_libero_img.jpg";
import Image from "next/image";
import Link from "next/link";
import backButton from "../images/back-button.png";

const VizLiberoDemo: React.FC = () => {
    const [possession1, setPossession1] = useState(0);
    const [possession2, setPossession2] = useState(0);

    // Function to handle changes in possession input for pos 1
    const handlePossession1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value)) {
            const newPos2 = 100 - value;
            setPossession1(value);
            setPossession2(newPos2);
        }
    };

    // Function to handle changes in possession input for pos 2
    const handlePossession2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value)) {
            const newPos1 = 100 - value;
            setPossession2(value);
            setPossession1(newPos1);
        }
    };

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const toggleImagePreview = () => {
        setIsPreviewOpen(!isPreviewOpen);
    };

    return (
        <div>
            <div className="flex pt-4 md:pl-96 lg:pl-52">
                <Link href="/demoInfoPage2">
                    <Image src={backButton} alt="Back button" width={32} height={32}></Image>
                </Link>
                <p className="text-white text-lg pl-4 pt-0.5">Demo review</p>
            </div>

            <div className="pl-4 lg:pl-52 pt-4 relative flex flex-col lg:flex-row md: pl-40">
                <Image src={VizLiberoInput} alt="Viz Arena Demo Picture" className="w-full md:w-3/5 lg:w-2/5 h-fill rounded-xl border border-gray-900" />
                <div className="max-w-xl bg-gray-900 rounded-xl mx-4 md:mx-8 lg:mx-12 p-4 mt-4 md:mt-0 lg:mt-0">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                            <p className="text-white font-medium text-lg">Team 1:</p>
                            <input type="text" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" placeholder="Type here" />
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white font-medium text-lg">Logo 1:</p>
                            <div className="relative">
                                <input type="file" accept="image/*" className="hidden" id="logoUpload" />
                                <label htmlFor="logoUpload" className="bg-white py-2 rounded-lg w-full pr-64 pl-1 font-medium text-base cursor-pointer">
                                    Upload Image
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white font-medium text-lg">Team 2:</p>
                            <input type="text" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" placeholder="Type here" />
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white font-medium text-lg">Logo 2:</p>
                            <div className="relative">
                                <input type="file" accept="image/*" className="hidden" id="logoUpload" />
                                <label htmlFor="logoUpload" className="bg-white py-2 rounded-lg w-full pr-64 pl-1 font-medium text-base cursor-pointer">
                                    Upload Image
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <p className="text-white font-medium text-lg">Pos 1:</p>
                            <input type="number" className="bg-white py-2 rounded-lg font-medium text-base w-1/3 px-8" min="0" max="100" placeholder="% Possession" value={possession1} onChange={handlePossession1Change} />
                            <p className="text-white font-medium text-lg">Pos 2:</p>
                            <input type="number" className="bg-white py-2 rounded-lg font-medium text-base w-1/3 px-8" min="0" max="100" placeholder="% Possession" value={possession2} onChange={handlePossession2Change} />
                        </div>

                        <div className="flex items-center justify-between space-x-2">
                            <input type="number" className="bg-white py-2 rounded-lg w-1/3 px-3 font-medium text-base" placeholder="Left %" />
                            <input type="number" className="bg-white py-2 rounded-lg w-1/3 px-3 font-medium text-base" placeholder="Mid %" />
                            <input type="number" className="bg-white py-2 rounded-lg w-1/3 px-3 font-medium text-base" placeholder="Right %" />
                        </div>

                        <div className="lg: flex justify-evenly">
                            <div onClick={toggleImagePreview} className="cursor-pointer">
                                <button className="text-white font-medium text-base rounded-lg px-4 py-2 w-36 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                    Test
                                </button>
                            </div>

                            <Link href="/cart">
                                <button className="text-white font-medium text-base rounded-lg px-4 py-2 w-36 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                    Add to cart
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-16"></div>
            {isPreviewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={toggleImagePreview}>
                    <div className="cursor-pointer" style={{ maxWidth: '60%', maxHeight: '100%' }}>
                        <Image src={VizLibero} alt="Viz Arena Demo Picture" layout="intrinsic" width={1200} height={675} objectFit="contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VizLiberoDemo;