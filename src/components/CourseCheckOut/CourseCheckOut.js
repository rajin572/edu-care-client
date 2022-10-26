import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseCheckOut.css'

const CourseCheckOut = () => {
    const data = useLoaderData()
    const {id, name, author, price, currentStudent} = data
    console.log(data);
    return (
        <div className='mt-5'>
            <h2 className='text-center'>Course Check Out</h2>
            <div>
                <div className='checkOut'>
                    <h3>Course Name: {name}</h3>
                    <p>Course ID: {id}</p>
                    <h4>Price: {price}$</h4>
                    <p>Author : {author}</p>
                    <p>Students : {currentStudent}</p>
                    <Button>Check Me Out</Button>
                </div>
            </div>
        </div>
    );
};

export default CourseCheckOut;