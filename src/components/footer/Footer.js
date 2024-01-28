import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PrintIcon from '@mui/icons-material/Print';
import { Image } from 'react-bootstrap';
import SubFooter from './SubFooter';

function Footer() {
  const logostyle = {
    color: "green",
    fontWeight: 800,
    fontSize: "35px"
  }

  const textstyle = {
    textDecoration: "underline",
    fontSize: "22px",
    color: "#092635",
    fontWeight: "700"
  }

  const parastyle = {
    color: "#191919",
    fontSize: "15px",
    fontWeight: 500,

  }
  const navlinkstyle = {
    paddingTop: "8%",
    textDecoration: "none",
    color: "#191919",
    fontWeight: 500
  }

  return (
    <div>
        <Container fluid style={{marginTop:'50px', backgroundColor:'#D9EDBF', paddingTop:'5%'}}>
            <Row xs={1} md={2} xl={4}>
                <Col style={{padding:'10px 5px'}}>
                    <span style={logostyle}>ORGOFOODS</span>
                    <p style={parastyle}>We are suppling fresh Vegitables and fruits to Aid customers</p>
                    <Image src='https://img.freepik.com/premium-vector/tree-logo-template-vector-icon-illustration_665655-5836.jpg' className='w-25' style={{borderRadius:'50%'}}/>
                </Col>
                <Col style={{padding:'5px'}}>
                  <span style={textstyle} >LINKS</span>
                  <Nav className="flex-column align-items-left" >
                    <Nav.Link href="/home" style={navlinkstyle}>Home</Nav.Link>
                    <Nav.Link href="/shop" eventKey="link-1" style={navlinkstyle}>Shop</Nav.Link>
                    <Nav.Link href="/about" eventKey="link-2" style={navlinkstyle}>About</Nav.Link>
                    <Nav.Link href="/joinus" eventKey="link-3" style={navlinkstyle}>Join Us</Nav.Link>
                  </Nav>                
                </Col>

                <Col style={{padding:'5px'}}>
                <span style={textstyle}>HELP</span>
                  <Nav className="flex-column align-items-left">
                    <Nav.Link href="#" style={navlinkstyle}>Shipping Information</Nav.Link>
                    <Nav.Link href="#" eventKey="link-1" style={navlinkstyle}>Terms & Conditions</Nav.Link>
                    <Nav.Link href="#" eventKey="link-2" style={navlinkstyle}>FAQs</Nav.Link>
                    <Nav.Link href="#" eventKey="link-3" style={navlinkstyle}>Privacy Policy</Nav.Link>
                  </Nav>
                </Col>

                <Col style={{padding:'5px'}}>
                <span style={textstyle}>CONTACT</span>
                  <Nav className="flex-column align-left">
                    <Nav.Link style={navlinkstyle}><HomeIcon/> Kandy Road, Colombo.</Nav.Link>
                    <Nav.Link style={navlinkstyle}><EmailIcon/> orgofoods@info.com</Nav.Link>
                    <Nav.Link style={navlinkstyle}><LocalPhoneIcon/> + 94 234 567 88</Nav.Link>
                    <Nav.Link style={navlinkstyle}><PrintIcon/> + 94 234 567 89</Nav.Link>
                  </Nav>
                </Col>
            </Row>
        </Container>
        <SubFooter/>
    </div>
  )
}

export default Footer
