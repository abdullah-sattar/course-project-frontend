import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Courses from "./components/Courses/Courses";
import NavBar from "./components/NavBar/NavBar";

const App = () => {

  const [coursesArr, setCoursesArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then(response => response.json())
      .then(courses => {
        console.log(courses);
        setCoursesArr(courses);
      })
      .catch((err) => console.log(err));
  }, [coursesArr]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses courses={coursesArr} />} />
        <Route path="/add-course" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
