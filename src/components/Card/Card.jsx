import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <div className="singleCard">
      <p className="singleCard__item">Title: {card.name}</p>
      <p className="singleCard__item">Category: {card.category}</p>
      <p className="singleCard__item">Location: {card.location}</p>
      <p className="singleCard__item">Cost: {card.price}</p>
      <p className="singleCard__item">Duration: {card.duration}</p>
      <p className="singleCard__item">Description: {card.summary}</p>
    </div>
  );
};

export default Card;
