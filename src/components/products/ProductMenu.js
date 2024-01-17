import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container } from 'react-bootstrap';

function ProductMenu() {
  return (
    <Container>
      <h1>Our Products</h1>
      <h4>Protect the health of every home</h4>
      <Row xs={1} md={3} className="mt-4 g-1">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/fresh-organic-vegetable_114106-1589.jpg" />
            <Card.Body>
              <Card.Title>VEGETABLES</Card.Title>
              <Button component={Link} to="/shop" variant="contained" color="success" size="large">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/assorted-mixed-fruits_74190-6961.jpg" />
            <Card.Body>
              <Card.Title>FRUITS</Card.Title>
              <Button component={Link} to="/shop" variant="contained" color="success" size="large">View More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/cans-storage-various-grains_133001-369.jpg" />
            <Card.Body>
              <Card.Title>DRIES</Card.Title>
              <Button component={Link} to="/shop" variant="contained" color="success" size="large">View More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>  
  )
}

export default ProductMenu
