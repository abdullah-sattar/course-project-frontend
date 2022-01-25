import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__link" to="/">Home</Link>
      <Link className="navbar__link" to="/courses">Courses</Link>
      <Link className="navbar__link" to="/add-course">Form</Link>
    </div>
  );
};

export default NavBar;
