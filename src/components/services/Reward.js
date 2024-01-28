import React from 'react'
import { Container, Image, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function Reward() {
  const textbox = {
    margin:'0', 
    padding: '5%', 
    border:'2px solid green', 
    alignItems:'center', 
    justifyContent:'center'
  }
  return (
    <Container fluid className='mt-5 pt-4'>
      <Row xs={4} md={2} className="mt-4 g-1">
        <Col xs={{ span: 6, order: 1 }} md={{ span: 3, order: 4 }}>
          <Image src='https://img.freepik.com/premium-photo/variety-fresh-fruits-supermarket_392895-277167.jpg' fluid/>
        </Col>
        <Col xs={{ span: 6, order: 2 }} md={{ span: 3, order: 1 }}>
          <Image src='https://img.freepik.com/premium-photo/farmer-driving-small-tractor-soil-cultivation-potato-digging-autumn-harvest-potato-picking_106029-673.jpg' fluid/>
        </Col>
        <Col xs={{ span: 6, order: 3 }} md={{ span: 3, order: 5 }} style={{padding:'3%'}} >
          <Container style={textbox}>
            <h2>75</h2>
            <h6>PATNERS</h6>
          </Container>
        </Col>
        <Col xs={{ span: 6, order: 4 }} md={{ span: 3, order: 2 }} style={{padding:'3%'}}>
          <Container style={textbox}>
            <h3>8</h3>
            <h6>AWARDS</h6>
          </Container>  
        </Col>
        <Col xs={{ span: 6, order: 5 }} md={{ span: 3, order: 6 }}>
          <Image src='https://img.freepik.com/free-photo/delivery-man-wearing-face-mask-holding-box-with-vegetables_1268-14609.jpg' fluid/>
        </Col>
        <Col xs={{ span: 6, order: 6 }} md={{ span: 3, order: 7 }}>
          <Image src='https://img.freepik.com/premium-photo/greengrocer-selling-organic-fresh-agricultural-product-farmer-market_53876-53829.jpg' fluid/>
        </Col>
        <Col xs={{ span: 6, order: 7 }} md={{ span: 3, order: 3 }} style={{padding:'3%'}}>
          <Container style={textbox}>
            <h3>1000</h3>
            <h6>CUSTOMERS</h6>
          </Container>
        </Col>
        <Col xs={{ span: 6, order: 8 }} md={{ span: 3, order: 8 }} style={{padding:'3%'}}>
          <Container style={textbox}>
            <h3>100</h3>
            <h6>BRANCHERS</h6>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Reward
