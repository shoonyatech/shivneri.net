import React , {Component} from 'react';
import "./App.scss"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <Router>
           <div className="App"> 
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
           </Router>
        );
    }
}

export default App;