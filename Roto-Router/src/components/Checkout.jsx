import { useNavigate } from "react-router-dom"

function Checkout(){
   
const navigate = useNavigate()
   
   
    return(
        <div style ={{padding:20}}>
            <h2>Checkout -3</h2>
            <p>Service Request Confirmation</p>

             <button onClick={()=> navigate("/")}>Return to Home</button> 
             <button onClick={()=> navigate(-1)}>Go Back 1</button> 
             <button onClick={()=> navigate(-2)}>Go Back 2</button> 
        </div>

)
    }

export default Checkout