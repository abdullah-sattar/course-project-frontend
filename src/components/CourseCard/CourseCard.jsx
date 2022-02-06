import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseCard.scss";
import Card from "../Card/Card.jsx";

const CourseCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/courses/${id}`)
      .then((response) => response.json())
      .then((course) => {
        console.log(course);
        setCard(course);
      })
      .catch((err) => console.log(err));
  }, [setCard, id]);

  return (
    <div className="courseCard">{<Card card={card} />}</div>
  );
};

export default CourseCard;
