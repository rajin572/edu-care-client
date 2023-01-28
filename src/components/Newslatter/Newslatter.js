import React from 'react'
import './Newslatter.css'
import { IoIosPaperPlane } from 'react-icons/io';

const Newslatter = () => {
  return (
    <div className='Newslatter'>
        <div className='newsletterIcon-div'>
            <IoIosPaperPlane className='newsletterIcon'/>
        </div>
        <h2>Get the best blog stories
            <br />
            into your inbox
        </h2>
        <div className='subscribe'>
            <input type="email" placeholder='Enter Your Email' />
            <button> <IoIosPaperPlane/> Subscribe</button>
        </div>
    </div>
  )
}

export default Newslatter