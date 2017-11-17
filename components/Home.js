import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component{
    render(){
        return (
            <div className='home-container'>
                <h3> Welcome - Battle with your friends on projects </h3>
                <NavLink className='button' to='/battle'> BATTLE </NavLink>
            </div>
        )
    }
}

export default Home;