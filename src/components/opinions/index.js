import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Container,
    Row,
    Col
} from "reactstrap";

import opinion_1 from '../../assets/img/opinion_1.jpg';
import Ryan_Tompson from '../../assets/img/Ryan_Tompson.jpg';
import Romina_Hadid from '../../assets/img/Romina_Hadid.jpg';
import Alexander_Smith from '../../assets/img/Alexander_Smith.jpg';
import './opinions.css';

const items = [
    {
        name: 'Sarah Smith',
        job: 'Marketing Manager',
        src: opinion_1,
        altText: 'Take up one idea. Make that one idea your life, think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your cody, be full of that idea, and just leave every other idea alone.',
        caption: 'Slide 1'
    },
    {
        name: 'Ryan Tompson',
        job: 'Web Developer',
        src: Ryan_Tompson,
        altText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit natoque nulla, potenti pellentesque integer quam posuere sociis taciti eros vulputate, curabitur vestibulum a feugiat in nec tellus netus feugiat in nec.',
        caption: 'Slide 2'
    },
    {
        name: 'Romina Hadid',
        job: 'Marketing Strategist',
        src: Romina_Hadid,
        altText: 'penatibus id quis sollicitudin eu mauris, duis magna massa augue imperdiet aptent convallis sem hac ad, sociis taciti sociosqu lacus proin sodales vehicula tristique  sodales vehicula tristiqu eproin sodales.',
        caption: 'Slide 3'
    },
    {
        name: 'Alexander Smith',
        job: 'UI/UX Designer',
        src: Alexander_Smith,
        altText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ligula, lacus cubilia sodales in ac magnis duis montes, ultricies curae interdum a dignissim platea ad ultricies curae interdum ultricies curae curae int.',
        caption: 'Slide 4'
    }
];

const Opinions = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="w-100"
                key={item.caption}
            >
                <Row className="d-flex justify-content-center carouselItemHeight">               
                    <Col lg="4" xs="10" className="p-4">
                        <h3 className="font-weight-bolder titleColor">{item.name}</h3>
                        <p className="opinionsLead titleColor">{item.job}</p>
                        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                        <article className="opinionsLead mt-4 titleColor">
                            {item.altText}
                        </article>
                    </Col>
                    <Col lg="4" xs="10" className="d-flex justify-content-center align-items-center p-4">
                        <img alt="..." src={item.src} className="imagePosition" />
                    </Col>
                </Row>
            </CarouselItem>
        );
    });

    return (
        <section className="bg-opinions py-5">
            <Container>
                <Row className="py-3 px-3 d-flex flex-column">
                    <h2 className="font-weight-bolder titleColor">What's it like to work here?</h2>
                    <p className="lead text-muted font-weight-bold pt-3">
                        We come from diverse backgrounds and various corners of the global.
                    </p>
                </Row>
                <Row>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselControl className="carouselControl" direction="prev" directionText="Previous" onClickHandler={previous} />
                        {slides}
                        <CarouselControl className="carouselControl" direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Row>
            </Container>
        </section>
    );
}

export default Opinions;
