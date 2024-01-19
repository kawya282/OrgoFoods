import React from 'react'
import { Container, Image, Row, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function SellerForm() {
  return (
    <div>
      <Container fluid className='mt-4'>
        <Row xs={2} md={1} className="mt-4 g-1">
            <Col xs={12} md={6}>
                <Image src='https://img.freepik.com/premium-photo/variety-fresh-fruits-supermarket_392895-277167.jpg' fluid/>
            </Col>
            <Col xs={12} md={6} style={{padding:'25px',borderRadius:'15px',border:'2px solid grey',color:'black'}}>
                <Form>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group> 
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Select aria-label="select the city">
                            <option>Select Your City</option>
                            <option value="1">Gampha</option>
                            <option value="2">Colombo</option>
                            <option value="3">Kaluthara</option>
                            <option value="4">Kandy</option>
                            <option value="5">Galle</option>
                            <option value="6">Anuradhapura</option>
                            <option value="7">Nuwara Eliya</option>
                        </Form.Select>
                    </Form.Group>   
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Control type="Contact number" placeholder="Contact Number" />
                    </Form.Group>  
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={3} placeholder="Message"/>
                    </Form.Group>

                    <Button variant="outlined" color="success" endIcon={<SendIcon />} style={{width:'150px'}}>Send</Button>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SellerForm
