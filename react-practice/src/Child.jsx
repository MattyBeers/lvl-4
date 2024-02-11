import React from 'react';
import Grandchild from "./Grandchild"

function Child() {
    return (  
        <React.Fragment>
                <h1>I,m the Child componenet</h1>
                <Grandchild/>
        </React.Fragment>
    );
}

export default Child