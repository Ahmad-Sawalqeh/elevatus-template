import React from "react";
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

import './cards.css';

SwiperCore.use([Navigation]);

const cards = [
    {
        title: 'Health Insurance',
        icon: 'fa fa-medkit',
        iconColor: 'medkitIcon'
    },
    {
        title: 'Social Security',
        icon: 'fa fa-child',
        iconColor: 'childIcon'
    },
    {
        title: 'Business Trips',
        icon: 'fa fa-plane',
        iconColor: 'planeIcon'
    },
    {
        title: 'Competitive Salaries',
        icon: 'fa fa-money-bill-alt',
        iconColor: 'billIcon'
    },
    {
        title: 'Career Development',
        icon: 'fa fa-chart-bar',
        iconColor: 'chartIcon'
    },
    {
        title: 'Friendly',
        icon: 'fa fa-users',
        iconColor: 'usersIcon'
    },
    {
        title: 'Pet Friendly',
        icon: 'fa fa-paw',
        iconColor: 'pawIcon'
    },
    {
        title: 'Team Building',
        icon: 'fa fa-futbol',
        iconColor: 'futboltIcon'
    }
];

const Cards = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-between pb-5">
                <Swiper slidesPerView={5} navigation >
                    {cards.map((card, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <ECard info={card} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Row>
        </Container>
    );
}

const ECard = (props) => {
    const { info } = props;
    return (
        <Col>
            <Card className="shadow">
                <CardBody className="text-center">
                    <div className={`icon ${info.iconColor} mx-auto`}>
                        <i className={info.icon} />
                    </div>
                    <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">{info.title}</p>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Cards;
