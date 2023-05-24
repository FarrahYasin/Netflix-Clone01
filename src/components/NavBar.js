import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/"><h2>Movies</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/fav">fav</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

