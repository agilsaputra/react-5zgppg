import React, { Component } from 'react';

export default class FletchApi extends React.Component {
  state ={
    loading : true
  }

  ComponentDidMount (){


  }


  render () {
        return <div> 
          {this.state.loading ? <div>loading data... </div> : <div> not loading </div>}
          
           </div>

  }



}