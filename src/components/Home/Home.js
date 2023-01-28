import React from 'react';
import About from '../About/About';
import AccordionItem from '../Accordion/AccordionItem';
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AccordionItem></AccordionItem>
            <Footer></Footer>
        </div>
    );
};

export default Home;