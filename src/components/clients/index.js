import React, { Component } from "react";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import { SettingsContext } from '../../context';

import './clients.css';

SwiperCore.use([Navigation]);

class Clients extends Component {

    static contextType = SettingsContext;

    render(){
        const { data: {portal:{career: {client: {data}}}}, breakpoints } = this.context;
        return (
            <section className="bg-client">
                <Container className="py-5">
                    <Row className="py-3 px-3 d-flex flex-column">
                        <h2 className="font-weight-bolder titleColor">Our Clients</h2>
                        <p className="lead text-muted font-weight-bold pt-3">
                            We come from diverse backgrounds and various corners of the global.
                        </p>
                    </Row>
                    <Row>
                        <Swiper  breakpoints={breakpoints} navigation >
                            {data.map((client, idx) => {
                                return (
                                    <SwiperSlide key={idx} >
                                        <Client info={client} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Row>
                </Container>
            </section>
        );
    }
}


const Client = (props) => {
    const { info } = props;
    return (
        <Col>
            <Card className="border-0">
                <CardBody className="text-center">
                    <img alt="..." src={info.url} className="imageWidth" />
                </CardBody>
            </Card>
        </Col>
    );
}

export default Clients;