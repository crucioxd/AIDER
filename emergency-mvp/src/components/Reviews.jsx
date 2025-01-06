import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reviews.css";
const Reviews = () =>{
const reviews = [
  {
    name: "John Doe",
    review: "Aider helped streamline our emergency patient registration process effectively!",
  },
  {
    name: "Jane Smith",
    review: "The admin dashboard is incredibly intuitive and easy to use. Highly recommend!",
  },
  {
    name: "Michael Brown",
    review: "Great platform with excellent features. Respondent alerts are a lifesaver!",
  },
];


  return (
    <div className="reviews-section">
      <h1 className="heading-animation">What Our Users Say</h1>
      <div className="reviews-cards">
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <p>"{item.review}"</p>
            <h4>- {item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
