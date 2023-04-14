import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search for Product"
          className="searchinput"
        /><span className="searchicon">
        <BiSearch /></span>
      </div>
      <div className="currency">
        <p>Currency INR</p>
        <FaChevronDown />
      </div>
      <div className="account">
        <AiOutlineUser />
        <p>My Account</p>
        <FaChevronDown />
      </div>
    </div>
  );
}
