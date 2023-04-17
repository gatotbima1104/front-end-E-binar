import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import iconCalendar from '../asset/calendarLogo.png';


const Menu = () => {
  return (
    <div>
      <Navbar bg="lg" expand="lg">
      <Container className='my-3'>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Event</Nav.Link>
            <Nav.Link href="/calendar"><img src={iconCalendar} alt="" className="w-50" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
  )
}

export default Menu
