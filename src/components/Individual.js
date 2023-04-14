import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductDetails from './ProductDetails'
import Header from './Header'
import "./individual.css";

export default function Individual() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}
