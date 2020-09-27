import React, { useContext } from "react";
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

import { SettingsContext } from '../../context';

import './footer.css'

const Footer = () => {

    const { data: {portal:{career: {website_and_social:{data}}}} } = useContext(SettingsContext);

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
                        Powered by <span>ELEVATUS</span> 2020
                    </p>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
