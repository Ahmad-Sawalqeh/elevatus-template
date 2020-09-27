import React, { useContext, useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Container,
    Row,
    Col
} from "reactstrap";

import { SettingsContext } from '../../context';

import './opinions.css';

const Opinions = () => {

    const { data: {portal:{career: {testimonial: {data}}}} } = useContext(SettingsContext);

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = data.map((item) => {
        return (
            <CarouselItem
                className="w-100"
                key={item.media.url}
            >
                <Row className="d-flex justify-content-center carouselItemHeight">               
                    <Col lg="4" xs="10" className="p-4">
                        <h3 className="font-weight-bolder titleColor">{item.name}</h3>
                        <p className="opinionsLead titleColor">{item.position}</p>
                        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                        <article className="opinionsLead mt-4 titleColor">
                            {item.description}
                        </article>
                    </Col>
                    <Col lg="4" xs="10" className="d-flex justify-content-center align-items-center p-4">
                        <img alt="..." src={item.media.url} className="imagePosition" />
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
