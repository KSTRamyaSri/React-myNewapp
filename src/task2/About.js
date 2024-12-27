import React, { Component } from 'react';


class About extends Component {

    
  render() {
    return (
        <div>
             <button onClick={this.props.fun}>Click</button>
             <h1>{this.props.name}</h1>
        </div>
       
    )
  }
}

export default About