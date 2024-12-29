import React,{useState} from "react";

const IncDec = () => {
    const [Num,setNum]=useState();
    const [Value,setValue]=useState(0);

    const inc = (e) =>{
        e.preventDefault();
        setValue(Value+Number(Num));
        setNum("");
    }
    const dec = (e) =>{
        e.preventDefault();
        setValue(Value-Number(Num));
        setNum("");
    }

    return(
        <>
          <h1>incDec</h1>
          <h2>{Value}</h2>
          <form>
            <input type="number" name="Num" value={Num} placeholder="number" onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>  
          </form>  
        </>
    );

}

export default IncDec;