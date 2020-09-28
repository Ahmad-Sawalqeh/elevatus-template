/**
 * imoprting React librara to work with JSX format,
 */
import React, { Component } from "react";
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
import './clients.css';
/**
 * using the " use " middelware to give us apility to handle navigation of the carousel items
 */
SwiperCore.use([Navigation]);
/**
 * class component representing a Clients component
 * @returns JSX Clients component
 */
class Clients extends Component {
    static contextType = SettingsContext;
    /**
     *  main method to render JSX of the component
     */
    render(){
        /**
         * using context property from the created context to get website state from context-api,
         * also dectructure the state object to get the object that we need for this component only
         */
        const { data: {portal:{career: {client: {data}}}}, breakpoints } = this.context;
        /**
         *  return JSX of the component
         */
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
                            {/**
                            *  mapping on " data " array to render all items of the slider 
                            */}
                            {data.map((client, idx) => {
                                return (
                                    <SwiperSlide key={idx} >
                                        {/**
                                        *  passing " props " for each slider component render its own information  
                                        */}
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
/**
 * function component representing a Client component (items of the slider)
 * @returns JSX ECard component
 */
const Client = (props) => {
    /**
     * dectructuring the props object to get the information of the item
     */
    const { info } = props;
    /**
     *  main method to return JSX of the component
     */
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
// exporting the Clients component to another modules
export default Clients;