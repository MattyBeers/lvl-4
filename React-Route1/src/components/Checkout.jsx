import { useNavigate } from "react-router-dom";

export default function Checkout(){

const navigate = useNavigate()

    return(

        <div style={{padding:20}}>
            <h2>Checkout -3c</h2>

            {<p>Lorem ipsum dolor sit amet, consectetur adip ID. Alot more 
                Text to go along with this paragraph checkout</p>}


            <button onClick = {()=> navigate('/')}>Return to Home</button>
            <button onClick = {()=> navigate('1')}>Go foward 1</button>
            <button onClick = {()=> navigate('-1')}>Go Back 1 </button>

        </div>
    )
}