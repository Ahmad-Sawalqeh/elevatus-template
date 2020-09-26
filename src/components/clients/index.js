import React, { useState } from "react";
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

import './clients.css';

SwiperCore.use([Navigation]);

const clients = [
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/2e88e4d9-382e-4b04-b40c-5a3fb1d9d302/original/k0lUEv5rxcc6cVgLnahGuFZMhcAn5bufXiltIXEH.jpeg"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/6ca8f4ca-388a-4626-b544-c3a19fd065aa/original/yetUoHycRNgM0xg8FLVq8SE8K4cYFthgCUEunBwD.jpeg"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/14469806-37bd-47ac-9ee7-8a6e65a72b7e/original/uwpFpJBQ9HT2ei4av1TBVswcJrSgQ8q2tKAMD3L1.jpeg"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/1ef22275-fe34-4ef1-b1a3-f629947bab6f/original/DeapguLFOfNh6lig4T20X5gwabX7m3fNoPX9koUD.png"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/b7a6d96d-4b39-4226-b10f-e51997ec21b0/original/yuA4pXgcFcpJ0xc6BDG7IH6CBQK26sowyWULp5jt.png"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/cbdb0c0b-4d18-496e-98db-e2f0e6146021/original/uep3g9N8NXmzLr3b7P7PhFg0JdaiZj1C2HTfl9UD.jpeg"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/d84fb484-74d5-40b4-ab56-27e19dac6101/original/2RZYkQO6yzLclV4E03m0nv1qM3KGUmYjvZTFMtOM.jpeg"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/23102141-bdd9-44b8-8bd4-7af7dc729960/original/CxHAYnA4B9pij2XIg8JK6Rs5jAiomYdTOX4uoejQ.jpeg"
    },
    {
        url: "https://elevatus-production.s3.eu-central-1.amazonaws.com/career_portal/2020/06/0e4e45eb-e36a-471e-b923-164e95518344/original/tVrbmDUsmEDWhEYafgYfL4aetxXpY5HXb5AMrpOf.png"
    }
];


const Clients = (props) => {
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
                    <Swiper  breakpoints={props.breakpoints} navigation >
                        {clients.map((client, idx) => {
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