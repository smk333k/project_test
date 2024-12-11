import React from "react";
import "../styles/ProductReviews.css";
import starIcon from "../images/star.svg";

const reviews = [
  { rating: 5, text: "정말 신선하고 맛있어요!" },
  { rating: 4, text: "배송이 조금 늦었지만 제품은 만족합니다." },
  { rating: 5, text: "친환경 제품이라 믿고 먹을 수 있어요." },
  { rating: 5, text: "아이들도 정말 좋아해요." },
  { rating: 4, text: "가격이 조금 비싸지만, 가치가 있습니다." },
  { rating: 5, text: "포장이 깔끔하고 배송이 빠릅니다." },
  { rating: 5, text: "맛이 상큼하고 신선해요." },
  { rating: 5, text: "다시 구매할 예정입니다." },
  { rating: 3, text: "배송이 조금 느렸습니다." },
  { rating: 5, text: "전체적으로 만족스러운 제품입니다." },
];

const ProductReviews = () => {
  return (
    <div className="product-reviews">
      <h2>고객 후기</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <div className="review-rating">
              {Array(review.rating)
                .fill(null)
                .map((_, i) => (
                  <img
                    key={i}
                    src={starIcon}
                    alt="star"
                    className="review-star"
                  />
                ))}
            </div>
            <p className="review-text">{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
