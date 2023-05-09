import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import iconCalendar from '../asset/calendarLogo.png';
import logo from "../asset/logo.png";
import calendar from "../asset/calendar.png";

const Menu = () => {
  return (
    <div>
      <Navbar bg="lg" expand="lg" className="bg-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/" className="text-menu me-2">
                Category
              </Nav.Link>
              <Nav.Link href="/events" className="text-menu me-2">
                About
              </Nav.Link>
              <Nav.Link href="/events" className="text-menu me-4">
                Discover
              </Nav.Link>
              <Nav.Link href="/calendar" className="text-menu">
                <img src={calendar} className="w-10 logo-calendar" alt="calendar-logo"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
