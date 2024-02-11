import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext.jsx';


function Navbar(props){

const {color} = useContext(ThemeContext)

    return(
         <div className={`${color}-theme`}>

 <ul className='nav-items'>
       <li><h2>HOME</h2></li>
       <li><h2>ABOUT</h2></li>
       <li><h2>CONTACT</h2></li>
 </ul>

         </div>
    );
}

export default Navbar
