/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system)
 */
import React, { useContext } from "react";
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
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "reactstrap";
/**
 * importing created context from context-api (state managment system) to get the state with the help of useContext hook into our component
 */
import { SettingsContext } from '../../context';
/**
 * importing an external style document
 */
import './recent.css';
/**
 * using the " use " middelware to give us apility to handle navigation of the carousel items
 */
SwiperCore.use([Navigation]);
/**
 * cards variable for fake data, only to show the cards in this component
 */
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
/**
 * function component representing a Recent component
 * @returns JSX Recent component
 */
const Recent = () => {
  /**
   * using useContext hook with created context to get website state from context-api,
   * also dectructure the state object to get the variable that we need for this component only
   */
  const { breakpoints } = useContext(SettingsContext);
  /**
   *  main method to return JSX of the component
   */
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
        <Swiper  breakpoints={breakpoints} navigation>
          {/**
          *  mapping on " cards " array to render all items of the slider 
          */}
          {cards.map((card, idx) => {            
            return (
              <SwiperSlide key={idx}>
                {/**
                *  passing " props " for each ECard component to render its own information  
                */}
                <ECard info={card} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Row>
    </Container>
  );
}
/**
 * function component representing a ECard component (items of the slider)
 * @returns JSX ECard component
 */
const ECard = (props) => {
  /**
 * dectructuring the props object to get the information of the item
 */
  const { info } = props;
  /**
 *  main method to return JSX of the component
 */
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
// exporting the Recent component to another modules
export default Recent;
