import React, { Component } from 'react';
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from "./component/home";
import Login from "./component/login";
import FletchApi from "./component/FletchApi" ;
import Header from "./component/header" ;


class App extends Component{ 
  render(){
    return (     
      <div>
      
      <div> <Header/></div>
      
        <Router >
           <Switch>
              <Route path="/">
              
             </Route>     
             <Route path="/Login" >
                 <Login/>
             </Route>               
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;