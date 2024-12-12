import React, { useState } from "react";
import "../styles/Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, rating: 5, text: "정말 신선하고 맛있어요!" },
    { id: 2, rating: 4, text: "배송이 조금 늦었지만 제품은 만족합니다." },
    { id: 3, rating: 5, text: "친환경 제품이라 믿고 먹을 수 있어요." },
  ]);
  const [newReview, setNewReview] = useState({ rating: 5, text: "" });

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  const addReview = () => {
    if (newReview.text.trim()) {
      setReviews([
        ...reviews,
        { id: Date.now(), rating: newReview.rating, text: newReview.text },
      ]);
      setNewReview({ rating: 5, text: "" });
    }
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="reviews">
      <h3>고객 후기</h3>
      <p>평균 평점: <strong>{averageRating}</strong></p>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <span className="review-rating">{"★".repeat(review.rating)}</span>
            <span>{review.text}</span>
            <button
              className="delete-review-btn"
              onClick={() => deleteReview(review.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <div className="review-form">
        <h4>리뷰 추가하기</h4>
        <label>
          평점:
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating}점
              </option>
            ))}
          </select>
        </label>
        <textarea
          placeholder="리뷰를 작성해주세요"
          value={newReview.text}
          onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
        ></textarea>
        <button onClick={addReview}>리뷰 추가</button>
      </div>
    </div>
  );
};

export default Reviews;
