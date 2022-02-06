import React from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Car Refector Task</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/ValidationView">Validation</Nav.Link>
          <Nav.Link href="/InventoryCarTable">Inventory</Nav.Link>
          <Nav.Link href="/ValidationSettings">ValidationSettings</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
