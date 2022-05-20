import React from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import "./ReviewSection.scss";

export default function ReviewSection() {
  return (
    <section className="review-section">
      <hr className="section-divider" />
      <div className="review-section--wrapper">
        <div className="header-wrapper">
          <h1 className="heading">Checkout our latest reviews</h1>
          <button className="btn-see-more">
            See More
            <img src="/icons/right-arrow.png" alt="" />
          </button>
        </div>
        <div className="card-wrapper">
          {[...Array(6)].map((item, index) => (
            <ReviewCard />
          ))}
        </div>
      </div>
    </section>
  );
}
