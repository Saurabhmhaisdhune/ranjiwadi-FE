import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ProductSaree from "./ProductSaree";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";

export default function Home() {
  const [selectedproduct, setSelectedproduct] = useState(null);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Header count={count} />
      {selectedproduct == null ? (
        <ProductSaree
          setSelectedproduct={setSelectedproduct}
         
        />
      ) : (
        <ProductDetails
          selectedproduct={selectedproduct}
          setSelectedproduct={setSelectedproduct}
          setCount={setCount}
          count={count}
        />
      )}
      <Footer />
    </div>
  );
}
