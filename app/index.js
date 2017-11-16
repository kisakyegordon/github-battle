import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

class App extends Component{
    render(){
        return (
            <div>
                <h4> Hello React Nation </h4>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))