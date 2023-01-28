import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="mail-Section">
        <div>
            <h3>Newsletter - Stay tune and get the latest update</h3>
            <p>Far far away, behind the word mountains</p>
        </div>
        <div>
            <input type="email" name="" id="" placeholder="Enter Email Address" />
            <button>Stay Tune</button>
        </div>
      </div>
      <div className="footer">
        <h5 class="text-center text-white">© 2022 Edu-Care. All rights reserved</h5>
      </div>
    </div>
  );
};

export default Footer;
