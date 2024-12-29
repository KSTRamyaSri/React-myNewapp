import React,{useState} from "react";

export  const FormData = () =>{

    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");

    const [finalFirstName,setFinalFirstName] = useState("");
    const [finalLastName,setFinalLastName] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        setFinalFirstName(FirstName);
        setFinalLastName(LastName);
    }

    return(

        <>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input type="text" name="firstname" value={FirstName} placeholder="first name" onChange={(e)=>setFirstName(e.target.value)}/> <br />


                <label>Last Name</label>
                <input type="text" name="lastname" value={LastName} placeholder="last name" onChange={(e)=>setLastName(e.target.value)}/> <br />

                <input type="submit"/>                
            </form>

            <h1>{finalFirstName}</h1>
            <h1>{finalLastName}</h1>
        </>


    );
}



export const FormHandling = () => {

    // using object for storing FormData 
    const [data,setData]= useState({
        'firstname' : "",
        'lastname':"",
        'email':"",
        'password':"",
    })

    const [finalData,setFinalData] = useState([]);

    const{firstname,lastname,email,password} = data;

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        setFinalData(data);
    }

  return (
   <>
    
    <form onSubmit={submitHandler}>
        
        <label>First Name : </label>
        <input type="text" placeholder="FIRST NAME" name='firstname' value={firstname} onChange={changeHandler}/> <br />

        <label>Last Name : </label>
        <input type="text" placeholder="LAST NAME" name='lastname' value={lastname} onChange={changeHandler}/> <br />

        <label>Email : </label>
        <input type="email" placeholder="EMAIL" name='email' value={email} onChange={changeHandler}/> <br />

        <label>Password : </label>
        <input type="password" placeholder="PASSWORD" name='password' value={password} onChange={changeHandler}/> <br />

        <input type="submit" />

    </form>

    <span><h1>FIRST NAME : </h1><p>{finalData.firstname}</p></span>
    <span><h1>LAST NAME :</h1><p>{finalData.lastname}</p></span>
    <span><h1>EMAIL :</h1><p>{finalData.email}</p></span>
    <span><h1>PASSWORD : </h1><p>{finalData.password}</p></span>

   </>
  )
}

