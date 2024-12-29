import React,{useEffect, useState} from 'react';

const Localstorage = () => {

     const [data,setData]= useState({
        'firstname' : "",
        'lastname':"",
        'email':"",
        'password':"",
    })


    // const idata = JSON.parse(localStorage.getItem("data"))||[]
    let [finalData,setFinalData] = useState([])

    const{firstname,lastname,email,password} = data;
    const [conPassword,setConPassword] = useState("")
    let ErrorMsg =""


    useEffect(() => 
    { 
        const local_data = JSON.parse(localStorage.getItem('data')) || []; 
        setFinalData(local_data); 
    }, []);

    const changeHandler = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }
    
    const submitHandler = e => {
        e.preventDefault(); 
        
        // setFinalData([...finalData],data);
        


        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailExists = finalData.some(userData => userData.email === email);
        
        if(!emailExists){
        if(passwordRegex.test(password)){

           if(password===conPassword){
                finalData = [...finalData,data];
                console.log(finalData)
                localStorage.setItem("data",JSON.stringify(finalData))
                alert("form submitted")
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
   
    }

    

  return (
    <>
    

   
        <h1>LocalStorage</h1>
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

        <input type="submit" />
       

    </form>

    <table border="2">
        <thead>
            <tr>
                <th>S.no</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
            </tr>
        </thead>
        <tbody>       
            {/* {finalData.map((value)=> 
                <tr>
                    <td>{value.firstname}</td>
                    <td>{value.lastname}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                </tr>
            )} */}
            {/* using key props */}
            {finalData.map((value,index)=> 
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{value.firstname}</td>
                    <td>{value.lastname}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                </tr>
            )}
            
        </tbody>
        
    </table>
    

    
    </>
  )
}

export default Localstorage