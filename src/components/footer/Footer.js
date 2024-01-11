import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <span>ORGOFOODS</span>
                    <p>We are suppling fresh Vegitables and fruits to Aid customers</p>
                    <Container></Container>
                </Col>
                <Col sm={12} md={6} xl={3} xxl={3}>LINKS</Col>
                <Col sm={12} md={6} xl={3} xxl={3}>SERVICES</Col>
                <Col sm={12} md={6} xl={3} xxl={3}>DETAILS</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
