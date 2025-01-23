import React, { use, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const UserLogin = () => {

  const [finalQuestions, setFinalQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [btn, setBtn] = useState("Next");
  const [msg,setMsg] =  useState("welcome to the Quiz");

  const location = useLocation();
  const namesReceived = location.state?.userNames;


  useEffect(() => {

    if (startQuiz) {
      const interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 0) {
            handleNextQuestion();
            return 30;
          } return prevTimer - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
    else if (!showScore) {

      const localQuestions = JSON.parse(localStorage.getItem('questions')) || [];
      setFinalQuestions(localQuestions);
      setTotalQuestions(localQuestions.length);

      const localData = JSON.parse(localStorage.getItem('quizEnrollersData')) || [];
      setFinalData(localData);

      const user = localData.find(data => data.email === namesReceived.email);
      
      if (user.totalQuestions === undefined) {
        setScore(0);
        setCurrentQuestionIndex(0);
      }
      else if (totalQuestions === user.totalQuestions) {
        setMsg(`You are Reattempting the quiz your previous score ${user.score} is set to be 0`);
        setScore(0);
        setCurrentQuestionIndex(0);
      }
      else {
        setMsg(`You are going to continue the quiz from ${user.totalQuestions + 1}`)
        setScore(user.score);
        setCurrentQuestionIndex(user.totalQuestions)
      }

    }

  }, [currentQuestionIndex, startQuiz]);


  const handleScore = () => {

    setShowScore(true);
    setStartQuiz(false);

    const updatedData = [...finalData];
    const user = updatedData.find(data => data.email === namesReceived.email);
    const index = updatedData.indexOf(user);

    updatedData[index] = { ...user, score: score + 1, totalQuestions: totalQuestions };
    setFinalData(updatedData);
    localStorage.setItem("quizEnrollersData", JSON.stringify(updatedData));

  }


  const handleNextQuestion = () => {

    if (btn === "Next") {

      const correctAnswerIndex = parseInt(finalQuestions[currentQuestionIndex].answer.charAt(7)) - 1;
      const correctAnswer = finalQuestions[currentQuestionIndex].options[correctAnswerIndex];

      if (correctAnswer === selectedAnswer) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer("");
        setTimer(30);
      }
      if (currentQuestionIndex == totalQuestions - 1) {
        setBtn("Submit");
        handleScore();
      }

    }

  }


  // const scoreButton = () =>{
  //   const user = finalData.find(data => data.email === namesReceived.email);
  //   if(totalQuestions == user.totalQuestions){
  //     alert("no questions pending")
  //   }
  //   else{
  //     alert(` ${totalQuestions-user.totalQuestions} questions are newly added please attempt them`)
  //   }
  //   setScore(user.score);
  //   setShowScore(true);

  // }


  return (
    <>

      {
        !showScore ?
          (
            !startQuiz ?
              ( <div>
              <button onClick={() => { setStartQuiz(true) }}> Start Quiz </button>
              {/* <button onClick={() => { scoreButton() }}> showScore  </button> */}
              </div>
              ) :
              (
                <div>
                  <p>Hi {namesReceived.firstname} {namesReceived.lastname}, {msg}</p>
                  <div className='card p-4 col-6' style={{ marginLeft: '25%' }}>
                      <h3>{currentQuestionIndex+1} . {finalQuestions[currentQuestionIndex].question}</h3>
                  {
                    finalQuestions[currentQuestionIndex].options.map((option, index) =>
                    (
                      <div key={index}>
                        <input type="radio" name="option" value={option} checked={selectedAnswer === option} onChange={() => { setSelectedAnswer(option) }} id={`option${index}`} />
                        <label htmlFor={`option${index}`}>{option}</label>
                      </div>
                    ))
                  }
                  <h5>Time : {timer}</h5>
                  <button onClick={() => { handleNextQuestion() }} value={btn} className='col-2'>{currentQuestionIndex < totalQuestions - 1 ? 'Next' : 'submit'}</button>
                  </div>
                  
                </div>
              )

          ) :
          (
            <div>
              <h1>Your score : </h1>
              <h4>{score} / {totalQuestions}</h4>
            </div>
          )
      }



    </>
  )
}

export default UserLogin
