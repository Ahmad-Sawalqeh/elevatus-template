import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

import './recent.css';

const Recent = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col lg="6" md="9" xs="9">
          <h2 className="font-weight-bolder titleColor">Recent Openings</h2>
        </Col>
        <Col lg="6" md="3" xs="3" className="d-flex justify-content-end">
          <div className="font-weight-bold fontColor">View All</div>
        </Col>
      </Row>
      <Row>
        <div className="carousel">

        </div>
      </Row>
    </Container>
  );
}

export default Recent;
