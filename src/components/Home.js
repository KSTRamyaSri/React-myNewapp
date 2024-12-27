import React from "react";
import About from "./About";

function Home(){
  return(
    <div>
      <h1>This is homepage</h1>
      <p>About page calling from Home</p>
      <About/>
    </div>
  );
}
export default Home;
