import React, { useContext} from "react"
import { ThingsContext } from "./ThingsContext"

function Form(){
// enables functions and state from context using context 
const {handleChange, handleSubmit, newThing} = useContext(ThingsContext)
//Renders the form with input fields and a submit button
    return(
        <form onSubmit={handleSubmit}>
<ul>
         <ui>   
                <input
                placeholder="Title"//display when input is empty 
                name="title"// name to identify input 
                value={newThing.title}// input controlled by new thing
                onChange={handleChange}// onChange event handler 
                className="TID"// className used for styling purposese 
                />
          </ui>  
          <ui>
                <input
                placeholder="Img Url"//display when input is empty 
                name="imgUrl"// name to identify input feild 
                value={newThing.imgUrl}// The value of the input field, controlled by the state variable newThing.imgUrl
                onChange={handleChange}//function called when input changes 
                className="TID"// label for styling 
                />
          </ui>
            <ui>
                <input 
                placeholder="Description"
                name="description"
                value={newThing.description}
                onChange={handleChange}
                className="TID"
                />
        </ui>
            
</ul>
                <p></p>
                <button className="form-submit">Submit</button>

        </form>
    )}

    export default Form