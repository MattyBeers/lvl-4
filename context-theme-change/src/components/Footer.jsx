import React, {useContext} from 'react';
import {ThemeContext} from '../themeContext.jsx';

function Footer (props) {

    const {color} = useContext(ThemeContext)

    return ( 

        
        <div className= {`${color}-theme`}>
            <div className='foot'> This Amazing Footer</div>
        </div>
        

     );
}
export default Footer ;
