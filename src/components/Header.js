import React from "react";
import "./Header.css";
import {BsCart4} from "react-icons/bs";

export default function Header(props) {
  return (
    <div className="header">
      <div className="upperheader">
        <div>Covid-19 T&C</div>
        <img src="https://www.rajwadi.com/image/data/logo.png" />
        <div>
          <BsCart4/>SHOPPING CART<span>{props.count} item</span>
        </div>
      </div>
      <div className="lowerheader">
        <ul className="category">
          <il>BRIDE AND GROOM</il>
          <il>SAREE</il>
          <il>LENGHA CHOLI</il>
          <il>SALWAR KAMEEZ</il>
          <il>KURTA</il>
          <il>MENS</il>
          <il>KIDS</il>
          <il>ACCESSORIES</il>
        </ul>
      </div>
    </div>
  );
}
