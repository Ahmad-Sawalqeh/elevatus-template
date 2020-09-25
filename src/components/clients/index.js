import React from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";

import './clients.css';

const Clients = () => {
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
                    <div className="carousel">

                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Clients;