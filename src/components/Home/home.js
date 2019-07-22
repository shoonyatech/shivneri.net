import React , {Component} from 'react';
import SignIn from "../SignIn/SignIn"
import SignOut from "../SignOut/SignOut"
import {BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';

class App extends Component {
    render(){
        return(
        <div>
               <header className="App-header">  
               <nav>
                        <Link to="/" activeClassName="active">Home</Link>
                        {" | "}
                        <Link to="/signin" activeClassName="active">Sign In</Link>
                        {" | "}
                        <Link to="/signout" activeClassName="active">Sign Out</Link>
                </nav>
               </header>
               <section className="App-content">
                <div className="content">
                content
                </div>
               </section>
               <footer className="App-footer">
                footer
               </footer>
        </div>
        )
    }
}

export default App;