import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import "./Course.css";

const Course = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
        <div className="course">
        <div className="courses-section">
          <div className="leftNav">
            <div className=" my-5">
              {
              courses.map((course) => (
                <Link className="courseLinks" key={course.id} to={`/courseDetails/${course.id}`}> {course.name}</Link>
              ))
              }
            </div>
          </div>
          <div className="courses-card-section px-3">
            <div className="my-5 courseCard">
            {courses.map((course) => (
                <CourseCard key={course.id} data={course}></CourseCard>
              ))}
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Course;
