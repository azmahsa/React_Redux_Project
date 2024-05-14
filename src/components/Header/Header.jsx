import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Navbar className="nav-bg" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>AZ Market</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fa fa-shopping-cart"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link>
                <i className="fa fa-user"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
