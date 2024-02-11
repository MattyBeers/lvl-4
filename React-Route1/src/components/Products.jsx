import React from "react"
import productData from "./ProductData.jsx"
import { useNavigate, Link } from "react-router-dom";


export default function Products(){
const navigate = useNavigate()

const Products =productData.map(product =>(
        <h3 key={product._id}>
             <Link to ={`/products/${product._id}`}>{product.name}</Link>
        -{product.price}
         </h3>
    ))



    return(

        <div style={{padding:20}}>
            <h2>Products -2c</h2>

            {<p>Lorem ipsum dolor sit amet, consectetur adip ID. Alot more 
                Text to go along with this paragraph product</p>}


            <button onClick = {()=> navigate('/checkout')}>Check out</button>
            <button onClick = {()=> navigate('/')}>Return to Home</button>
            <button onClick = {()=> navigate('1')}>Go foward 1</button>
            <button onClick = {()=> navigate('-1')}>Go Back 1 </button>

        </div>
    )
}