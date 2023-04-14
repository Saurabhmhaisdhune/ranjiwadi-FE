import React, { useState,useEffect } from "react";
import "./ProductSaree.css";

export default function ProductSaree({setSelectedproduct}) {

  const [iterms,setIterms]=useState();

  const getData = () => {
    fetch("http://localhost:4000/collection")
      .then((response) => response.json())
      .then((data) => setIterms(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="productsaree">
      {iterms?.map((value) => {
        return (
          <div className="saree" key={value.name} onClick={()=>{setSelectedproduct(value)}}>
            <img
              src={value.imageURL}
              alt="saree"
              className="sareeimg"
            />
            <p>{value.desc}</p>
            <p>Product Code :{value.productCode}</p>
            <p>₹ {value.price}</p>
          </div>
        );
      })}
    </div>
  );
}
