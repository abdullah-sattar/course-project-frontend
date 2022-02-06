import React from "react";
import { Link } from "react-router-dom";
import "./Courses.scss";

const Courses = (props) => {
  const { name, id } = props;
  return (
    <div className="card">
      <h2 className="card__item">{name}</h2>
      <Link to={`/courses/${id}`}>
        <button className="card__btn">More Info</button>
      </Link>
    </div>
  );
};

export default Courses;
