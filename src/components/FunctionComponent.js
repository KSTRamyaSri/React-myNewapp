import React,{useState} from "react";

const FunctionComponent = () => {

    const [state,setState] = useState("Jai sree ram!!");

    const changeHandler = () => {
        setState("Radha Krishnaa!!");
    }

    return(
        <>
            <h1>Function Components and state Management</h1>

            <h4>{state}</h4>
            <button onClick={changeHandler}>click mee!!</button>
        </>
    );

}

export default FunctionComponent;