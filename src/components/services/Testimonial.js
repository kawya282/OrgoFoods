import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Avatar } from '@mui/material';

function Testimonial() {
  return (
    <Container className='mt-4 pt-4'>
        <h1>Our Products</h1>
        <h4>Protect the health of every home</h4>
        <Row xs={1} md={3} className="mt-4 g-1">
            <Col>
                <Card>
                    <Avatar className='mx-auto my-3' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Card.Body>
                        <Card.Title>Remy Sharp</Card.Title>
                        <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Avatar className='mx-auto my-3' alt="Travis Howard" src="/static/images/avatar/2.jpg" />  
                    <Card.Body>
                        <Card.Title>Travis Howard</Card.Title>
                        <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Avatar className='mx-auto my-3' alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                    <Card.Body>
                        <Card.Title>Cindy Baker</Card.Title>
                        <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row> 
    </Container>     
  )
}

export default Testimonial
