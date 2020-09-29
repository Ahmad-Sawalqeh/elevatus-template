/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system),
 * importing useState hook to create an internal state for a function component
 */
import React, { useContext, useState } from "react";
/**
 * importing the reactstrap package to export all bootstrap components
 */
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Container,
    Row,
    Col
} from "reactstrap";
/**
 * importing created context from context-api (state managment system) to get the state with the help of useContext hook into our component
 */
import { SettingsContext } from '../../context';
/**
 * importing an external style document
 */
import './opinions.css';
/**
 * function component representing a Opinions component
 * @returns JSX Opinions component
 */
const Opinions = () => {
    /**
     * using useContext hook with created context to get website state from context-api,
     * also dectructure the state object to get the object that we need for this component only
     */
    const { data: {portal:{career: {testimonial: {data}}}} } = useContext(SettingsContext);
    /**
     * using useState hook to create an internal state for saving the active index in the carousel
     */
    const [activeIndex, setActiveIndex] = useState(0);
    /**
     * method to set the value of activeIndex in the component state, to save the index of the active slide, after clicking on next arrow button.
     */
    const next = () => {
        const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    /**
     * method to set the value of activeIndex in the component state, to save the index of the active slide, after clicking on previous arrow button.
     */
    const previous = () => {
        const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    /**
     *  mapping on " data " array to save all items (in JSX format) of the carousel in slides array
     */
    const slides = data.map((item) => {
        return (
            <CarouselItem
                className="w-100"
                key={item.media.url}
            >
                <Row className="d-flex justify-content-center ">               
                    <Col lg="5" xs="10" className="p-4 carouselItemHeight">
                        <h3 className="font-weight-bolder titleColor">{item.name}</h3>
                        <p className="opinionsLead titleColor">{item.position}</p>
                        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                        <article className="opinionsLead mt-4 titleColor text-justify">
                            {item.description}
                        </article>
                    </Col>
                    <Col lg="5" xs="10" className="d-flex justify-content-center align-items-center p-4">
                        <img alt="..." src={item.media.url} className="imagePosition" />
                    </Col>
                </Row>
            </CarouselItem>
        );
    });
    /**
     *  main method to return JSX of the component
     */
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
                        {/**
                        *  rendering all carousel items
                        */}
                        {slides}
                        <CarouselControl className="carouselControl" direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Row>
            </Container>
        </section>
    );
}
// exporting the Opinions component to another modules
export default Opinions;
