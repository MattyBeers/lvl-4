import React from "react"
import { useNavigate } from "react-router-dom"

export default function About(){

    const navigate = useNavigate()


    return(
        <div style={{padding: 20}}>
            <h3>About View</h3>

                <h2> Code Plumber Services </h2>
                <p>this is an exercise of making a mock SPA (Single Page Application) for a plumbing company website.
             </p>

            <button onClick = {()=> navigate('/')}>Return to Home</button>
            <button onClick = {()=> navigate('-1')}>Go foward 1</button>
            <button onClick = {()=> navigate('1')}>Go Back 1 </button>

        </div>
    )
}