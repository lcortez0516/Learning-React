import React from 'react'
import Nav from '../component/nav'
import Facebook from './Facebook.jsx'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      
      <h1>This is the Contact Page</h1>
      <Nav/>
      <Link to="Facebook" element={<Facebook/>}>Facebook</Link>
      <Outlet/>
    </div>
    
  )
}

export default Contact