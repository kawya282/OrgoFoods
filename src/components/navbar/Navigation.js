import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

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

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <div>
        <Navbar style={navstyle} collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand style={logostyle}>ORGOFOODS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink to='/cart' style={navlinkstyle}>
                      <IconButton aria-label="cart">
                      <StyledBadge badgeContent={0} color="lightgreen">
                        <ShoppingCartIcon sx={{ color: 'lightgreen' }}  />
                      </StyledBadge>
                      </IconButton>
                    </NavLink>
                    <NavLink to='/login' style={navlinkstyle}><AccountCircleIcon/></NavLink>  
                  </Nav>
                  <Nav>
                    <NavLink to= '/' style={navlinkstyle}>HOME</NavLink>
                    <NavLink to= '/shop' style={navlinkstyle}>SHOP</NavLink>
                    <NavLink to='/about' style={navlinkstyle}>ABOUT</NavLink>
                    <NavLink to='/joinus' style={navlinkstyle}>JOINUS</NavLink>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation
