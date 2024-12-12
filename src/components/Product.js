import React from "react";
import ImageSlider from "./ImageSlider";
import ProductDetails from "./ProductDetails";
import ProductSummary from "./ProductSummary";
import ProductDescription from "./ProductDescription";
import "../styles/Product.css";
import Reviews from "./Reviews";

const Product = () => {
  return (
    <div className="product">
      <div className="product-top">
        <ImageSlider />
        <ProductDetails />
      </div>
      <ProductDescription />
      <ProductSummary/>
      <Reviews/>
    </div>
  );
};

export default Product;
