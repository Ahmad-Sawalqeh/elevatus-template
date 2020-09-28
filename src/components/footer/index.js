/**
 * imoprting React librara to work with JSX format,
 * importing useContext hook to get website state  from context-api (state managment system)
 */
import React, { useContext } from "react";
/**
 * importing the reactstrap package to export all bootstrap components
 */
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";
/**
 * importing created context from context-api (state managment system) to get the state with the help of useContext hook into our component
 */
import { SettingsContext } from '../../context';
/**
 * importing image for company logo
 */
import logo from './../../assets/img/logo.png'
/**
 * importing an external style document
 */
import './footer.css'
/**
 * function component representing a Footer component
 * @returns JSX Footer component
 */
const Footer = () => {
    /**
     * using useContext hook with created context to get website state from context-api,
     * also dectructure the state object to get the object that we need for this component only
     */
    const { data: {portal:{career: {website_and_social:{data}}}} } = useContext(SettingsContext);
    /**
     *  main method to return JSX of the component
     */
    return (
        <>
            <footer className="bg-footer text-center">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3 className="font-weight-bold mb-2 titleColor">
                                Follow us/Engage with us!!
                            </h3>
                        </Col>
                        <Col lg="6">
                        <Button
                            className="rounded-circle twitterIcon"
                            href="https://twitter.com/"
                            target="_blank"
                        >
                            <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                            className="rounded-circle ml-3 facebookIcon"
                            href="https://www.facebook.com/Elevatus.io"
                            target="_blank"
                        >
                            <i className="fab fa-facebook-square"></i>
                        </Button>
                        <Button
                            className="rounded-circle ml-3 instagramIcon"
                            href={data.instagram_url}
                            target="_blank"
                        >
                            <i className="fab fa-instagram"></i>
                        </Button>
                        <Button
                            className="rounded-circle ml-3 linkedinIcon"
                            href={data.linkedin_url}
                            target="_blank"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </Button>
                        </Col>
                    </Row>
                    <hr className="mt-5" />
                </Container>
                <Container>
                    <p className="lead text-center font-weight-bolder py-4 m-0">
                        Powered by <img alt="..." src={logo} className="footerLogoStyle mx-2" /> 2020
                    </p>
                </Container>
            </footer>
        </>
    );
}
// exporting the Footer component to another modules
export default Footer;
