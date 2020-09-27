import React, { useContext } from "react";
import ReactPlayer from 'react-player'
import {
    Container,
    Row,
    Col
} from "reactstrap";

import { SettingsContext } from '../../context';

import './about.css';

const About = () => {
    
    const { data: {portal:{career: {about_us}}} } = useContext(SettingsContext);
    
    return (
        <Container className="py-5">
            <Row className="py-3 px-3 d-flex flex-column">
                <h2 className="font-weight-bolder titleColor">{about_us.information.section_title}</h2>
                <p className="lead text-muted font-weight-bold pt-3">
                    We come from diverse backgrounds and various corners of the We come from diverse backgrounds and various
                </p>
            </Row>
            <Row className="d-flex justify-content-between">
                <Col lg="6">
                    <ReactPlayer className="w-100 mb-3" url={about_us.data.url} controls={true} />
                </Col>
                <Col lg="6" className="pl-3 mb-3">
                    <p className="lead text-muted font-weight-bold">
                        {about_us.data.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
