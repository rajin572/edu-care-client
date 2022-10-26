import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CourseCard.css'

const CourseCard = ({data}) => {
    const {id, image, name, author, price} = data
    console.log(data);
  return (
    <div className="cardContainer">
        <img src={image} alt="" />
        <div className="cardText">
            <h4>{name}</h4>
            <h2>Price: {price}$</h2>
            <p>Author Name: <b>{author}</b></p>
        </div>
        <Link to={`/courseDetails/${id}`} className="w-100"><Button className="w-100 mt-4">Course Details</Button></Link>
    </div>
  );
};

export default CourseCard;
