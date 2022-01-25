import React from "react";
import "./Courses.scss";
import CourseCard from "../CourseCard/CourseCard";

const Courses = (props) => {
  const { courses } = props;

  const courseJSX = courses.map((course) => {
    return (
      <>
        <CourseCard
          key={course.id}
          name={course.name}
          category={course.category}
          location={course.location}
          cost={course.price}
          duration={course.duration}
          summary={course.summary}
        />
      </>
    );
  });

  return <div className="courses">
    {courseJSX}
  </div>;
};

export default Courses;
