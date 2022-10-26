import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import './CourseDetails.css'

const CourseDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const {id, image, description, name, author, price, currentStudent} = data
  return (
    <div className="cardAll">
        <div className="detailsCard">
            <div className="bg-dark text-end p-3 mb-2">
                <Button>Download PDF</Button>
            </div>
            <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <p className="text-muted">{description}</p>
            </div>
            <div className="details">
                <p>Author Name : {author}</p>
                <p>Current student : {currentStudent}</p>
                <p>Price: {price}</p>
            </div>
            <div className="details">
                <Link variant="outline-info" to='/course'><Button>Go Back To Course</Button></Link>
                <Link variant="outline-info" to={`/courseCheckOut/${id}`}><Button>Go To Premimum</Button></Link>
            </div>
        </div>
    </div>
  );
};

export default CourseDetails;
