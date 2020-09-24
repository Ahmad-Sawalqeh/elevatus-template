import React from "react";
import {
    Card,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import './cards.css';

const Cards = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-between pb-5">
                <Col>
                    <Card>
                        <CardBody className="text-center">
                            <div className="icon medkitIcon mx-auto">
                                <i className="fa fa-medkit" />
                            </div>
                            <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">Health Insurance</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className="text-center">
                            <div className="icon childIcon mx-auto">
                                <i className="fa fa-child" />
                            </div>
                            <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">Social Security</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className="text-center">
                            <div className="icon planeIcon mx-auto">
                                <i className="fa fa-plane" />
                            </div>
                            <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">Business Trips</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className="text-center">
                            <div className="icon billIcon mx-auto">
                                <i className="fa fa-money-bill-alt" />
                            </div>
                            <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">Competitive Salaries</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className="text-center">
                            <div className="icon chartIcon mx-auto">
                                <i className="fa fa-chart-bar" />
                            </div>
                            <p className="text-dark text-capitalize mb-0 pt-5 font-weight-bold">Career Development</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Cards;
