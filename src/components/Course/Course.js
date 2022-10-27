import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import "./Course.css";

const Course = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Container>
        <Row>
          <Col className="leftNav" lg="3">
            <h2 className="mb-5 text-center">Our Courses</h2>
            <div>
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
          <Col lg="9">
            <h2 className="my-5 text-center">Our Courses</h2>
            <div className="courseCard">
            {courses.map((course) => (
                <CourseCard key={course.id} data={course}></CourseCard>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Course;
