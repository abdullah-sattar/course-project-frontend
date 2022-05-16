import "./App.css";
import { HashRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import CourseList from "./components/CourseList/CourseList";
import NavBar from "./components/NavBar/NavBar";
import CourseCard from "./components/CourseCard/CourseCard";

const App = () => {

  const [coursesArr, setCoursesArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then(response => response.json())
      .then(courses => {
        setCoursesArr(courses);
      })
      .catch((err) => console.log(err));
  }, [coursesArr]);

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList courses={coursesArr} />} />
        <Route path="/add-course" element={<Form />} />
        <Route path="/courses/:id" element={<CourseCard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
