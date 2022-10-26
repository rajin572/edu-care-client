import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Course = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                        <h2>Leftside nav</h2>
                    </Col>
                    <Col lg="8">
                        <h2>Right Side Content</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;