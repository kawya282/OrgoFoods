import React from 'react'
import Navigation from '../../components/navbar/Navigation'
import HeaderOne from '../../components/headers/HeaderOne'
import ProductMenu from '../../components/products/ProductMenu'
import Services from '../../components/services/Services'
import Footer from '../../components/footer/Footer'
import Patner from '../../components/services/Patner'
import Vision from '../../components/services/Vision'

function Home() {
  return (
    <div>
      <Navigation/>
      <HeaderOne/>
      <Services/>
      <Vision/>
      <ProductMenu/>
      <Patner/>
      <Footer/>
    </div>
  )
}

export default Home
