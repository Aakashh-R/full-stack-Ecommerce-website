import React from 'react'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Placeorders from './pages/Placeorders'
import Navbar from './components/NAvbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} /> 
      <Route path="/placeorders" element={<Placeorders />} />
      </Routes>
    </div>
  )
}

export default App