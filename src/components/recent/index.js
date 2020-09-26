import React from "react";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Progress
} from "reactstrap";

import './recent.css';

SwiperCore.use([Navigation]);

const cards = [
  {
      Job: 'Strategy Manager',
      location: 'Amman, Jordan',
      discreption: 'Managment',
      rols: 'Front End, Back End, Back End',
      progress: 80
  },
  {
    Job: 'Strategy Manager',
    location: 'Amman, Jordan',
    discreption: 'Senior Level',
    rols: 'Front End, Back End, Back End',
    progress: 65
  },
  {
    Job: 'Strategy Manager',
    location: 'Amman, Jordan',
    discreption: 'Managment',
    rols: 'Front End, Back End, Back End',
    progress: 80
  },
  {
    Job: 'Strategy Manager',
    location: 'Amman, Jordan',
    discreption: 'Senior Level',
    rols: 'Appility to generate and implementidea from concept to',
    progress: 45
  },
  {
    Job: 'Strategy Manager',
    location: 'Amman, Jordan',
    discreption: 'Un-known',
    rols: 'Front End, Back End, Back End',
    progress: 77
  },
  {
    Job: 'Strategy Manager',
    location: 'Amman, Jordan',
    discreption: 'Un-known',
    rols: 'coordinate meetings',
    progress: 55
  }
];

const Recent = (props) => {
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
      <Row className="mb-5">        
        <Swiper  breakpoints={props.breakpoints} navigation>
          {cards.map((card, idx) => {            
            return (
              <SwiperSlide key={idx}>
                <ECard info={card} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Row>
    </Container>
  );
}

const ECard = (props) => {
  const { info } = props;
  return (
    <Col>
      <Card className="cardsitting mb-4">
        <CardBody className="d-flex flex-column justify-content-between">
          <div>
            <h5 className="fonColor">{info.Job}</h5>
            <p className="m-0">{info.location}</p>
            <p className="py-3 my-3 borderStyle">{info.discreption}</p>
            <p className="m-0 fonColor">{info.rols}</p>
          </div>
          <div className="d-flex justify-content-between">
            <h3 className="text-muted">{info.progress}%</h3>
            <Button outline color="primary" href="#" target="_blank" >
              Apply
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Recent;
