import React from 'react';
import About from '../About/About';
import AccordionItem from '../Accordion/AccordionItem';
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer';
import Newslatter from '../Newslatter/Newslatter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Newslatter/>
            <AccordionItem></AccordionItem>
            <Footer></Footer>
        </div>
    );
};

export default Home;