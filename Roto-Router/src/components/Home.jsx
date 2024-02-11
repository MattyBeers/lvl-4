import {useNavigate} from "react-router-dom"

 function Home(){
    const navigate = useNavigate()

    return(
        
        <div style={{padding:20}}>

            <h1>Home View</h1>
            {<p>Coders Plumping services</p>}
            <button onClick = {()=> navigate('./services')}>Go to Service page</button>
            <button onClick = {()=> navigate('-1')}>Go back 1</button>
            <button onClick = {()=> navigate('1')}>Go foward 1</button>
            <button onClick = {()=> navigate('2')}>Go Foward 2</button>

        </div>
    )
}
export default Home