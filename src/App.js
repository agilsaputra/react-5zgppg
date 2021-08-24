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
      <Router>
        <Header/>
      </Router>
    );
  }
}

export default App;