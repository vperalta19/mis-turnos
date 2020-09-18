import React from 'react';
import ReactDOM from 'react-dom';

class InputItems extends React.Component{

    render(){
        return(
            <form>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input type="text" />
            </form>
        )
    }
}

export default InputItems