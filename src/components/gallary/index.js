import React, { useContext } from "react";
import {
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import { SettingsContext } from '../../context';

import './gallary.css';

const Gallary = () => {

    const { data: {portal:{career: {gallery : {data}}}} } = useContext(SettingsContext);

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

    return (
        <Container className="py-5 postion">
            <Row className="py-3 px-3 d-flex flex-column">
                <h2 className="font-weight-bolder titleColor">Gallary over view</h2>
                <p className="lead text-muted font-weight-bold pt-3">
                    We come from diverse backgrounds and various corners of the global.
                </p>
            </Row>
            <Row>
                {cards}
            </Row>
        </Container>
    );
}

export default Gallary;