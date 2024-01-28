import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import HeaderTwo from '../../components/headers/HeaderTwo'
import Data from "../../components/products/Data";
import ProductCard from '../../components/products/ProductCard';
import FilterButton from '../../components/FilterButton';
import Footer from '../../components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

function Shop() {
  const [product, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  const mainstyle = {
    padding:'5%',
    color: '#6ab04c',
    fontSize: '45px',
    fontFamily: 'Courgette'
  }

  return (
    <div>
      <Navigation/>
      <HeaderTwo page="SHOP"/>
      <Container fluid className='mt-5'>
        <Row className='justify-content-md-center'>
          <Col xs={12}>
            <h1 style={mainstyle}>All Products</h1>
          </Col>
          <Col xs={12} md={12}>
            <FilterButton filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
          </Col>
          <Col className='mt-3 mx-0'>
            <ProductCard product={product} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Shop
