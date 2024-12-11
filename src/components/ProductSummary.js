import React from "react";
import "../styles/ProductSummary.css";
import sayun from "../images/sayun.png";

const ProductSummary = () => {
  return (
    <div className="product-summary">
      <h2>무농약 한라봉&감귤 주스</h2>
      <img src={sayun} alt="Product Summary" />
      {/* More summary */}
    </div>
  );
};

export default ProductSummary;
