import React from 'react'

import About from './Components/pages/About'
import Home from './Components/pages/Home'
import Shop from './Components/pages/Shop'
import Contact from './Components/pages/Contact'
import Services from './Components/pages/Services'
import Blog from './Components/pages/Blog'
import Cart from './Components/pages/Cart'
import Navbar from './Components/pages/Navbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/pages/Footer'



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App