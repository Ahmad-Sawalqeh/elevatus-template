import React from "react";
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import './hero.css';

const Hero = () => {
    return (
        <Container className="padding">
            <Row>
                <Col>
                    <h1 className="text-white text-uppercase font-weight-bolder">welcome to our company</h1>
                    <p className="lead hero-lead text-white font-weight-bold pt-4">
                        Join us and discover an exciting range of career opportunities within the digital world
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;
