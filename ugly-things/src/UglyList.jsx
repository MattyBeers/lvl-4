


import {useContext} from "react"
import UglyObj from "./UglyObj"
import { ThingsContext } from "./ThingsContext"


//Functional component for rendering a list of "UglyObj" components

function UglyList() {
    // Accesses the list from context using context 
    const { list } = useContext(ThingsContext)

    //maps the list to create an array of Ugly Obj components 
    const displayList = list.map(function (uglyThingy) {

        return (
            //renders a UglyObj element in each item of the list 
            <UglyObj
                key={uglyThingy._id}
                uglyThingy={uglyThingy}
            />
        )
    })
   // Render the list of UglyObj components within a container
    return (
        <div className="list">
            {displayList}
        </div>
        
    )
}

export default UglyList