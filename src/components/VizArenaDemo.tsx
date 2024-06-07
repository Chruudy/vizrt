import React, { useState } from "react";
import VizArenaInput from "../images/vizarenainput.jpg";
import Image from "next/image";
import Link from "next/link";
import backButton from "../images/back-button.png"

const VizArenaDemo: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState('#000000');

    // Function to handle changes in the color picker
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <div className="flex pt-8 pl-16">
                <Link href="/demoInfoPage1">
                    <Image src={backButton} alt="Back button" className="w-12 h-auto"></Image>
                </Link>
                <p className="text-white text-2xl pl-8 pt-2">Demo review</p>
            </div>

            <div className="pl-12 pt-8 relative flex">
                <Image src={VizArenaInput} alt="Viz Arena Demo Picture" className="w-1/2 h-auto rounded-2xl" />
                <div className="w-1/2 bg-[#212121] rounded-2xl mx-12 pl-6 pt-6">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-36">
                            <p className="text-white font-medium text-4xl pb-4 pr-4 relative top-2">Name:</p>
                            <input type="text" className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-lg" placeholder="Type here" />
                        </div>

                        <div className="flex items-center space-x-28">
                            <p className="text-white font-medium text-4xl pb-4 pr-2 relative top-2">Number:</p>
                            <input type="number" className="bg-white py-3 rounded-xl w-3/5 px-4 text-lg" placeholder="1" min="1" max="99" />
                        </div>

                        <div className="flex items-center space-x-36">
                            <p className="text-white font-medium text-4xl pb-4 relative top-2">Nation:</p>
                            <select className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-lg"><option value="Select Nation">Select Nation</option><option value="AFG">Afghanistan</option><option value="ALB">Albania</option><option value="DZA">Algeria</option><option value="AND">Andorra</option><option value="AGO">Angola</option><option value="ATG">Antigua and Barbuda</option><option value="ARG">Argentina</option><option value="ARM">Armenia</option><option value="AUS">Australia</option><option value="AUT">Austria</option><option value="AZE">Azerbaijan</option><option value="BHS">Bahamas</option><option value="BHR">Bahrain</option><option value="BGD">Bangladesh</option><option value="BRB">Barbados</option><option value="BLR">Belarus</option><option value="BEL">Belgium</option><option value="BLZ">Belize</option><option value="BEN">Benin</option><option value="BTN">Bhutan</option><option value="BOL">Bolivia</option><option value="BIH">Bosnia and Herzegovina</option><option value="BWA">Botswana</option><option value="BRA">Brazil</option><option value="BRN">Brunei</option><option value="BGR">Bulgaria</option><option value="BFA">Burkina Faso</option><option value="BDI">Burundi</option><option value="CPV">Cabo Verde</option><option value="KHM">Cambodia</option><option value="CMR">Cameroon</option><option value="CAN">Canada</option><option value="CAF">Central African Republic</option><option value="TCD">Chad</option><option value="CHL">Chile</option><option value="CHN">China</option><option value="COL">Colombia</option><option value="COM">Comoros</option><option value="COG">Congo</option><option value="COD">Congo, Democratic Republic of the</option><option value="CRI">Costa Rica</option><option value="CIV">Côte d'Ivoire</option><option value="HRV">Croatia</option><option value="CUB">Cuba</option><option value="CYP">Cyprus</option><option value="CZE">Czech Republic</option><option value="DNK">Denmark</option><option value="DJI">Djibouti</option><option value="DMA">Dominica</option><option value="DOM">Dominican Republic</option><option value="ECU">Ecuador</option><option value="EGY">Egypt</option><option value="SLV">El Salvador</option><option value="GNQ">Equatorial Guinea</option><option value="ERI">Eritrea</option><option value="EST">Estonia</option><option value="SWZ">Eswatini</option><option value="ETH">Ethiopia</option><option value="FJI">Fiji</option><option value="FIN">Finland</option><option value="FRA">France</option><option value="GAB">Gabon</option><option value="GMB">Gambia</option><option value="GEO">Georgia</option><option value="DEU">Germany</option><option value="GHA">Ghana</option><option value="GRC">Greece</option><option value="GRD">Grenada</option><option value="GTM">Guatemala</option><option value="GIN">Guinea</option><option value="GNB">Guinea-Bissau</option><option value="GUY">Guyana</option><option value="HTI">Haiti</option><option value="HND">Honduras</option><option value="HUN">Hungary</option><option value="ISL">Iceland</option><option value="IND">India</option><option value="IDN">Indonesia</option><option value="IRN">Iran</option><option value="IRQ">Iraq</option><option value="IRL">Ireland</option><option value="ISR">Israel</option><option value="ITA">Italy</option><option value="JAM">Jamaica</option><option value="JPN">Japan</option><option value="JOR">Jordan</option><option value="KAZ">Kazakhstan</option><option value="KEN">Kenya</option><option value="KIR">Kiribati</option><option value="PRK">Korea, Democratic People's Republic of</option><option value="KOR">Korea, Republic of</option><option value="KWT">Kuwait</option><option value="KGZ">Kyrgyzstan</option><option value="LAO">Lao People's Democratic Republic</option><option value="LVA">Latvia</option><option value="LBN">Lebanon</option><option value="LSO">Lesotho</option><option value="LBR">Liberia</option><option value="LBY">Libya</option><option value="LIE">Liechtenstein</option><option value="LTU">Lithuania</option><option value="LUX">Luxembourg</option><option value="MDG">Madagascar</option><option value="MWI">Malawi</option><option value="MYS">Malaysia</option><option value="MDV">Maldives</option><option value="MLI">Mali</option><option value="MLT">Malta</option><option value="MHL">Marshall Islands</option><option value="MRT">Mauritania</option><option value="MUS">Mauritius</option><option value="MEX">Mexico</option><option value="FSM">Micronesia (Federated States of)</option><option value="MDA">Moldova, Republic of</option><option value="MCO">Monaco</option><option value="MNG">Mongolia</option><option value="MNE">Montenegro</option><option value="MAR">Morocco</option><option value="MOZ">Mozambique</option><option value="MMR">Myanmar</option><option value="NAM">Namibia</option><option value="NRU">Nauru</option><option value="NPL">Nepal</option><option value="NLD">Netherlands</option><option value="NZL">New Zealand</option><option value="NIC">Nicaragua</option><option value="NER">Niger</option><option value="NGA">Nigeria</option><option value="MKD">North Macedonia</option><option value="NOR">Norway</option><option value="OMN">Oman</option><option value="PAK">Pakistan</option><option value="PLW">Palau</option><option value="PAN">Panama</option><option value="PNG">Papua New Guinea</option><option value="PRY">Paraguay</option><option value="PER">Peru</option><option value="PHL">Philippines</option><option value="POL">Poland</option><option value="PRT">Portugal</option><option value="QAT">Qatar</option><option value="ROU">Romania</option><option value="RUS">Russian Federation</option><option value="RWA">Rwanda</option><option value="KNA">Saint Kitts and Nevis</option><option value="LCA">Saint Lucia</option><option value="VCT">Saint Vincent and the Grenadines</option><option value="WSM">Samoa</option><option value="SMR">San Marino</option><option value="STP">Sao Tome and Principe</option><option value="SAU">Saudi Arabia</option><option value="SEN">Senegal</option><option value="SRB">Serbia</option><option value="SYC">Seychelles</option><option value="SLE">Sierra Leone</option><option value="SGP">Singapore</option><option value="SVK">Slovakia</option><option value="SVN">Slovenia</option><option value="SLB">Solomon Islands</option><option value="SOM">Somalia</option><option value="ZAF">South Africa</option><option value="SSD">South Sudan</option><option value="ESP">Spain</option><option value="LKA">Sri Lanka</option><option value="SDN">Sudan</option><option value="SUR">Suriname</option><option value="SWE">Sweden</option><option value="CHE">Switzerland</option><option value="SYR">Syrian Arab Republic</option><option value="TWN">Taiwan</option><option value="TJK">Tajikistan</option><option value="TZA">Tanzania, United Republic of</option><option value="THA">Thailand</option><option value="TLS">Timor-Leste</option><option value="TGO">Togo</option><option value="TON">Tonga</option><option value="TTO">Trinidad and Tobago</option><option value="TUN">Tunisia</option><option value="TUR">Turkey</option><option value="TKM">Turkmenistan</option><option value="TUV">Tuvalu</option><option value="UGA">Uganda</option><option value="UKR">Ukraine</option><option value="ARE">United Arab Emirates</option><option value="GBR">United Kingdom</option><option value="USA">United States</option><option value="URY">Uruguay</option><option value="UZB">Uzbekistan</option><option value="VUT">Vanuatu</option><option value="VEN">Venezuela</option><option value="VNM">Viet Nam</option><option value="YEM">Yemen</option><option value="ZMB">Zambia</option><option value="ZWE">Zimbabwe</option></select>
                        </div>

                        <div className="flex items-center space-x-36">
                            <p className="text-white font-medium text-4xl pb-4 relative top-2">Colour:</p>
                            <input type="color" value={selectedColor} onChange={handleColorChange} className="h-12 w-3/5 rounded-xl" />
                        </div>

                        <div className="flex items-center space-x-32">
                            <p className="text-white font-medium text-4xl pb-5 pr-1 relative top-2">Opacity:</p>
                            <input type="text" className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-xl" value="60 %" />
                        </div>

                        <div className="flex items-center space-x-6">
                            <p className="text-white font-medium text-4xl pb-4 pr-1 relative top-1.5">X:</p>
                            <input type="text" className="bg-white py-3 rounded-xl font-medium text-xl w-1/3 px-28" value="80 %" />
                            <p className="text-white font-medium text-4xl pb-4 pr-1 relative top-1.5">Y:</p>
                            <input type="text" className="bg-white py-3 rounded-xl font-medium text-xl w-1/3 px-28" value="15 %" />
                        </div>

                        <div className="flex items-center space-x-32">
                            <p className="text-white font-medium text-4xl pb-5 pr-1 relative top-2">Duration:</p>
                            <input type="number" className="bg-white py-3 rounded-xl w-3/5 px-4 font-medium text-xl" min="5" max="15" placeholder="5 seconds" />
                        </div>

                        <div className="flex space-x-4 justify-evenly ">
                            <Link href="/demoTestPage1">
                                <button className="text-white font-medium text-lg rounded-lg px-6 py-3 w-56 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg transform hover:scale-105 transition-transform duration-200">
                                    Test
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
            </div>

            <div className="pt-24"></div>
        </div>
    );
};

export default VizArenaDemo;
