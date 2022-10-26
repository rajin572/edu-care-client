import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/10088.jpg'
import './Home.css'

const Home = () => {
    return (
            <div className='homepage'>
                <img src={image} alt="" />
                <div className='textContainer'>
                    <h1>Welcome to EDU-Care</h1>
                    <Link className='' to='/course'><Button size="lg" variant="outline-primary">Go To Course</Button></Link>
                </div>
            </div>
    );
};

export default Home;