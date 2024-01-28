import React,  { useState } from 'react'
import { Container, Row, Col, Image, Modal} from 'react-bootstrap';
import Navigation from '../../components/navbar/Navigation'
import Footer from '../../components/footer/Footer'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function Cart() {

  return (
    <div>
      <Navigation/>
      <Container className="pt-3 bg-gray-100">
        <Container fluid style={{backgroundColor:"green", width:"100%"}}>
        <h1 className="mb-4 py-2 text-center text-2xl font-bold" style={{color:'white'}}>Cart Items</h1>
        </Container>
        <Row className="justify-content-md-center" xs={2} md={1}>
          <Col xs={12} md={7}>
            <div className="mb-4 rounded-lg border p-4 d-flex flex-row align-items-center">
              <Image src="" alt="product-image" rounded style={{ width: '25%' }} className="w-25 mb-3" />
              <div className="mx-4 px-4">
              <h3 className="text-lg font-bold text-gray-900">Product name</h3>
              <h6 className="text-sm text-gray-900">100g</h6>
              <h3 className="mt-1 text-xs font-semibold">Rs.100.00</h3>
              </div>
              <DeleteIcon style={{ marginLeft: 'auto' }}/>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className={`mb-4 rounded-lg border p-4`}>
              <div className="mb-2 d-flex justify-content-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">Rs.100.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">Rs.150.00</p>
              </div>
              <hr className="my-4" />
              <div className="d-flex justify-content-between mb-3">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">Rs.250.00</p>
                </div>
              </div>
              <Button component={Link} to="/login" variant="contained" color="success" size="large" className="w-100" block>Buy Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Cart
