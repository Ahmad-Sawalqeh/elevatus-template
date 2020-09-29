/**
 * imoprting React librara to work with JSX format
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
    Button,
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
import './team.css';
/**
 * using the " use " middelware to give us apility to handle navigation of the carousel items
 */
SwiperCore.use([Navigation]);
/**
 * Class component representing a Team component
 * @extends Component
 * @returns JSX Team component
 */
class Team extends Component {
    static contextType = SettingsContext;
    /**
     *  main method to render JSX of the component
     */
    render(){  
        /**
         * using context property from the created context to get website state from context-api,
         * also dectructure the state object to get the object that we need for this component only
         */ 
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
                        {/**
                        *  mapping on " data " array to render all items of the slider 
                        */}
                        {data.map((person, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    {/**
                                    *  passing " props " for each slider component render its own information  
                                    */}
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
/**
 * function component representing a Member component (items of the slider)
 * @returns JSX Member component
 */
const Member = (props) => {
    /**
     * dectructuring the props object to get the information of the item
     */
    const { person } = props;
    /**
     *  main method to return JSX of the component
     */
    return (
        <Col className="p-0">
            <Card className="border-0 bg-card">
                <CardBody className="text-center min-w-100">
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
// exporting the Team component to another modules
export default Team;
