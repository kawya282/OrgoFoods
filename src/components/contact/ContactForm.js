import React from 'react'
import { Container, Image, Row, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function ContactForm() {
  return (
    <div>
      <Container fluid className='mt-4 pt-4'>
        <Row xs={2} md={1} className="mt-4 g-1">
            <Col xs={12} md={6}>
                <Image src='https://img.freepik.com/premium-photo/variety-fresh-fruits-supermarket_392895-277167.jpg' fluid/>
            </Col>
            <Col xs={12} md={6} style={{padding:'25px',borderRadius:'15px',border:'2px solid grey',color:'black', height:'auto'}}>
                <Form>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group> 
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Control type="subject" placeholder="Subject" />
                    </Form.Group>    
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={4} placeholder="Message"/>
                    </Form.Group>

                    <Button variant="outlined" color="success" endIcon={<SendIcon />} style={{width:'150px'}}>Send</Button>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactForm
