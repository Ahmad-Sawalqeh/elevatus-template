/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system)
 */
import React, { useContext } from "react";
/**
 * imoprting swiper package to work with carousel and sliders,
 */
import SwiperCore, { Navigation } from 'swiper';
/**
 * imoprting swiper components
 */
import { Swiper, SwiperSlide } from 'swiper/react';
/**
 * imoprting an external style document for carousel and sliders of the swiper components
 */
import 'swiper/swiper-bundle.css';
/**
 * importing the reactstrap package to export all bootstrap components
 */
import {
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";
/**
 * importing created context from context-api (state managment system) to get the state with the help of useContext hook into our component
 */
import { SettingsContext } from '../../context';
/**
 * importing an external style document
 */
import './cards.css';
/**
 * using the " use " middelware to give us apility to handle navigation of the carousel items
 */
SwiperCore.use([Navigation]);
/**
 * function component representing a Cards component
 * @returns JSX Cards component
 */
const Cards = () => {
    /**
     * using useContext hook with created context to get website state from context-api,
     * also dectructure the state object to get the object that we need for this component only
     */
    const { data: {portal:{career: {perk: {data}}}}, breakpoints } = useContext(SettingsContext);
    /**
     *  main method to return JSX of the component
     */
    return (
        <Container>
            <Row className="d-flex justify-content-between pb-5">
                <Swiper breakpoints={breakpoints} navigation >
                {/**
                *  mapping on " data " array to render all items of the slider 
                */}
                    {data.map((card, idx) => {
                        return (
                            <SwiperSlide key={idx} >
                                {/**
                                *  passing " props " for each slider component render its own information  
                                */}
                                <ECard info={card} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Row>
        </Container>
    );
}
/**
 * function component representing a ECard component (items of the slider)
 * @returns JSX ECard component
 */
const ECard = (props) => {
    /**
     * dectructuring the props object to get the information of the item
     */
    const { info } = props;
    /**
     *  main method to return JSX of the component
     */
    return (
        <Col>
            <Card>
                <CardBody className="text-center">
                    <div className={`icon ${info.icon.slice(6)}Icon mx-auto`}>
                        <i className={info.icon} />
                    </div>
                    <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">{info.title}</p>
                </CardBody>
            </Card>
        </Col>
    );
}
// exporting the Cards component to another modules
export default Cards;
