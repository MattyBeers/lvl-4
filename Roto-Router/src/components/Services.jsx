import React from "react"
import serviceData from "./ServiceData"
import {useNavigate, Link} from  "react-router-dom"

export default function Services() {

    const navigate = useNavigate()
    
    const services = serviceData.map(service =>(
            <h3 key={service._id}>
                <Link to ={`/services/${service._id}`}>{service.name}
                </Link>
                -{service.price}
                </h3>
    ))
    
    
    return (
        <div style={{padding:20}}>
             <h1>Services -2</h1>


            <p>Not to Sure Yet what should go in this p Almost know</p>


            <button onClick = {()=> navigate('/checkout')}>Check out</button>
            <button onClick = {()=> navigate('/')}>Return to Home</button>
            <button onClick = {()=> navigate('1')}>Go foward 1</button>
            <button onClick = {()=> navigate('-1')}>Go Back 1 </button>

            <div>
                <h1>Services List Page</h1>
                {services}
            </div>

        </div>
    )
}
