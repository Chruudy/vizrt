import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import backButton from "../images/back-button.png";
import VizWorldInput from "../images/viz_world_input.jpg";
import VizWorld from "../images/viz_world_img.jpg";

const VizWorldDemo: React.FC = () => {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const toggleImagePreview = () => {
        setIsPreviewOpen(!isPreviewOpen);
    };

    const handleAddToCart = () => {
        const productToAdd = {
            image: VizWorld,
            name: "Viz World",
            price: 2699,
            id: "38",
        };

        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const isAlreadyInCart = existingCart.some(
            (item: { id: string }) => item.id === productToAdd.id
        );

        if (!isAlreadyInCart) {
            localStorage.setItem(
                "cart",
                JSON.stringify([...existingCart, productToAdd])
            );
        } else {
            alert(
                "Already added 'Viz World' to cart"
            );
        }
    };

    return (
        <div>
            <div className="flex pt-4 pl-52">
                <Link href="/demoInfoPage3">
                    <Image src={backButton} alt="Back button" width={32} height={32}></Image>
                </Link>
                <p className="text-white text-lg pl-4 pt-0.5">Demo review</p>
            </div>

            <div className="pt-4 relative flex flex-col lg:flex-row pl-52">
                <Image src={VizWorldInput} alt="World Demo Picture" className="w-2/5 h-fill rounded-xl border border-black" />
                <div className="max-w-xl bg-gray-900 rounded-xl mx-8 p-4 pr-20 border border-black">
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center justify-between">
                            <p className="text-white font-medium text-lg">Country:</p>
                            <select className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base">
                                <option value="Select Nation">Select Country</option><option value="USA">United States</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white font-medium text-lg">State:</p>
                            <select className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base">
                                <option value="">Select State</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white font-medium text-lg">Select Party:</p>
                            <select className="bg-white py-2 rounded-lg w-fill px-3 font-medium text-base">
                                <option value="Select">Select Party</option><option value="Dem">Democratic Party</option><option value="Rep">Republican Party</option>
                            </select>
                        </div>


                        <div className="text-center">
                            <button className="text-white font-medium text-base rounded-lg px-4 py-2 w-3/5 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                Update state vote
                            </button>
                        </div>

                        <div className="flex space-between space-x-8">
                            <div onClick={toggleImagePreview} className="cursor-pointer">
                                <button className="text-white font-medium text-base rounded-lg px-4 py-2 w-36 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                    Test
                                </button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="text-white font-medium text-base rounded-lg px-4 py-2 w-36 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-16"></div>
            {isPreviewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={toggleImagePreview}>
                    <div className="cursor-pointer" style={{ maxWidth: '60%', maxHeight: '100%' }}>
                        <Image src={VizWorld} alt="World Demo Picture" layout="intrinsic" width={1200} height={675} objectFit="contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default VizWorldDemo;
