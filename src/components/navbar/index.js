/**
 * imoprting React librara to work with JSX format
 */
import React, { Component } from "react";
/**
 * importing the reactstrap package to export all bootstrap components
 */
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
/**
 * importing image for loged-in user
 */
import userImage from '../../assets/img/userImage.jpg';
/**
 * importing an external style document
 */
import './navbar.css';
/**
 * Class component representing a Navbar component
 * @extends Component
 * @returns JSX Navbar component
 */
class ENavbar extends Component {
    /**
   * Constructor
   * @param {object} props - any data passed in from up-level components
   */
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      data: {}
    };
  }
  /**
   * method to toggle the value of isOpen property in the state object, for showing/hiding the navbar on medium and small screens.
   * working only on screens 768px and below
   */
  toggle = () => {
    this.setState({ ...this.state, isOpen : !this.state.isOpen});
  }
  /**
   *  main method to render JSX of the component
   */
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
            {/* serach bar */}
            <Col lg="3" md="7" xs="12" className="py-1"> 
              <Form className="formContainer">
                <Input type="text" name="search" placeholder="Search" className="bg-input" />
              </Form>   
            </Col>
            {/* sign-in/sign-up log-in/log-out */}
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
// exporting the Navbar component to another modules
export default ENavbar;
