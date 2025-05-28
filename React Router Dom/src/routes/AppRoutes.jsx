import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Facebook from '../pages/Facebook.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}>
        <Route path='Facebook' element={<Facebook/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes