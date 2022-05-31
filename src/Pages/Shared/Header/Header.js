import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navContainer">
      <Navbar className="navbar" variant="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <p className="headerText">DentAid</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="links ms-auto">
              <Nav.Link as={Link} to="home">
                <p className="navLinks">Home</p>
              </Nav.Link>
              <Nav.Link href="#services">
                <p className="navLinks">Services</p>
              </Nav.Link>

              <Nav.Link as={Link} to="/appointment">
                <p className="navLinks">Appointments</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                <p className="navLinks">Blogs</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                <p className="navLinks">About</p>
              </Nav.Link>
              {user ? (
                <button onClick={handleSignOut} className="logOutBtn">
                  Logout
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <p className="navLinks">Login</p>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
