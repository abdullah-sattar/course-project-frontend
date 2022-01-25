import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [course, setCourse] = useState({
    name: "",
    category: "",
    location: "",
    cost: "",
    duration: "",
    summary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="log-form">
      <h2>Add A New Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Title"
          onInput={(e) =>
            setCourse({ ...course, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category"
          onInput={(e) =>
            setCourse({ ...course, category: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="location"
          onInput={(e) =>
            setCourse({ ...course, location: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="cost"
          onInput={(e) =>
            setCourse({ ...course, cost: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="duration"
          onInput={(e) =>
            setCourse({ ...course, duration: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="description"
          onInput={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  )
};

export default Form;
