import React from "react";
import ImageSlider from "./ImageSlider";
import ProductDetails from "./ProductDetails";
import ProductSummary from "./ProductSummary";
import ProductDescription from "./ProductDescription";
import productReviews from "./ProductReviews";
import "../styles/Product.css";
import ProductReviews from "./ProductReviews";

const Product = () => {
  return (
    <div className="product">
      <div className="product-top">
        <ImageSlider />
        <ProductDetails />
      </div>
      <ProductDescription />
      <ProductSummary/>
      <ProductReviews/>
    </div>
  );
};

export default Product;
