import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

import Youtube_video from '../../assets/img/Youtube_video.png';
import './about.css';

const About = () => {
    return (
        <Container className="py-5">
            <Row className="py-3 px-3 d-flex flex-column">
                <h2 className="font-weight-bolder titleColor">About Us</h2>
                <p className="lead text-muted font-weight-bold pt-3">
                    We come from diverse backgrounds and various corners of the We come from diverse backgrounds and various
                </p>
            </Row>
            <Row className="d-flex justify-content-between">
                <Col lg="6">
                    <img className="w-100 mb-3" alt="Youtube video" src={Youtube_video} />
                </Col>
                <Col lg="6" className="pl-3 mb-3">
                    <p className="lead text-muted font-weight-bold">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, convallis torquent ante vestibulum sollicitudin velit per ultricies, nam volutpat diam facilisis gravida proin. Tempus lacus arcu hac praesent faucibus risus accumsan gravida, proin eros aliquam curae platea non nisl tincidunt, porta at est varius ad vestibulum lectus, porta at est varius ad vestibulum lectus, proin eros aliquam curae platea non nisl tincidunt,, proin eros aliquam curae platea non nisl tincidunt,.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
