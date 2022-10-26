import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './CourseCheckOut.css'

const CourseCheckOut = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    const {id, name, author, price, currentStudent} = data
    console.log(data);
    return (
        <div className='mt-5'>
            <h1 className='text-center my-5'>Course Check Out</h1>
            <div className='userDetails text-center'>
                <img src={user?.photoURL} alt="" />
                <h4>User Name: {user?.displayName}</h4>
                <p>User Email: {user?.email}</p>
            </div>
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