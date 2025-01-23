import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Login = () => {

  const [loginData, setLoginData] = useState({
    'email': "",
    'password': "",
  })

  const { email, password } = loginData;

  let [finalData, setFinalData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const local_data = JSON.parse(localStorage.getItem('quizEnrollersData')) || [];
    setFinalData(local_data);
  }, []);

  const changeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   let msg = ""

  //   const emailExists = finalData.find(userData => userData.email === email);
  //   if (emailExists) {
  //     msg = "";
      
  //     if (emailExists.password === password) {

  //       if(emailExists.panel === panel){
        
  //       //msg += `welcome,  ${emailExists.firstname}  ${emailExists.lastname}  You are successfully Logged In... `;
  //       // alert(msg)
  //       localStorage.setItem('id',JSON.stringify(emailExists.id))
  //       if(emailExists.panel === "admin"){
  //         const admin = {firstname : emailExists.firstname, lastname : emailExists.lastname}
  //         navigate("/AdminLogin",{state:{adminNames : admin}})
  //       }
  //       else if(emailExists.panel === "user"){
  //         const user = {firstname : emailExists.firstname, lastname : emailExists.lastname}
  //         navigate("/UserLogin",{state:{userNames : user}})
  //       }
        
  //       }
  //       else{
  //         msg += "panel is incorrect"
  //         alert(msg)
  //       }

  //     }
  //     else {
  //       msg += " You are Registered But, Password is incorrect. Please enter correct password to login";
  //       alert(msg)
  //     }

  //   }
  //   else {
  //     msg = "you are not registered";
  //     alert(msg)
  //   }

  // }

const submitHandler = (e) => {
    e.preventDefault();

    let msg = ""

    const emailExists = finalData.find(userData => userData.email === email);
    if (emailExists) {
      msg = "";
      
      if (emailExists.password === password) {

        // localStorage.setItem('LoggedEmail',JSON.stringify(emailExists.email))
        alert("login successfull")

        if(emailExists.panel === "admin"){
          const admin = {firstname : emailExists.firstname, lastname : emailExists.lastname}
          navigate("/AdminLogin",{state:{adminNames : admin}})
        }
        else if(emailExists.panel === "user"){
          const user = {firstname : emailExists.firstname, lastname : emailExists.lastname, email : emailExists.email}
          navigate("/UserLogin",{state:{userNames : user}})
        }
        
      }

      
      else {
        msg += " You are Registered But, Password is incorrect. Please enter correct password to login";
        alert(msg)
      }

    }
    else {
      msg = "you are not registered";
      alert(msg)
    }

  }



  return (
    <>
      <h1>LOGIN FORM</h1>

      <form onSubmit={submitHandler}>
        <input type="email" name="email" placeholder="Enter your Email" onChange={changeHandler} /><br />
        <input type="password" name="password" placeholder="Enter Password" onChange={changeHandler} /><br />
        {/* <label>Panel : </label>
            <select name="panel" value={panel} onChange={changeHandler}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select><br /> */}
        <input type="submit" value="submit" />
      </form>

      

    </>
  )
}

export default Login;