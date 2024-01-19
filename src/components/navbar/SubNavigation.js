import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom'

function SubNavigation() {
    const navstyle = {
        backgroundColor: "#ffffff",
      };
    
      const navlinkstyle = {
        fontSize: "30px",
        textDecoration: "none",
        padding: "8px",
        color: "green",
        fontWeight: 800,
      }
  return (
    <div>
      <Navbar style={navstyle} collapseOnSelect expand="lg">
            <Container>
                <Nav>
                    <NavLink to= '/' style={navlinkstyle}>ORGOFOODS</NavLink>
                </Nav>      
            </Container>
       </Navbar>         
    </div>
  )
}

export default SubNavigation
