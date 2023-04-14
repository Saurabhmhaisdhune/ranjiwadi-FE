import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ProductSaree from "./ProductSaree";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";

export default function Home() {
  const [selectedproduct, setSelectedproduct] = useState(null);
  return (
    <div>
      <Navbar />
      <Header />
      {selectedproduct == null ? (
        <ProductSaree setSelectedproduct={setSelectedproduct} />
      ) : (
        <ProductDetails selectedproduct={selectedproduct}
        setSelectedproduct={setSelectedproduct}/>
      )}
      <Footer />
    </div>
  );
}
