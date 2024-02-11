import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Checkout from './components/Checkout.jsx'
import ServiceDetails from './components/ServiceDetail.jsx'


 export default function App() {
  return (
  <Router>
    <nav style={{margin:10}}>
      <Link to = "/" style={{padding:5}}>
        Home</Link>
      <Link to = "./about" style={{padding:5}}>
        About</Link>
      <Link to = "./services" style={{padding:5}}>
        Sevices</Link>
    </nav>

    <Routes>
        <Route path ="/" element={<Home/>}/> 
        <Route path ="/about" element={<About/>}/>
        <Route path ="/services" element={<Services/>}/>
        <Route path ="/checkout" element={<Checkout/>}/>
        <Route path ="/services/:serviceId" element={<ServiceDetails/>}/>
    </Routes>
  </Router>
  )
}


