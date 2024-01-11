import React from 'react'
import './About.css'
import Navigation from '../../components/navbar/Navigation'
import HeaderTwo from '../../components/headers/HeaderTwo'

function About() {
  return (
    <div>
      <Navigation/>
      <HeaderTwo page="ABOUT"/>
      <h1>About page</h1>
    </div>
  )
}

export default About
