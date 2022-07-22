import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Nav.css";

function Banner() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="sasasa" href="#home">
          FrontEnd Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav juan">
          <Nav className="me-auto juan">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Banner;
