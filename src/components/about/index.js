/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system)
 */
import React, { useContext } from "react";
/**
 * importing the react-player package to work with videos as components
 */
import ReactPlayer from 'react-player'
/**
 * importing the reactstrap package to export all bootstrap components
 */
import {
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
import './about.css';
/**
 * function component representing a About component
 * @returns JSX About component
 */
const About = () => {
    /**
     * using useContext hook with created context to get website state from context-api,
     * also dectructure the state object to get the object that we need for this component only
     */
    const { data: {portal:{career: {about_us}}} } = useContext(SettingsContext);
    /**
     *  main method to return JSX of the component
     */
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
                    <ReactPlayer className="w-100 mb-3 videoHeight" url={about_us.data.url} controls={true} />
                </Col>
                <Col lg="6" className="pl-3 mb-3">
                    <p className="lead text-muted font-weight-bold text-justify">
                        {about_us.data.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
// exporting the About component to another modules
export default About;
