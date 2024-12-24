//day 1
// import React from "react";
// import About from "./About";

// function Home(){

//     return(

//         <>
//             <h1>This is homepage</h1>
//             <p>About page calling from Home</p>
//             <About/>
//         </>

//     );

// }
// export default Home;


import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
           <h1>Age : {this.props.msg.age}</h1>
           <h1>Message : {this.props.msg.message}</h1>
      </div>
    )
  }
}

export default Home
