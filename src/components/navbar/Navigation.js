import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  const navstyle = {
    backgroundColor: "#ffffff",
  };

  const logostyle = {
    color: "green",
    fontWeight: 800,
    fontSize: "35px"
  }

  const navlinkstyle = {
    textDecoration: "none",
    padding: "10px",
    color: "lightgreen",
    fontWeight: 500
  }

  return (
    <div>
        <Navbar style={navstyle} collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand style={logostyle}>ORGOFOODS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    <NavLink to= '/' style={navlinkstyle}>HOME</NavLink>
                    <NavLink to= '/shop' style={navlinkstyle}>SHOP</NavLink>
                    <NavLink to='/about' style={navlinkstyle}>ABOUT</NavLink>
                    <NavLink to='/contact' style={navlinkstyle}>CONTACT</NavLink>
                    <NavLink to='/login' style={navlinkstyle}>LOGIN</NavLink>
                    <NavLink to='/admin' style={navlinkstyle}>ADMIN</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation
