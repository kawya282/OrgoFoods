import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Avatar, Rating } from '@mui/material';

function Testimonial() {
    const [value, setValue] = React.useState(5);

    const mainstyle = {
        padding:'5%',
        color: '#6ab04c',
        fontSize: '45px',
        fontFamily: 'Courgette'
      }
    
      const substyle = {
        paddingBottom: '5%',
        color: '#312f2f'
      }
  return (
    <Container className='mt-4 pt-4'>
        <h1 style={mainstyle}>Testimonial</h1>
        <h4 style={substyle}>Our Customers Says...</h4>
        <Row xs={1} md={3} className="mt-4 g-2 mx-3">
            <Col>
                <Card>
                    <Avatar className='mx-auto my-3' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Card.Body>
                        <Card.Title>Remy Sharp</Card.Title>
                        <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                        <Rating name="read-only" value={value} readOnly />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Avatar className='mx-auto my-3' alt="Travis Howard" src="/static/images/avatar/2.jpg" />  
                    <Card.Body>
                        <Card.Title>Travis Howard</Card.Title>
                        <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                        <Rating name="read-only" value={value} readOnly />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Avatar className='mx-auto my-3' alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                    <Card.Body>
                        <Card.Title>Cindy Baker</Card.Title>
                        <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                        <Rating name="read-only" value={value} readOnly />
                    </Card.Body>
                </Card>
            </Col>
        </Row> 
    </Container>     
  )
}

export default Testimonial
