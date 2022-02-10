import React from "react";
import "./CourseList.scss";
import Courses from "../Courses/Courses";

const CourseList = (props) => {
  const { courses } = props;

  const courseJSX = courses.map((course) => {
    return (
      <>
        <Courses
          key={course.id}
          name={course.name}
          id={course.id}
        />
      </>
    );
  });

  return <div className="courses">{courseJSX}</div>;
};

export default CourseList;

//  const courseJSX = courses.map((course) => {
//     return (
//       <>
//         <CourseCard
//           key={course.id}
//           name={course.name}
//           category={course.category}
//           location={course.location}
//           cost={course.price}
//           duration={course.duration}
//           summary={course.summary}
//         />
//       </>
//     );
//   });
