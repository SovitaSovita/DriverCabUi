import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/frontEnds/Navbar'
import Footer from '../../component/frontEnds/Footer'
import Header from '../../component/frontEnds/Header'

export default function FrontEndLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
