import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';

const Navigationbar = ({ setPage }) => {
  const goHome = () => {
    setPage(0);
  };
  const goRegisterLektor = () => {
    setPage(1);
  };
  const goExamplePage = () => {
    setPage(2);
  };
  const goLeadbord = () => {
    setPage(3);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Забавнячка</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={goHome}>🏠Home</Nav.Link>
          <Nav.Link onClick={goExamplePage}>🗿Example Page</Nav.Link>
          <Nav.Link onClick={goRegisterLektor}>✍️Register Lektor</Nav.Link>
          <Nav.Link onClick={goLeadbord}>🏆Leadbord</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
