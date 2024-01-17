import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                  <Nav className="me-auto">
                    <NavLink to='/cart' style={navlinkstyle}><ShoppingCartIcon/></NavLink>
                    <NavLink to='/login' style={navlinkstyle}><AccountCircleIcon/></NavLink>  
                  </Nav>
                  <Nav>
                    <NavLink to= '/' style={navlinkstyle}>HOME</NavLink>
                    <NavLink to= '/shop' style={navlinkstyle}>SHOP</NavLink>
                    <NavLink to='/about' style={navlinkstyle}>ABOUT</NavLink>
                    <NavLink to='/joinus' style={navlinkstyle}>JOINUS</NavLink>
                    <NavLink to='/admin' style={navlinkstyle}>ADMIN</NavLink>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation
