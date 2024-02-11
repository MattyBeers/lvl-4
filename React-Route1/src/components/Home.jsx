import { useNavigate } from "react-router-dom";

export default function Home(){
const navigate = useNavigate()

    return(

        <div style={{padding:20}}>

            <h2>Home View - 1</h2>
            {<p>Lorem ipsum dolor sit amet, consectetur adip ID.</p>}
            <button onClick = {()=> navigate('./products')}>Go to Products page</button>
            <button onClick = {()=> navigate('-1')}>Go back 1</button>
            <button onClick = {()=> navigate('1')}>Go foward 1</button>
            <button onClick = {()=> navigate('2')}>Go Foward 2</button>
        </div>
    )
}