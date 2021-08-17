import React, { Component } from 'react';
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from "./component/home";
import Login from "./component/login";
import FletchApi from "./component/FletchApi" ;

class App extends Component{ 
  render(){
    return (
      <div>
        <Router >
           <Switch>
              <Route path="/">
                 <Home/>
             </Route>     
             <Route path="/Login" >
                 <Login/>
             </Route>               
            </Switch>
        </Router>
        <div className="FletchApi">
        <FletchApi/>
      </div>
      </div>
    );
  }
}

export default App;