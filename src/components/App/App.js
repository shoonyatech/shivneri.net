import React , {Component} from 'react';
import "./App.scss"
import SignIn from "../SignIn/SignIn";
import SignOut from "../SignOut/SignOut";
import Home from "../Home/home"
import {BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';

class App extends Component {
    render(){
        return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signout" component={SignOut}/>
            </Switch>
        </div>
        )
    }
}

export default App;