import React from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function SignUp() {
  return (
    <div>
      <Container>
        <Row style={{backgroundImage:'url("https://img.freepik.com/free-photo/top-view-colorful-fruits-vegetables_23-2149235834.jpg")', width:'auto', height:'80vh', backgroundSize:'cover',marginTop:'5%'}}>
            <h1 style={{paddingTop:'7%',color:'white',fontSize:'50px'}}>SignUp</h1>
            <Col className='mx-auto' xs={12} md={7} style={{backgroundColor:'rgba(256,256,,256,0.1)', width:'auto', height:'auto',padding:'5px',borderRadius:'15px'}}>
                <Form>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group> 
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>    
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>

                    <Button variant="contained" color="success" size="medium">Submit</Button>

                    <h6 style={{margin:'10px'}}>Don't have an account <Link to="/login">Login</Link></h6>
                </Form>
            </Col>
        </Row> 
      </Container>  
    </div>
  )
}

export default SignUp
