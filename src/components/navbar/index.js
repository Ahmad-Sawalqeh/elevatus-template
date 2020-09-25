import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
  Container,
  Col
} from 'reactstrap';

import userImage from '../../assets/img/userImage.jpg';
import './navbar.css';

class ENavbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      data: {}
    };
  }

  toggle = () => {
    this.setState({ ...this.state, isOpen : !this.state.isOpen});
  }

  render() {
    return (
      <Navbar dark expand="lg" className="bg-nav py-3">
        <Container>
            <Col lg="1">
              <NavbarBrand href="/" className="font-weight-bolder" >ELEVATUS</NavbarBrand>
            </Col>
            <Col lg="4">
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#" className="text-white mx-3">Jobs</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className="text-white mx-3">Aplication</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className="text-white mx-3">Interview</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Col>
            <Col lg="3"> 
              <Form className="formContainer">
                <Input type="text" name="search" placeholder="Search" className="bg-input" />
              </Form>   
            </Col>
            <Col lg="3" className='d-flex justify-content-end text-white'>
              <i className="fas fa-bell mr-4 my-auto"></i>
              <i className="far fa-clone mr-4 my-auto"></i>
              <div className="my-auto">
                <img alt="..." src={userImage} className="userImage mr-2 my-auto" />
                <span>John Snow</span>
              </div>
            </Col>
        </Container>
      </Navbar>
    );
  }
}

export default ENavbar;
