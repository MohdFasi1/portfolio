import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
Outlet

const Layout = () => {
  return (
    <div className=' min-h-screen bg-tertary'>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default Layout