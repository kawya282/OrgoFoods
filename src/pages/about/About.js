import React from 'react'
import './About.css'
import Navigation from '../../components/navbar/Navigation'
import HeaderTwo from '../../components/headers/HeaderTwo'
import Intro from '../../components/services/Intro'
import Footer from '../../components/footer/Footer'
import Testimonial from '../../components/services/Testimonial'
import Reward from '../../components/services/Reward'

function About() {
  return (
    <div>
      <Navigation/>
      <HeaderTwo page="ABOUT"/>
      <Intro/>
      <Reward/>
      <Testimonial/>
      <h1>About page</h1>
      <Footer/>
    </div>
  )
}

export default About
