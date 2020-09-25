import React from "react";
import {
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import gallary_1 from '../../assets/img/gallary_1.jpg';
import gallary_2 from '../../assets/img/gallary_2.jpg';
import './gallary.css';

const items = [
    {
        gallary_photo: gallary_1,
    },
    {
        gallary_photo: gallary_2,
    },
    {
        gallary_photo: gallary_1,
    },
    {
        gallary_photo: gallary_2,
    },
    {
        gallary_photo: gallary_1,
    },
    {
        gallary_photo: gallary_2,
    }
];

const Gallary = () => {

    const cards = items.map((item, idx) => {
        return (
            <Col key={idx} className="text-center mb-4" lg="4" md="6">
                <Card>
                    <CardBody className="p-0">
                        <img alt="..." src={item.gallary_photo} className="w-100 rounded" />
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