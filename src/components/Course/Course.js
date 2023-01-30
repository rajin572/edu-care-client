import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import "./Course.css";

const Course = () => {
  const courses = useLoaderData();
  return (
    <div>
        <div className="course">
        <Row>
          <Col className="leftNav" lg="3">
            <div className=" my-5">
              {courses.map((course) => (
                <Link
                  className="courseLinks"
                  key={course.id}
                  to={`/courseDetails/${course.id}`}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </Col>
          <Col lg="9 px-5">
            <div className="my-5 courseCard">
            {courses.map((course) => (
                <CourseCard key={course.id} data={course}></CourseCard>
              ))}
            </div>
          </Col>
        </Row>
        </div>
    </div>
  );
};

export default Course;
