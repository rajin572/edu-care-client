import React from "react";
import { Link } from "react-router-dom";
import './CourseCard.css'

const CourseCard = ({data}) => {
    const {id, image, name, author, price} = data
  return (
    <div className="cardContainer">
        <img src={image} alt="" />
        <p className="course-price">
          TK.{price}
        </p>
        <div className="Carddetails">
            <h5> <b>{name}</b> </h5>
            <p className="authorname"><b>By: {author}</b></p>
            <div>
        <Link to={`/courseDetails/${id}`} className="w-100"><button className="w-100 card-button">Course Details</button></Link>
        </div>
        </div>
    </div>
  );
};

export default CourseCard;
