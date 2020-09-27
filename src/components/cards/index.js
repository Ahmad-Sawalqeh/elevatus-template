import React, { useContext } from "react";
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

import './cards.css';

SwiperCore.use([Navigation]);

const Cards = () => {

    const { data: {portal:{career: {perk: {data}}}}, breakpoints } = useContext(SettingsContext);

    return (
        <Container>
            <Row className="d-flex justify-content-between pb-5">
                <Swiper breakpoints={breakpoints} navigation >
                    {data.map((card, idx) => {
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
                    <div className='icon iconColor mx-auto'>
                        <i className={info.icon} />
                    </div>
                    <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">{info.title}</p>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Cards;
