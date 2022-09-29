import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Nav.css";

function Banner() {
  return (
    <Navbar bg="302a4e" expand="lg">
      <Container>
        <div className="sasasa">
          <Navbar.Brand href="#home">FrontEnd Developer</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto juan">
            <Nav.Link className="text-light" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#skills">
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link className="text-light" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="text-light" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Banner;
