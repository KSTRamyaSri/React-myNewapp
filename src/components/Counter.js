import React,{useState} from "react";

const Counter = () => {

    const [count,setCount] = useState(0);

    const Increment = () =>{
        setCount(count + 1)
    }

    const Decrement = () =>{
        setCount(count - 1)
    }

    return(
        <>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
          
        </>
    );
}

export default Counter;