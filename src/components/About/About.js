import React from 'react';
import './About.css'
import aboutImg from '../../images/about.jpg'

const About = () => {
    return (
        <div className='about'>
            <h1>About Us</h1>
            <div className='about-section'>
            <img src={aboutImg} alt="" />
            <div>
                <h2>What We Offer</h2>
                <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
            </div>
            </div>
        </div>
    );
};

export default About;