import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navContainer">
      <Navbar className="navbar" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <p className="headerText">DentAid</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="links ms-auto">
              <Nav.Link as={Link} to="#deets">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#deets">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="#deets">
                Appointment
              </Nav.Link>
              <Nav.Link as={Link} to="#memes">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
