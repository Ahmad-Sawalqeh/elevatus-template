/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system)
 */
import React, { useContext } from "react";
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
import './gallary.css';
/**
 * function component representing a Gallary component
 * @returns JSX Gallary component
 */
const Gallary = () => {
    /**
     * using useContext hook with created context to get website state from context-api,
     * also dectructure the state object to get the object that we need for this component only
     */
    const { data: {portal:{career: {gallery : {data}}}} } = useContext(SettingsContext);
    /**
     *  mapping on " data " array to save all items (in JSX format) of the gallary in cards array
     */
    const cards = data.map((item, idx) => {
        return (
            <Col key={idx} className="text-center mb-4" lg="4" md="6" sm="6" xs="6">
                <Card>
                    <CardBody className="p-0">
                        <img alt="..." src={item.url} className="w-100 rounded" />
                    </CardBody>
                </Card>                        
            </Col>
        );
    });
    /**
     *  main method to return JSX of the component
     */
    return (
        <Container className="py-5 postion">
            <Row className="py-3 px-3 d-flex flex-column">
                <h2 className="font-weight-bolder titleColor">Gallary over view</h2>
                <p className="lead text-muted font-weight-bold pt-3">
                    We come from diverse backgrounds and various corners of the global.
                </p>
            </Row>
            <Row>
            {/**
            *  rendering all gallary items
            */}
                {cards}
            </Row>
        </Container>
    );
}
// exporting the Gallary component to another modules
export default Gallary;