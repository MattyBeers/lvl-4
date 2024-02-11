//importing needed dev tools 
import React, {useEffect, useState} from "react"
import axios from "axios"

//things context creates context to manage state and functions 
const ThingsContext= React.createContext()

// a function component that provides context value 
function ThingsContextProvider(props){
    const [list, setList] =useState([])
//state hook to organize the list of things 
    const [newThing, setNewThing] = useState({
        title:"",
        description:"",
        imgUrl:""
    })

//use effect fetch hook to the list of things from api for when each component mounts 
useEffect(()=>{
    axios.get("https://api.vschool.io/<mattbeers>/thing")
    .then(response => setList(response.data))
},[])
console.log(list)
//event handler used to update newThings state as the user types 
function handleChange(e){
    const {name, value} = e.target

    setNewThing(prevNewThing=> {
        return{
            ...prevNewThing,
            [name]:value
        }
    })
}
//function that adds to the new things list by making post request to Api 
function addThing(){
    axios.post("https://api.vschool.io/<mattbeers>/thing", newThing)
    .then(response =>setList(prev => [...prev, response.data]))
}
//delete function that allows the user to delete post requests 
function deleteThing(id) {
    axios.delete(`https://api.vschool.io/<mattbeers>/thing/${id}`)
      .then(() => setList(prevList => prevList.filter(item => item._id !== id)));
  }
// makes sure the id is defined before making request 
  function editThing(id, update) {
    // checks id than makes the request
    if (id) {
      axios.put(`https://api.vschool.io/<mattbeers>/thing/${id}`, update)
        .then(response => {
          setList(prevList => prevList.map(item => item._id !== id ? item : response.data));
        })
        .catch(error => console.error("Error editing thing:", error));
    } else {
      console.error("Cannot edit without a valid id");
    }
  }
  //handler to submit new thing
function handleSubmit(e){
    e.preventDefault()
    addThing()
    setNewThing({
        title:"",
        description:"",
        imgUrl:""
    })
}
//Provide the context values to the components wrapped by this context provider so that you can use when needed in the site
return(
    <ThingsContext.Provider value={{
        handleChange,
        handleSubmit,
        deleteThing,
        editThing,
        newThing,
        list
    }}>
                {props.children}
    </ThingsContext.Provider>
)
} //export for use in other components 
export {ThingsContext, ThingsContextProvider } 