import React from 'react'
import {Form} from 'react-bootstrap'
import Button from '@mui/material/Button';

function SignUp() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 justify-flex-start">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
        </Form.Group>    
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"/>
        </Form.Group>
        <Button variant="contained" color="success" size="medium">Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp
