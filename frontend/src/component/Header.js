import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profiles">
              <Nav.Link>Profiles</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AllPosts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#home">SignIn</Nav.Link>
            <Nav.Link href="#features">SignOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
