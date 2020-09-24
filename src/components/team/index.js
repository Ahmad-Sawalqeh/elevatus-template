import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

import './team.css';

const Team = () => {
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
                    <p className="lead about-lead font-weight-bold pt-3">
                        We come from diverse backgrounds and various corners of the global.
                    </p>
                </Col>
            </Row>
            <Row>
                <div className="carousel">

                </div>
            </Row>
        </Container>
    );
}

export default Team;
