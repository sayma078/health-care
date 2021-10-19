import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
       <>    
  <Navbar sticky="top"  bg="dark"  variant="dark" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home"><i class="fas fa-tooth"></i> Odontic Care</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link}to="/faq">FAQ</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
  </>
        </div>
    );
};

export default Header;