import React, {useState, useContext} from 'react'
import Navbar from './components/Navbar.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import { ThemeContextProvider } from './themeContext.jsx'


function App(props){

return (
      <>
    {/* parent for the components */}
        <Navbar/>
        <Content/>
        <Footer/>
    </>
    
  );
}

export default App
