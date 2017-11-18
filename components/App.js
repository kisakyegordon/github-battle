import React, {Component} from 'react';
import Popular from '../components/popular';
import ReactRouter from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;
import Nav from './Nav';

class App extends Component{
    render(){
        return (
            
                <BrowserRouter>
                <div className='container'>
                <Nav />
                <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/battle' component={Battle} />
                <Route  path='/battle/results' component={Results} />
                <Route path='/popular' component={Popular} />
                <Route render={function (){
                    return <h4> 404 - Page Not Found </h4>
                }} />
                </Switch>
                </div>
                </BrowserRouter>
            

        )
    }
}

export default App;