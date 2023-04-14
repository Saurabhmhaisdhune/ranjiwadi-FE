import React, { useState } from "react";
import "./ProductDetails.css";
import { FiUserCheck, FiHeart } from "react-icons/fi";
import { BsHandbag, BsArrowLeftShort } from "react-icons/bs";
import { FaRegThumbsUp, FaSignInAlt } from "react-icons/fa";

export default function ProductDetails({
  selectedproduct,
  setSelectedproduct,
  setCount,
  count
}) {

  const [selectedOption, setSelectedOption] = useState("0");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOptions, setSelectedOptions] = useState("0");

  const handleOptionChanges = (event) => {
    setSelectedOptions(event.target.value);
  };

  return (
    <div className="productdetails">
      <div onClick={() => setSelectedproduct(null)} className="back">
        <h4 className="back">
          <BsArrowLeftShort className="icons" />
          <span>Back</span>
        </h4>
      </div>
      <div>
        <img src={selectedproduct.imageURL} alt="saree" className="imgee" />
      </div>
      <div className="about">
        <h3>Mesmerising red bandhej silk saree</h3>
        <p>
          Product Code: <b>{selectedproduct.productCode}</b>
          <span> Weight: <b>{selectedproduct.weight}</b></span>
        </p>
        <p>
          Price: <span className="prices">₹ {selectedproduct.price}</span>
        </p>
        <p className="prices">Made to Order</p>
        <div>
          <h3 className="blouseline">Blouse</h3>
          <li className="radioinput">
            <div>
              <input
                type="radio"
                value="0"
                onChange={handleOptionChange}
                checked={selectedOption === "0"}
              />
              Unstitched Blouse
            </div>
            <span>₹ 0</span>
          </li>
          <li className="radioinput">
            <div>
              <input
                type="radio"
                value="1200"
                checked={selectedOption === "1200"}
                onChange={handleOptionChange}
              />
              Standard Blouse
            </div>
            <span>₹ 1200</span>
          </li>
          <li className="radioinput">
            <div>
              <input
                type="radio"
                value="1300"
                checked={selectedOption === "1300"}
                onChange={handleOptionChange}
              />
              Customize Blouse
            </div>
            <span>₹ 1300</span>
          </li>
        </div>
        <div>
          <h3 className="blouseline">Petticoat</h3>
          <li className="radioinput">
            <div>
              <input
                type="radio"
                value="0"
                onChange={handleOptionChanges}
                checked={selectedOptions === "0"}
              />
              Without Petticoat
            </div>
            <span>₹ 0</span>
          </li>
          <li className="radioinput">
            <div>
              <input
                type="radio"
                value="500"
                checked={selectedOptions === "500"}
                onChange={handleOptionChanges}
              />
              Standard Petticoat
            </div>
            <span>₹ 500</span>
          </li>
          <li className="radioinput">
            <div>
              <input
                type="checkbox"
                value="50"
                checked={selectedOptions === "50"}
                onChange={handleOptionChanges}
              />
              Fall and Edging
            </div>
            <span>₹ 0</span>
          </li>
        </div>
      </div>
      <div className="buttons">
        <div className="mainbutton">
          <button className="addtocart">
            <BsHandbag className="icons" onClick={()=>setCount(count+1)}/>
            Add To CART
          </button>
          <button className="buynow">
            <FaSignInAlt className="icons" />
            Buy Now
          </button>
        </div>
        <div className="mainsbutton">
          <button className="common">
            <FiHeart className="icons" />
            Add To Wishlist
          </button>
          <button className="common">
            <FaRegThumbsUp className="icons" />
            Write A Review
          </button>
          <button className="common">
            <FiUserCheck className="icons" />
            Product Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
