/**
 * imoprting React librara to work with JSX format,
 */
import React from "react";
/**
 * importing the reactstrap package to export all bootstrap components
 */
import {
    Container,
    Row,
    Col
} from 'reactstrap';
/**
 * importing an external style document
 */
import './hero.css';
/**
 * function component representing a Hero component
 * @returns JSX Hero component
 */
const Hero = () => {
    /**
     *  main method to return JSX of the component
     */
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
// exporting the Gallary component to another modules
export default Hero;
