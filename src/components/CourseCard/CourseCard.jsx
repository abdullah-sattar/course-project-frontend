import React from "react";
import "./CourseCard.scss";

const CourseCard = (props) => {
  const { name, category, location, cost, duration, summary } = props;
  return (
    <div className="card">
      <p className="card__item">Title: {name}</p>
      <p className="card__item">Category: {category}</p>
      <p className="card__item">Location: {location}</p>
      <p className="card__item">Cost: {cost}</p>
      <p className="card__item">Duration: {duration}</p>
      <p className="card__item">Description: {summary}</p>
    </div>
  );
};

export default CourseCard;
