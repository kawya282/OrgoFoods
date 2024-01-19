import React from 'react'
import Navigation from '../../../components/navbar/Navigation'
import Footer from '../../../components/footer/Footer'
import DashboardTab from './DashboardTab'

function Dashboard() {

  return (
    <div>
        <Navigation/>
        <DashboardTab/>
        <Footer/>
    </div>
  )
}

export default Dashboard
