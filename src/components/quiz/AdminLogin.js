// import React, { useState } from 'react'

// const AdminLogin = () => {

//   const [questions,setQuestions] = useState({
//   'question' : "",
//   'option1' : "",
//   'option2' :"",
//   'option3':"",
//   'option4':"",
//   'answer' : ""
// })

// const changeHandler = (e) =>{
//    setQuestions({
//     ...questions,
//     [e.target.name] : e.target.value
//    })
// }


// const submitHandler = (e) =>{
//   e.preventDefault();

//   console.log(questions)

// }
  

// const {question,option1,option2,option3,option4,answer} = questions


//   return (
//    <>
//     <h1>Admin DashBoard</h1>
//     <form onSubmit={submitHandler}>
//       <label>Add Question : </label>
//       <input type="text" name="question" value={question} required onChange={ (e)=>{changeHandler(e)} } /><br />
//       <label>Option 1 : </label>
//       <input type="text" name="option1"  value={option1} required onChange={ (e)=>{changeHandler(e)} } /><br />
//       <label>Option 2 : </label>
//       <input type="text" name="option2" value={option2} required onChange={ (e)=>{changeHandler(e)} } /><br />
//       <label>Option 3 : </label>
//       <input type="text" name="option3" value={option3} required onChange={ (e)=>{changeHandler(e)} } /><br />
//       <label>Option 4 : </label>
//       <input type="text" name="option4" value={option4} required onChange={ (e)=>{changeHandler(e)} } /><br />
//       <label>Correct Answer : </label>
//             <select name="answer" value={answer} onChange={(e)=>{changeHandler(e)}}>
//                <option value={questions.option1}>Option 1</option>
//                <option value={questions.option2}>Option 2</option>
//                <option value={questions.option3}>Option 3</option>
//                <option value={questions.option4}>Option 4</option>
//             </select><br />
//       <input type="submit" />      
//     </form>
//    </> 
//   )
// }

// export default AdminLogin



import React, { useEffect, useState } from 'react';


const AdminLogin = () => {

  const [finalQuestions, setFinalQuestions] = useState([]);
  const [finalData,setFinalData] = useState([]);
  const [showUsers,setShowUsers] = useState(false);


  const [questions, setQuestions] = useState({
    'question': "",
    'options': ["", "", "", ""],
    'answer': "option 1"
  })

  const changeHandler = (e) => {
    if (e.target.name === "option1" || e.target.name === "option2" || e.target.name === "option3" || e.target.name === "option4") {
      const changeOptions = [...questions.options];
      const index = parseInt(e.target.name.charAt(6)) - 1;
      changeOptions[index] = e.target.value;
      setQuestions({ ...questions, options: [...changeOptions] });
    }
    else {
      setQuestions({
        ...questions,
        [e.target.name]: e.target.value
      })
    }

  }


  useEffect(() => {

    const localQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setFinalQuestions(localQuestions);
    console.log(localQuestions,"questions from local storage ");
    const localData = JSON.parse(localStorage.getItem('quizEnrollersData')) || [];
    setFinalData(localData);

  },[]);



  const showUsersList = () =>{
  
    setShowUsers(true);

  }

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedQuestions = [...finalQuestions, questions];
    setFinalQuestions(updatedQuestions)
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    console.log(updatedQuestions, "questions updated");
    setQuestions({
     'question': "",
     'options': ["", "", "", ""],
     'answer': ""     
    })

  }

  const { question, options, answer } = questions;
  const [option1, option2, option3, option4] = options;

  return (
    <>

      <h1>Admin DashBoard</h1>

      {showUsers ?
        (
          <div>
            <h3>Users List</h3>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {finalData.filter(value=> value.panel === 'user').map((value, index) =>
                  ( 
                    
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{value.id}</td>
                        <td>{value.firstname}</td>
                        <td>{value.lastname}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td>  { (value.score === undefined) ? (`Not attempted`) : ( `${value.score}/${value.totalQuestions}` ) }  </td>
                      </tr>
                  )

                    )}

              </tbody>
              </table>    
                <button onClick={() => { setShowUsers(false) }}>close user list</button>
            </div>
              ) : (
              <div>

                <form onSubmit={submitHandler}>
                  <label>Add Question : </label>
                  <input type="text" name="question" value={question} required onChange={(e) => { changeHandler(e) }} /><br />
                  <label>Option 1 : </label>
                  <input type="text" name="option1" value={option1} required onChange={(e) => { changeHandler(e) }} /><br />
                  <label>Option 2 : </label>
                  <input type="text" name="option2" value={option2} required onChange={(e) => { changeHandler(e) }} /><br />
                  <label>Option 3 : </label>
                  <input type="text" name="option3" value={option3} required onChange={(e) => { changeHandler(e) }} /><br />
                  <label>Option 4 : </label>
                  <input type="text" name="option4" value={option4} required onChange={(e) => { changeHandler(e) }} /><br />
                  <label>Correct Answer : </label>
                  <select name="answer" value={answer} onChange={(e) => { changeHandler(e) }}>
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                    <option value="option 4">Option 4</option>
                  </select><br />
                  <input type="submit" />&emsp;

                </form>
                <button onClick={() => { showUsersList() }}>Users Show List</button>


                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Question</th>
                      <th>Option 1</th>
                      <th>Option 2</th>
                      <th>Option 3</th>
                      <th>Option 4</th>
                      <th>Correct Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finalQuestions.map((value, index) =>
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{value.question}</td>
                        <td>{value.options[0]}</td>
                        <td>{value.options[1]}</td>
                        <td>{value.options[2]}</td>
                        <td>{value.options[3]}</td>
                        <td>{value.answer}</td>
                      </tr>
                    )}

                  </tbody>

                </table>


              </div>

              )

      }
            </>
            )
}

            export default AdminLogin



