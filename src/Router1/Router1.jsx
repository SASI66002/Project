import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './../Home/Home'
import Navbar from './../Navbar/Navbar'
import Services from './../Services/Services'
import Partners from '../Partners/Partners'
import Articles from '../Articles/Articles'
import GetInTouch from '../GetInTouch/GetInTouch'


const Router1 = () => {
  return (
    <div>
      <Router>
         <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Partners' element={<Partners/>} />
      <Route path='/Articles' element={<Articles/>} />
      <Route path='/GetInTouch' element={<GetInTouch/>} />

      </Routes>
      </Router>
    </div>
  )
}

export default Router1
