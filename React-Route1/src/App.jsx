import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Checkout from './components/Checkout.jsx'
import ProductDetails from './components/ProductDetails.jsx'



export default function App(){
  return(
    <Router>

        <nav style={{margin:10}}>
        <Link to="/" style={{padding:5}}>
          Home
        </Link>
        <Link to= "/about" style ={{padding:5}}>
          About
        </Link>
        <Link to= "/products" style ={{padding:5}}>
          Products
        </Link>
        </nav> 


      <Routes>
        <Route path ="/" element={<Home/>}/> 
        <Route path ="/about" element={<About/>}/>
        <Route path ="/products" element={<Product/>}/>
        <Route path ="/checkout" element={<Checkout/>}/>
        <Route path ="/products/:productID" element={<ProductDetails/>}/>
      </Routes>
    </Router>
  )
}