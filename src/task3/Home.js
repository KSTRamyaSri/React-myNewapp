import React, { Component } from 'react';

class Home extends Component {
    
    constructor(){
        super();
        this.state = {
          count:0
        }
    }
    
    increment=()=>{
    
      this.setState({
        count:this.state.count+1
      })
      
     
    }
    decrement=()=>{

      this.setState({
        count:this.state.count-1
      })
    
    }
 

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>inc</button>
        <button onClick={this.decrement}>dec</button>
      </div>
    );
  }
}

export default Home;
