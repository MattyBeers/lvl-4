import React from 'react'

export default function About(){
    return(
        <div style={{padding: 20}}>
            <h2>About View</h2>

            <p>Lorem Ipsum</p>

            <button onClick = {()=> navigate('/')}>Return to Home</button>
            <button onClick = {()=> navigate('1')}>Go foward 1</button>
            <button onClick = {()=> navigate('2')}>Go Back 1 </button>

        </div>
    )
}
