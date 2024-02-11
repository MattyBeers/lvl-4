import React, {useState, useContext} from 'react';


const ThemeContext = React.createContext()

function ThemeContextProvider (props){

    const [color, setColor] = useState("dark")
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
        console.log(color)
    }
    
    return(
          <ThemeContext.Provider value={{
                color,
                toggleTheme
            }}>
                    {props.children}
                
            </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}