import React from 'react'
import './Home.css'
import Navigation from '../../components/navbar/Navigation'
import HeaderOne from '../../components/headers/HeaderOne'
import ProductMenu from '../../components/products/ProductMenu'
import Services from '../../components/services/Services'

function Home() {
  return (
    <div>
      <Navigation/>
      <HeaderOne/>
      <Services/>
      <h1>Home page</h1>
      <ProductMenu/>
    </div>
  )
}

export default Home
