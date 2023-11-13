import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../../component/frontEnds/Footer'
import NavbarComponent from '../../component/frontEnds/Navbar'

export default function FrontEndLayout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  )
}
