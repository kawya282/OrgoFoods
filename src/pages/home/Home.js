import React from 'react'
import './Home.css'
import Navigation from '../../components/navbar/Navigation'
import HeaderOne from '../../components/headers/HeaderOne'

function Home() {
  return (
    <div>
      <Navigation/>
      <HeaderOne/>
      <h1>Home page</h1>
    </div>
  )
}

export default Home