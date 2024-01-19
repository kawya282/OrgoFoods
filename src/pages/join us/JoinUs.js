import React from 'react'
import Navigation from '../../components/navbar/Navigation'
import HeaderTwo from '../../components/headers/HeaderTwo'
import Footer from '../../components/footer/Footer'
import Partnership from '../../components/services/Partnership'
import SellerForm from '../../components/contact/SellerForm'
import Partners from '../../components/services/Partners'

function JoinUs() {
  return (
    <div>
      <Navigation/>
      <HeaderTwo page="JOIN US"/>
      <Partnership/>
      <SellerForm/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default JoinUs
