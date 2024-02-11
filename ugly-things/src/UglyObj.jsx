import {useContext, useState} from 'react'
import { ThingsContext } from './ThingsContext'

//function for rendering Ugly objects 
function UglyObj(props){
    //delete function from context 
    const {deleteThing, editThing} =useContext(ThingsContext)
    //state that manages edit for the component 
    const [editMode, setEditMode] = useState(false)
    
        //state that manages values for 'thing'
    const [newEditThingy, setNewEditThingy]=useState({
       title: props.uglyThingy.title,
       description: props.uglyThingy.description,
       imgUrl: props.uglyThingy.imgUrl

    })

    console.log(props)

    // handler function that manages edited values as the user types
    function handleThingChange(e){
        const {name, value} =e.target
        setNewEditThingy(prevNewEditThingy=>({
            ...prevNewEditThingy,
            [name]: value
        }))
     }
//handler function to go from edit and view mode
     function handleEditMode(){
        setEditMode(prevEditMode=> !prevEditMode)
     }
// saves edited values in state
     function save(){
        editThing(props.uglyThingy._id, newEditThingy)
        handleEditMode()
     } 

    // Render different content based on whether the component is in edit mode prev/old mode 
     return (
        <>
            {editMode ?
                <div className="new-input-form">
                    <input
                        type="text"
                        placeholder="title"
                        onChange={handleThingChange}
                        name="title"
                        value={newEditThingy.title}
                    />
                    <input
                        type="text"
                        placeholder="description"
                        onChange={handleThingChange}
                        name="description"
                        value={newEditThingy.description}
                    />
                    <input
                        type="text"
                        placeholder="imgUrl"
                        onChange={handleThingChange}
                        name="imgUrl"
                        value={newEditThingy.imgUrl}
                    />
                    <button onClick={save}>Save</button>
                </div> :
                <div className="thing-container">
                    <h1 className="thing-title">{props.uglyThingy.title}</h1>
                    <img src={props.uglyThingy.imgUrl} alt={props.uglyThingy.description} />
                    <div className="button-container">
                    <h3 className="thing-description">{props.uglyThingy.description}</h3>
                        <button onClick={handleEditMode}>Edit</button>
                        <button onClick={() => deleteThing(props.uglyThingy._id)}>Delete</button>
                    </div>
                </div>
            }
        </>

    )
}
//export ugly object 
export default UglyObj

