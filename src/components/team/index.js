import React, { Component } from "react";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import { SettingsContext } from '../../context';

import './team.css';

SwiperCore.use([Navigation]);

class Team extends Component {

    static contextType = SettingsContext;

    render(){   
        const { data: {portal:{career: {employee: {data}}}}, breakpoints } = this.context;     
        return (
            <Container>
                <Row className="py-5">
                    <Col lg="6" md="9" xs="9">
                        <h2 className="font-weight-bolder titleColor">The Amazing Team</h2>
                    </Col>
                    <Col lg="6" md="3" xs="3" className="d-flex justify-content-end">
                        <div className="font-weight-bold fontColor">View All</div>
                    </Col>
                    <Col lg="12">
                        <p className="lead text-muted font-weight-bold pt-3">
                            We come from diverse backgrounds and various corners of the global.
                        </p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Swiper  breakpoints={breakpoints} navigation>
                        {data.map((person, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <Member person={person} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Row>
            </Container>
        );
    }
}

const Member = (props) => {
    const { person } = props;
    return (
        <Col className="text-center">
            <Card className="border-0 bg-card">
                <CardBody>
                    <img alt="..." src={person.media.url} className="rounded-circle imgWidth" />
                    <div className="pt-4">
                        <div className="title">
                            <h4 className="mb-1">{person.name}</h4>
                            <h6 className="text-muted">{person.position}</h6>
                        </div>
                        <div className="mt-3">
                            <Button className="rounded-circle" href="#" target="_blank" >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <Button className="rounded-circle ml-1" href="#" target="_blank" >
                                <i className="fab fa-facebook-f"></i>
                            </Button>
                            <Button className="rounded-circle ml-1" href="#" target="_blank" >
                                <i className="fab fa-linkedin-in"></i>
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Team;
