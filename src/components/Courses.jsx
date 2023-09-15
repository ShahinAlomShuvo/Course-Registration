import { useEffect, useState } from "react";
import Course from "./Course";
import PropTypes from "prop-types";

const Courses = ({ cartHandler }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <div className='col-span-2 md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            cartHandler={cartHandler}
          ></Course>
        ))}
      </div>
    </>
  );
};

Courses.propTypes = {
  cartHandler: PropTypes.func,
};

export default Courses;
