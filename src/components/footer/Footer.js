import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PrintIcon from '@mui/icons-material/Print';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div>
        <Container fluid style={{marginTop:'50px'}}>
            <Row xs={1} md={2} xl={4}>
                <Col style={{padding:'10px 5px'}}>
                    <span>ORGOFOODS</span>
                    <p>We are suppling fresh Vegitables and fruits to Aid customers</p>
                    <Container>

                    </Container>
                </Col>
                <Col style={{padding:'5px'}}>
                  <span>LINKS</span>
                  <Nav className="flex-column align-items-left">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/shop" eventKey="link-1">Shop</Nav.Link>
                    <Nav.Link href="/about" eventKey="link-2">About</Nav.Link>
                    <Nav.Link href="/about" eventKey="link-2">Login</Nav.Link>
                  </Nav>                
                </Col>

                <Col style={{padding:'5px'}}>
                <span>HELP</span>
                  <Nav className="flex-column align-items-left">
                    <Nav.Link href="#">Shipping Information</Nav.Link>
                    <Nav.Link href="#" eventKey="link-1">Terms & Conditions</Nav.Link>
                    <Nav.Link href="#" eventKey="link-2">FAQs</Nav.Link>
                    <Nav.Link href="#" eventKey="link-2">Privacy Policy</Nav.Link>
                  </Nav>
                </Col>

                <Col style={{padding:'5px'}}>
                <span>CONTACT</span>
                  <Nav className="flex-column align-left">
                    <Nav.Link href="#"><HomeIcon/>Kandy Road, Colombo.</Nav.Link>
                    <Nav.Link href="#" eventKey="link-1"><EmailIcon/>orgofoods@info.com</Nav.Link>
                    <Nav.Link href="#" eventKey="link-2"><LocalPhoneIcon/>+ 94 234 567 88</Nav.Link>
                    <Nav.Link href="#" eventKey="link-2"><PrintIcon/>+ 94 234 567 89</Nav.Link>
                  </Nav>
                </Col>
            </Row>

            <Row xs={1} md={2} style={{marginTop:'25px', backgroundColor:'gray', padding:'10px'}}>
              <Col>
                <span>© 2023 Copyright | Terms & Policy</span>
              </Col>
              <Col>
                <FacebookRoundedIcon/>
                <WhatsAppIcon/>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
