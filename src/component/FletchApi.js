import React, { Component } from 'react';


export default class FletchApi extends React.Component {
  state ={
    loading : true ,
    person : [] 
  } ;

  async componentDidMount() {
      const url = "https://api.randomuser.me/" ;
      const response = await fetch (url);
      const data = await response.json();
      this.setState ({ person: data.results[0], loading:false });
  
  }

  render () {
        return <div> 
          {this.state.loading || ! this.state.person ? (<div>loading data ... </div> ): 
          (
            <div> 
              <div> {this.state.person.name.title}
              </div>
              <div> {this.state.person.name.first}
              </div>
              <div> {this.state.person.name.last}
              </div>
              <img src={this.state.person.picture.large} />
            
            </div>
      
          )}
          
           </div>

  }

}