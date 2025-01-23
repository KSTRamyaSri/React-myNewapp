import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [quizEnrollersData,setQuizEnrollersData]= useState({
        'id':0,
        'firstname' : "",
        'lastname':"",
        'email':"",
        'password':"",
        'panel':""
    })

    const [conPassword,setConPassword] = useState("");
    const{id,firstname,lastname,email,password,panel} = quizEnrollersData;
    let [finalData,setFinalData] = useState([]);
    let ErrorMsg ="";
    
        
    let navigate = useNavigate();

     useEffect(() => 
    { 
        const local_data = JSON.parse(localStorage.getItem('quizEnrollersData')) || []; 
        setFinalData(local_data); 
        setQuizEnrollersData({
            id : Math.floor(Math.random() * 1000) +1,
            panel: 'admin'
         })
       
        
    }, []);


    const changeHandler = (e) => {
        setQuizEnrollersData({...quizEnrollersData, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        
         e.preventDefault(); 
        
        
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailExists = finalData.some(userData => userData.email === email);
        
        if(!emailExists){
        if(passwordRegex.test(password)){

           if(password===conPassword){
                const updatedData = [...finalData,quizEnrollersData];
                setFinalData(updatedData)
                console.log(finalData)
                localStorage.setItem("quizEnrollersData",JSON.stringify(updatedData))
                alert("form submitted")
                navigate("/Login")
           }
           else{
            alert("password not matches")
           }
           
        }
        else{
                ErrorMsg="Password Should Contain";
                if(password.length<8){
                    ErrorMsg +=" Minimum of 8 characters,";
                }
                if(!(/[A-Z]/.test(password))){
                    ErrorMsg+=" atleast one uppercase letter,";
                }
                if(!(/[a-z]/.test(password))){
                    ErrorMsg+=" atleast one lowercase letter,";
                }
                if(!(/[0-9]/.test(password))){
                    ErrorMsg+=" atleast one digit,";
                }
                if(!(/[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(password))){
                    ErrorMsg+=" atleast one special Character,";
                }
                alert(ErrorMsg);
        }
    }
    else{
        if(email==='')
            alert("enter email")
        else
            alert("email already exists")
    }
    
    setQuizEnrollersData({
        id: Math.floor(Math.random() * 1000) +1,
       firstname : "",
       lastname:"",
       email:"",
       password:"",
       panel:'admin'
    })
    setConPassword("")
   
    }

  return (
    <>
        <h1>REGISTRATION FORM</h1>
        <form onSubmit={submitHandler}>
            <label>First Name : </label>
            <input type="text" placeholder="FIRST NAME" name='firstname' value={firstname} onChange={changeHandler}/> <br />

            <label>Last Name : </label>
            <input type="text" placeholder="LAST NAME" name='lastname' value={lastname} onChange={changeHandler}/> <br />

            <label>Email : </label>
            <input type="email" placeholder="EMAIL" name='email' value={email} onChange={changeHandler}/> <br />

            <label>Password : </label>
            <input type="password" placeholder="PASSWORD" name='password' value={password} onChange={changeHandler}/> <br />

            <label>Confirm Password : </label>
            <input type="password" placeholder="CONFIRM PASSWORD" name="conPassword" value={conPassword} onChange={(e)=>setConPassword(e.target.value)}/> <br />

            <label>Panel</label>
            <select name="panel" value={panel} onChange={changeHandler}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select><br />
            

            <input type="submit" />
        </form>
        
    </>
  )
}

export default Register