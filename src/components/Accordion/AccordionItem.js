import React from "react";
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const AccordionItem = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-5 text-center">Frequently Asked Questions</h1>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Why You Should Chose EDU-Care</Accordion.Header>
          <Accordion.Body>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis repellendus ut officiis iusto doloremque non animi molestias debitis laudantium quo, deserunt nisi repudiandae magni odio temporibus ab itaque perspiciatis esse voluptate libero ex eligendi optio placeat? Debitis asperiores quasi quae soluta beatae consectetur reiciendis amet harum aspernatur nihil. Labore beatae fugit iure mollitia quas earum in similique, repellendus quaerat, id molestias ab maxime et eligendi omnis recusandae voluptatibus. Odit vel ea, quod quibusdam nobis exercitationem sit eius omnis odio minima natus laudantium pariatur quis dolor consectetur quia distinctio veritatis? Perspiciatis laudantium necessitatibus quidem nihil corporis quaerat quia sed dolorum. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What's Inside The Course</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How can I get access to see video offline</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Can I get certificate after the courses</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AccordionItem;
