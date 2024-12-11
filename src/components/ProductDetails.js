import React from "react";
import starIcon from "../images/star.svg";
import OptionsSelector from "./OptionsSelector";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="rating">
      <img src={starIcon} alt="Rating Stars" className="rating-image" />
        <b>4.9</b>
        <a href="#">248건의 후기 모두 보기 > </a>
      </div>
      <h2>무농약 한라봉&감귤 주스</h2>
      <div className="price">
        <span className="discount">21%</span>
        <span className="original-price">43,300원</span>
        <span className="final-price">34,000원</span>
      </div>
      <div className="badge">무농약</div>
      <div className="product-info">
        <div className="info-row">
          <div className="label">재배 환경</div>
          <div className="value">화학농약X, 살충제X, 제초제X</div>
        </div>
        <div className="info-row">
          <div className="label">생산지</div>
          <div className="value">제주</div>
        </div>
        <div className="info-row">
          <div className="label">배송비</div>
          <div className="value">무료배송</div>
        </div>
        <div className="info-row">
          <div className="label">배송 출발일</div>
          <div className="value">지금 주문 시 2024년 6월 4일 (화) 출발</div>
        </div>
      </div>
      <OptionsSelector />
      <div className="actions">
        <button className="cart-btn">장바구니</button>
        <button className="gift-btn">선물하기</button>
        <button className="buy-btn">구매하기</button>
      </div>
    </div>
  );
};

export default ProductDetails;
