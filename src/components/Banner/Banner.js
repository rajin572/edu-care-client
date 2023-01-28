import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/banner-img.png'
import './Banner.css'

const banner = () => {
    return (
        <div className='homepage'>
        <div className='textContainer'>
            <h1>Welcome to EDU-Care</h1>
            <Link className='' to='/course'><Button size="lg" variant="outline-primary">Go To Course</Button></Link>
        </div>
        <div>
        <img src={image} alt="" />
        </div>
    </div>
    );
};

export default banner;