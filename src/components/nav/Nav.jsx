import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Nav.css";

function Banner() {
  return (
    <Navbar bg='302a4e' expand='lg' variant='dark'>
      <Container>
        <div className='sasasa'>
          <Navbar.Brand>
            <Link className='links-navbar' to='home' spy={true} smooth={true}>
              FrontEnd Developer
            </Link>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='olga' id='basic-navbar-nav'>
          <Nav className='juan'>
            <Nav.Link className='text-light'>
              <Link className='links-navbar' to='home' spy={true} smooth={true}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className='text-light' href='#skills'>
              <Link
                className='links-navbar'
                to='skills'
                spy={true}
                smooth={true}
              >
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link className='text-light' href='#about'>
              <Link
                className='links-navbar'
                to='about'
                spy={true}
                smooth={true}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link className='text-light' href='#contact'>
              <Link
                className='links-navbar'
                to='contact'
                spy={true}
                smooth={true}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Banner;
