import React , {Component} from 'react';
import "./App.scss"

class App extends Component {
    render(){
        return(
           <div className="App"> 
               <header className="App-header">  
                header
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
        );
    }
}

export default App;