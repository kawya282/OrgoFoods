import React from 'react'
import SubNavigation from '../../components/navbar/SubNavigation'
import SubFooter from '../../components/footer/SubFooter'
import { Container, Form, Row } from 'react-bootstrap'
import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import { Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';

function Checkout() {
  return (
    <div>
      <SubNavigation/>
      <Container fluid style={{backgroundImage:'url("https://img.freepik.com/premium-photo/pink-wipe-smoke-cloud-abstract-mystic-freeze-motion-diffusion-background_756527-6963.jpg")',backgroundSize:'cover',height:'auto'}}>
        <Row className='justify-content-center'>
            <Col xs={10} md={5} xl={4} className='w-40 my-2 mx-3 px-4 py-2' style={{backgroundColor:'rgba(256,256,,256,0.5)',height:'auto',borderRadius:'15px'}}>
                <Typography gutterBottom variant="h5" component="div" style={{color:'#0A1D56'}}>
                    <LocalShippingIcon sx={{ color: '#0A1D56' }}/> SHIPPING DETAILS
                </Typography>
                <Form>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>     
                    <Form.Group className="mb-3 justify-flex-start">    
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>    
                    <Form.Group className="mb-3">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="street"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="state"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="zip code"/>
                    </Form.Group>
                </Form>    
            </Col>   
            <Col xs={10} md={5} xl={4} className='w-40 my-5 px-4 py-4' style={{backgroundColor:'rgba(256,256,,256,0.5)',height:'auto',borderRadius:'15px'}}>
                <Typography gutterBottom variant="h5" component="div" style={{color:'#0A1D56'}}>
                    <PaymentIcon sx={{ color: '#0A1D56' }}/> PAYMENT INFO
                </Typography>
                <Form>    
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Label>Credit Card No</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>     
                    <Form.Group className="mb-3 justify-flex-start">    
                        <Form.Label>EXP</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>    
                    <Form.Group className="mb-3">
                        <Form.Label>CCV</Form.Label>
                        <Form.Control type="street"/>
                    </Form.Group>
                    <Button variant="contained" color="success" size="medium" className='mx-2'>Purchase</Button>
                    <Button variant="contained" color="success" size="medium" className='mx-2'>Back</Button>
                </Form>
            </Col>
        </Row> 
      </Container>
      <SubFooter/>
    </div>
  )
}

export default Checkout
