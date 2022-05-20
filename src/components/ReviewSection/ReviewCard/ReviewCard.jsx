import React from 'react'
import './ReviewCard.scss'

export default function ReviewCard() {
  return (
    <div className="review-card">
        <img src="/images/card-thumbnail.jpg" alt="" className="card-thumbnail" />
        <div className="card-footer">
            <strong className="rating">Rating:5/6</strong>
            <button className="btn-read">Read</button>
        </div>
    </div>
  )
}
