import React from "react"
import headshotImage from "./images/headshot1_IMG_1869.png"

export default function Info(){
    return(
    <div>
         <img src ={headshotImage} className="pic" alt="Matthew's headshot" />
        <h4> Matthew Beers</h4> 
         <h3> FullStack Junior Developer </h3>
          <p> https://github.com/MattyBeers </p>
          <button className ="button"> Email </button>
        
    </div>
    )
}