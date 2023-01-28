import React from "react";
import "./About.css";
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { GiBookmarklet, GiGraduateCap } from 'react-icons/gi';
import { BsLaptop } from 'react-icons/bs';

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <div className="center">
          <div className="icon-div">
          <MdOutlineSmartDisplay className="icon"/>
          </div>
          <div className="icon-text">
            <h3>Online Courses</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div  className="icon-div">
            <GiBookmarklet className="icon"/>
          </div>
          <div className="icon-text">
            <h3>24/7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div  className="icon-div">
            <GiGraduateCap className="icon"/>
          </div>
          <div className="icon-text">
            <h3>Personal Teacher</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="icon-div">
            <BsLaptop className="icon"/>
          </div>
          <div className="icon-text">
            <h3>Powerful Program</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
