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
      <Navbar dark expand="lg" className="bg-nav py-3 d-flex">
        <Container className="relative">
            <Col lg="1" md="10" sm="10" xs="10" className="py-1">
              <NavbarBrand href="/" className="font-weight-bolder" >ELEVATUS</NavbarBrand>
            </Col>
            <NavbarToggler onClick={this.toggle}  className="mr-3" />
            <Col lg="3" md="12" className={`${this.state.isOpen ? 'position' : ''}`}>
              <Collapse isOpen={this.state.isOpen} navbar className="text-center rounded">
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#" className="text-white mx-1">Jobs</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className="text-white mx-1">Aplication</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" className="text-white">Interview</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Col>
            <Col lg="3" md="7" xs="12" className="py-1"> 
              <Form className="formContainer">
                <Input type="text" name="search" placeholder="Search" className="bg-input" />
              </Form>   
            </Col>
            <Col lg="4" md="5" xs="12" className='login text-white py-1'>
              <i className="fas fa-bell mr-4 my-auto"></i>
              <i className="far fa-clone mr-4 my-auto"></i>
              <div className="my-auto">
                <img alt="..." src={userImage} className="userImage" />
                <span className="ml-3" >John Snow</span>
              </div>
            </Col>
        </Container>
      </Navbar>
    );
  }
}

export default ENavbar;
