import React, { useContext } from 'react';
import {ThemeContext} from "../themeContext.jsx"


function Content (props) {
  
    const {toggleTheme, color} = useContext(ThemeContext)
   

    return (  
        <div className={`${color}-theme`}>

        <h2 className='main-text'>Click the button to toggle the theme color</h2>

        <div className='-button'>
        <button onClick= {toggleTheme} className= 'button'>
             Change Theme
        </button>
        </div>

        </div>
    );
}

export default Content

