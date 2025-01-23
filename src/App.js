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

// import React from "react";
// import Localstorage from "./components/Localstorage";
// import LocalstorageLogin from "./components/LocalstorageLogin";
// import NameEditing from "./components/NameEditing";
// import KeyConcepts from "./components/KeyConcepts";
// import Axios from "./components/Axios";
// import Fetch from "./components/Fetch";


// const App = () => {
//   return (
//     <>
//         {/* <Localstorage/> */}
//         {/* <LocalstorageLogin/> */}
//         <NameEditing/>
//         {/* <KeyConcepts/> */}
//         {/* <Fetch/> */}
//         {/* <Axios/> */}

//     </>
//   )
// }

// export default App;

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/ReactRouterDom/Layout';
// import Home from './components/ReactRouterDom/Home';
// import Blogs from './components/ReactRouterDom/Blogs';
// import Contact from './components/ReactRouterDom/Contact';
// import NoPage from './components/ReactRouterDom/NoPage';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout/>} >

//             <Route index element={<Home/>} />
//             <Route path="blogs" element={<Blogs/>} />
//             <Route path="contact" element={<Contact/>} />
//             <Route path="*" element={<NoPage/>} />  

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Register from './components/RouterForms/Register'
// import Login from './components/RouterForms/Login'
// import Layout from './components/RouterForms/Layout'
// import NoPage from './components/RouterForms/NoPage'
// import DashBoard from './components/RouterForms/DashBoard'
// import AdminLogin from './components/RouterForms/AdminLogin'
// import UserLogin from './components/RouterForms/UserLogin'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Orders from './components/RouterForms/Orders';
// import NameEditing from './components/NameEditing';



// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout/>} >
//             {/* <Route index element={<Layout/>} /> */}
//             <Route  index element={<Register/>} />
//             <Route path="login" element={<Login/>} />
//             {/* <Route path="dashboard" element={<DashBoard/>} /> */}
//             <Route path="AdminLogin" element={<AdminLogin/> } />
//             <Route path="UserLogin" element={<UserLogin/> } />
//             <Route path="orders" element={<Orders />} />
//             <Route path="todo" element={<NameEditing />} />
//             <Route path="*" element={<NoPage/>} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './components/RouterForms/NoPage';
import Layout from './components/quiz/Layout';
import Register from './components/quiz/Register';
import Login from './components/quiz/Login';
import AdminLogin from './components/quiz/AdminLogin';
import UserLogin from './components/quiz/UserLogin';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="AdminLogin" element={<AdminLogin />} />
            <Route path="UserLogin" element={<UserLogin />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App