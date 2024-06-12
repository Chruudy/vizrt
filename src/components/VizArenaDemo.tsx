import React, { useState } from "react";
import VizArenaInput from "../images/viz_arena_input.jpg";
import VizArena from "../images/viz_arena_img.jpg";
import Image from "next/image";
import Link from "next/link";
import backButton from "../images/back-button.png"

const VizArenaDemo: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  // Function to handle changes in the color picker
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const toggleImagePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <div>
      <div className="flex pt-4 md:pl-96 lg:pl-52">
        <Link href="/demoInfoPage1">
          <Image src={backButton} alt="Back button" width={32} height={32}></Image>
        </Link>
        <p className="text-white text-lg pl-4 pt-0.5">Demo review</p>
      </div>

      <div className="pl-4 lg:pl-52 pt-4 relative flex flex-col lg:flex-row md: pl-40">
        <Image src={VizArenaInput} alt="Viz Arena Demo Picture" className="w-full md:w-3/5 lg:w-2/5 h-fill rounded-xl border border-gray-900" />
        <div className="max-w-xl bg-gray-900 rounded-xl mx-4 md:mx-8 lg:mx-12 p-4 mt-4 md:mt-0 lg:mt-0">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Name:</p>
              <input type="text" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" placeholder="Type here" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Number:</p>
              <input type="number" className="bg-white py-2 rounded-lg w-2/3 px-3 text-base" placeholder="1" min="1" max="99" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Nation:</p>
              <select className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base">
                <option value="Select Nation">Select Nation</option><option value="AFG">Afghanistan</option><option value="ALB">Albania</option><option value="DZA">Algeria</option><option value="AND">Andorra</option><option value="AGO">Angola</option><option value="ATG">Antigua and Barbuda</option><option value="ARG">Argentina</option><option value="ARM">Armenia</option><option value="AUS">Australia</option><option value="AUT">Austria</option><option value="AZE">Azerbaijan</option><option value="BHS">Bahamas</option><option value="BHR">Bahrain</option><option value="BGD">Bangladesh</option><option value="BRB">Barbados</option><option value="BLR">Belarus</option><option value="BEL">Belgium</option><option value="BLZ">Belize</option><option value="BEN">Benin</option><option value="BTN">Bhutan</option><option value="BOL">Bolivia</option><option value="BIH">Bosnia and Herzegovina</option><option value="BWA">Botswana</option><option value="BRA">Brazil</option><option value="BRN">Brunei</option><option value="BGR">Bulgaria</option><option value="BFA">Burkina Faso</option><option value="BDI">Burundi</option><option value="CPV">Cabo Verde</option><option value="KHM">Cambodia</option><option value="CMR">Cameroon</option><option value="CAN">Canada</option><option value="CAF">Central African Republic</option><option value="TCD">Chad</option><option value="CHL">Chile</option><option value="CHN">China</option><option value="COL">Colombia</option><option value="COM">Comoros</option><option value="COG">Congo</option><option value="COD">Congo, Democratic Republic of the</option><option value="CRI">Costa Rica</option><option value="CIV">Côte d'Ivoire</option><option value="HRV">Croatia</option><option value="CUB">Cuba</option><option value="CYP">Cyprus</option><option value="CZE">Czech Republic</option><option value="DNK">Denmark</option><option value="DJI">Djibouti</option><option value="DMA">Dominica</option><option value="DOM">Dominican Republic</option><option value="ECU">Ecuador</option><option value="EGY">Egypt</option><option value="SLV">El Salvador</option><option value="GNQ">Equatorial Guinea</option><option value="ERI">Eritrea</option><option value="EST">Estonia</option><option value="SWZ">Eswatini</option><option value="ETH">Ethiopia</option><option value="FJI">Fiji</option><option value="FIN">Finland</option><option value="FRA">France</option><option value="GAB">Gabon</option><option value="GMB">Gambia</option><option value="GEO">Georgia</option><option value="DEU">Germany</option><option value="GHA">Ghana</option><option value="GRC">Greece</option><option value="GRD">Grenada</option><option value="GTM">Guatemala</option><option value="GIN">Guinea</option><option value="GNB">Guinea-Bissau</option><option value="GUY">Guyana</option><option value="HTI">Haiti</option><option value="HND">Honduras</option><option value="HUN">Hungary</option><option value="ISL">Iceland</option><option value="IND">India</option><option value="IDN">Indonesia</option><option value="IRN">Iran</option><option value="IRQ">Iraq</option><option value="IRL">Ireland</option><option value="ISR">Israel</option><option value="ITA">Italy</option><option value="JAM">Jamaica</option><option value="JPN">Japan</option><option value="JOR">Jordan</option><option value="KAZ">Kazakhstan</option><option value="KEN">Kenya</option><option value="KIR">Kiribati</option><option value="PRK">Korea, Democratic People's Republic of</option><option value="KOR">Korea, Republic of</option><option value="KWT">Kuwait</option><option value="KGZ">Kyrgyzstan</option><option value="LAO">Lao People's Democratic Republic</option><option value="LVA">Latvia</option><option value="LBN">Lebanon</option><option value="LSO">Lesotho</option><option value="LBR">Liberia</option><option value="LBY">Libya</option><option value="LIE">Liechtenstein</option><option value="LTU">Lithuania</option><option value="LUX">Luxembourg</option><option value="MDG">Madagascar</option><option value="MWI">Malawi</option><option value="MYS">Malaysia</option><option value="MDV">Maldives</option><option value="MLI">Mali</option><option value="MLT">Malta</option><option value="MHL">Marshall Islands</option><option value="MRT">Mauritania</option><option value="MUS">Mauritius</option><option value="MEX">Mexico</option><option value="FSM">Micronesia (Federated States of)</option><option value="MDA">Moldova, Republic of</option><option value="MCO">Monaco</option><option value="MNG">Mongolia</option><option value="MNE">Montenegro</option><option value="MAR">Morocco</option><option value="MOZ">Mozambique</option><option value="MMR">Myanmar</option><option value="NAM">Namibia</option><option value="NRU">Nauru</option><option value="NPL">Nepal</option><option value="NLD">Netherlands</option><option value="NZL">New Zealand</option><option value="NIC">Nicaragua</option><option value="NER">Niger</option><option value="NGA">Nigeria</option><option value="MKD">North Macedonia</option><option value="NOR">Norway</option><option value="OMN">Oman</option><option value="PAK">Pakistan</option><option value="PLW">Palau</option><option value="PAN">Panama</option><option value="PNG">Papua New Guinea</option><option value="PRY">Paraguay</option><option value="PER">Peru</option><option value="PHL">Philippines</option><option value="POL">Poland</option><option value="PRT">Portugal</option><option value="QAT">Qatar</option><option value="ROU">Romania</option><option value="RUS">Russian Federation</option><option value="RWA">Rwanda</option><option value="KNA">Saint Kitts and Nevis</option><option value="LCA">Saint Lucia</option><option value="VCT">Saint Vincent and the Grenadines</option><option value="WSM">Samoa</option><option value="SMR">San Marino</option><option value="STP">Sao Tome and Principe</option><option value="SAU">Saudi Arabia</option><option value="SEN">Senegal</option><option value="SRB">Serbia</option><option value="SYC">Seychelles</option><option value="SLE">Sierra Leone</option><option value="SGP">Singapore</option><option value="SVK">Slovakia</option><option value="SVN">Slovenia</option><option value="SLB">Solomon Islands</option><option value="SOM">Somalia</option><option value="ZAF">South Africa</option><option value="SSD">South Sudan</option><option value="ESP">Spain</option><option value="LKA">Sri Lanka</option><option value="SDN">Sudan</option><option value="SUR">Suriname</option><option value="SWE">Sweden</option><option value="CHE">Switzerland</option><option value="SYR">Syrian Arab Republic</option><option value="TWN">Taiwan</option><option value="TJK">Tajikistan</option><option value="TZA">Tanzania, United Republic of</option><option value="THA">Thailand</option><option value="TLS">Timor-Leste</option><option value="TGO">Togo</option><option value="TON">Tonga</option><option value="TTO">Trinidad and Tobago</option><option value="TUN">Tunisia</option><option value="TUR">Turkey</option><option value="TKM">Turkmenistan</option><option value="TUV">Tuvalu</option><option value="UGA">Uganda</option><option value="UKR">Ukraine</option><option value="ARE">United Arab Emirates</option><option value="GBR">United Kingdom</option><option value="USA">United States</option><option value="URY">Uruguay</option><option value="UZB">Uzbekistan</option><option value="VUT">Vanuatu</option><option value="VEN">Venezuela</option><option value="VNM">Viet Nam</option><option value="YEM">Yemen</option><option value="ZMB">Zambia</option><option value="ZWE">Zimbabwe</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Colour:</p>
              <input type="color" value={selectedColor} onChange={handleColorChange} className="h-8 w-2/3 rounded-lg" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Opacity:</p>
              <input type="text" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" value="60 %" />
            </div>

            <div className="flex items-center space-x-3">
              <p className="text-white font-medium text-lg">X:</p>
              <input type="text" className="bg-white py-2 rounded-lg font-medium text-base w-1/3 px-8" value="80 %" />
              <p className="text-white font-medium text-lg">Y:</p>
              <input type="text" className="bg-white py-2 rounded-lg font-medium text-base w-1/3 px-8" value="15 %" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-medium text-lg">Duration:</p>
              <input type="number" className="bg-white py-2 rounded-lg w-2/3 px-3 font-medium text-base" min="5" max="15" placeholder="5 seconds" />
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
            <Image src={VizArena} alt="Viz Arena Demo Picture" layout="intrinsic" width={1200} height={675} objectFit="contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VizArenaDemo;
