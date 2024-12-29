import React,{useEffect, useState} from "react";


const LocalstorageLogin = () => {

    const [loginData,setLoginData]= useState({
        'email':"",
        'password':"",
    })

    const{email,password} = loginData;

    let [finalData,setFinalData] = useState([])

    useEffect(() => 
    { 
        const local_data = JSON.parse(localStorage.getItem('data')) || []; 
        setFinalData(local_data); 
    }, []);

    const changeHandler = (e) => {
        setLoginData({...loginData, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let msg = ""

        const emailExists = finalData.find(userData => userData.email === email);
          if(emailExists){
                msg ="";
                if(emailExists.password===password){
                    msg += `welcome,  ${emailExists.firstname}  ${emailExists.lastname}  You are successfully Logged In... `;
                } 
                else{
                    msg+=" You are Registered But, Password is incorrect. Please enter correct password to login";
                }

            }
            else{
                msg= "you are not registered";
            }
            alert(msg)
    }

    

  return (
    <>
        <form onSubmit={submitHandler}>
        <input type="email" name="email" placeholder="Enter your Email" onChange={changeHandler}/><br/>
        <input type="password" name="password" placeholder="Enter Password" onChange={changeHandler}/><br/>
        <input type="submit" value="submit"/>
        </form>
    </>
  )
}

export default LocalstorageLogin