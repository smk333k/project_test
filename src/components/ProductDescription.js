import React from "react";
import "../styles/ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <h3>무농약 한라봉&감귤 주스</h3>
      <h4>요점 정리</h4>
      <div className="description-point">
        <div className="point-number">1</div>
        <p>
          <strong>오직 무농약 한라봉과 감귤로만 😊</strong>
          <br />
          청정 제주에서 사람과 환경 모두에 이로운 방식으로 자라 친환경 인증을 받은 감귤과 한라봉으로만 만들었어요.
        </p>
      </div>
      <div className="description-point">
        <div className="point-number">2</div>
        <p>
          <strong>제주의 신선함을 그대로 🚚</strong>
          <br />
          매일 신선하게 갓아 제주에서 바로 보내드려요.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
