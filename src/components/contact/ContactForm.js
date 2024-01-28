import React from 'react'
import { Container, Image, Row, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function ContactForm() {
  const mainstyle = {
    color: '#6ab04c',
    fontSize: '45px',
    fontFamily: 'Courgette'
  }

  return (
    <div>
      <Container fluid className='mt-5 pt-4'>
        <Row xs={2} md={1} className="mt-4 g-1">
            <Col xs={12} md={12} xl={6}>
                <Image src='https://img.freepik.com/premium-photo/variety-fresh-fruits-supermarket_392895-277167.jpg' fluid style={{borderRadius:'15px'}}/>
            </Col>
            <Col xs={12} md={12} xl={6} style={{padding:'25px',borderRadius:'15px',color:'black', height:'auto'}}>
              <h3 style={mainstyle}>Message Us</h3>
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
