import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Course = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <h2>Leftside nav</h2>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;