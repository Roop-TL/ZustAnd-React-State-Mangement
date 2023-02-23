import React, { useState } from "react";
import useCourseStore from "../app/couseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setcourseTitle] = useState("");
  console.log("CourseForm Rendered");

  const handelCourseSubmit = () => {
    if (!courseTitle) {
      return alert("Please add a course title");
    }
    addCourse({
      id: Math.ceil(Math.random() * 10000),
      title: courseTitle,
    });
    setcourseTitle("");
  };
  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => {
          setcourseTitle(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handelCourseSubmit();
        }}
        className="form-submit-btn"
      >
        Add Courses
      </button>
    </div>
  );
};

export default CourseForm;
