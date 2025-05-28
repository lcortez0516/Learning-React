import React from 'react'
import {Routes, Route} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  )
}

export default AppRoutes