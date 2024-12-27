import React, { Component } from 'react';

import About from './About'


class Home extends Component {

     constructor(){
    super();
    this.state = {
      message : "welcome",age : "30"
    }
  }

  changeHandler = () =>{
    this.setState({
      message : "thank you",
      age : 35
    })
    
  }


  render() {
    return (
      <div>
           
          <About fun={this.changeHandler} name={this.state.message}/>
           <h1>Age : {this.state.age}</h1>
           <h1>Message : {this.state.message}</h1>
           
           
      </div>
    )
  }
}

export default Home
