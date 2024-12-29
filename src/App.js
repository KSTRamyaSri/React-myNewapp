// day 1 - functional components and integration of components
// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

// function App() {
//   return (
   
//     <>
//       <header class="App-header">
//         <h1>hello</h1>
//         <p>kjasdnakjkjsjd</p>
//         <Home/>
//       </header>
     
//     </>
      
//   );
// }

// export default App;

// import React, {Component} from "react";
// import Home from "./components/Home";

// class App extends Component{

//   constructor(){
//     super();
//     this.state = {
//       message : "welcome",age : "30"
//     }
//   }

//   changeHandler = () =>{
//     this.setState({
//       message : "thank you",
//       age : 35
//     })
    
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.message}</h1>
//         <h2>{this.state.age}</h2>
//         <button onClick={this.changeHandler}>Click</button>
//         <Home msg={this.state}/>
//       </div>
//     )
//   }

// }
 //export default App


//task2
// import React, { Component } from 'react';
// import Home from "./task2/Home";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Home/>
//       </div>
//     );
//   }
// }
// export default App;

// import React, {Component} from "react";
// import Home from "./task3/Home";

// class App extends Component{
//   render(){
//     return(

//         <div>
//           <Home/>
//         </div>

//     );
//   }
// }

// export default App;


// import React, {Component} from "react";
// import IncrementDecrement from "./components/IncrementDecrement";

// class App extends Component{
//   render(){
//     return(
//       <>
//         <IncrementDecrement/>
//       </>
//     );
//   }
// }

// export default App;

// import React, {Component} from "react";
// // import FormData from "./components/FormData";
// // import Counter from "./components/Counter";
// import FunctionComponent from "./components/FunctionComponent";

// class App extends Component{
//   render(){
//     return(
//       <>
//         {/* <FormData/> */}
//         {/* <Counter/> */}
//         <FunctionComponent/>
//       </>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import {FormHandling} from './components/FormHandling';

// export class App extends Component {
//   render() {
//     return (
//       <>
//       {/* <FormData/> */}
//       <FormHandling/>
//       </>

//     )
//   }
// }

// export default App

import React from "react";
import Localstorage from "./components/Localstorage";
import LocalstorageLogin from "./components/LocalstorageLogin";


const App = () => {
  return (
    <>
        {/* <Localstorage/> */}
        <LocalstorageLogin/>
    </>
  )
}

export default App;
