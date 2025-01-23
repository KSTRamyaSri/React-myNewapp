// import React, { useEffect, useState } from 'react'

// const NameEditing = () => {

//     const [task, setTask] = useState({
//         'taskName': "",
//         'token': false,
//         'status': null,
//         'css': "none",
//         'checkBox' : false,

//     })

//     let { taskName } = task;

//     // styles object format lo store cheyalii
//     // const [submitBtnStyle,setSubmitBtnStyle] = useState({display : 'inline-block'})
//     // const [updateBtnStyle,setUpdateBtnStyle] = useState({display : 'none'})

//     // const [strike,setStrike] =useState({textDecoration : 'none'})

//     const [btn, setBtn] = useState("Submit");

//     let [finalNames, setFinalNames] = useState([]);


//     useEffect(() => {
//         const storedNames = JSON.parse(localStorage.getItem('names')) || [];
//         setFinalNames(storedNames);

//         // setFinalNames(JSON.parse(localStorage.getItem('names')) || []);

//     }, []);

//     const submitHandler = (e) => {
//         e.preventDefault();

//         if (btn === "Submit") {
//             const updatedNames = [...finalNames, task]
//             setFinalNames(updatedNames);
//             localStorage.setItem("names", JSON.stringify(updatedNames))

//             // localstorage lo bane store avuthundhi kani browser lo refresh chesthene current enter chesina names kanipisthunnai
//             // finalNames = [...finalNames,enteredName]

//             // browser lo update avuthundhi kaani localstorage loo sarigga store avvatledhu late gaa avuthundhi        
//             // setFinalNames([...finalNames,enteredName])

//             // localStorage.setItem("names",JSON.stringify(finalNames))
//             // console.log(finalNames)
//         }
//         else if (btn === "Update") {
//             // const updatedNames = finalNames.map(item => (item.taskName === selectedName.taskName ? task : item));
//             // setFinalNames(updatedNames); 
//             // localStorage.setItem("names", JSON.stringify(updatedNames));

//             const updatedNames = [...finalNames];
//             const index = (updatedNames.indexOf(selectedName));
//             updatedNames[index] = task;
//             setFinalNames(updatedNames);
//             localStorage.setItem("names", JSON.stringify(updatedNames));

//         }
//         setTask({
//             ...task,
//             taskName: "",
//         })

//     }

//     const deleteName = (value) => {

//         // using filter method
//         // const updatedNames = finalNames.filter(item => item !== value); 

//         // using splice method
//         const updatedNames = [...finalNames];
//         updatedNames.splice(updatedNames.indexOf(value), 1);

//         setFinalNames(updatedNames);
//         localStorage.setItem("names", JSON.stringify(updatedNames));

//     }

//     const [selectedName, setSelectedName] = useState("")

//     const editName = (value) => {

//         setTask({
//             ...task,
//             css: "'none'",
//             taskName: value.taskName
//         })
//         // setSubmitBtnStyle({display : 'none'})
//         // setUpdateBtnStyle({display:'inline-block'})
//         setSelectedName(value)
//         setBtn("Update")

//     }

//     // const updateName = () =>{

//     //     // setTemp(name)
//     //     // let index = (finalNames.indexOf(temp));
//     //     // finalNames[index]=name;
//     //     // localStorage.setItem("names",JSON.stringify(finalNames))

//     //     const updatedNames = finalNames.map(item => (item === selectedName ? enteredName : item)); 
//     //     setFinalNames(updatedNames); 
//     //     localStorage.setItem("names", JSON.stringify(updatedNames));
//     //     setEnteredName("")
//     //     setUpdateBtnStyle({display : 'none'})
//     //     setSubmitBtnStyle({display : 'inline-block'})

//     // }



//     // const taskCompleted = (tname, index) => {
//     //     if (box == false) {
//     //         box = true;
//     //         const updatedNames = [...finalNames];
//     //         updatedNames[index] = {
//     //             taskName: tname,
//     //             token: true,
//     //             status: "completed",
//     //             css: "'line-through'",
//     //         }
//     //         setFinalNames(updatedNames);
//     //         // setStrike({
//     //         //     textDecoration : 'line-through'
//     //         // })
//     //         console.log(updatedNames)
//     //         localStorage.setItem("names", JSON.stringify(updatedNames))

//     //     }
//     // }

    

//     const handleChange = (e,value,index) =>{

//         const ex =  e.target.checked
//         console.log(ex)
//         const updatedNames = [...finalNames]
//         // updatedNames[index].checkBox = true
//         if(ex){
//             updatedNames[index] = {
//                 taskName: value.taskName,
//                 token: true,
//                 status: "completed",
//                 css:"line-through",
//                 checkBox : true
//             }
            
//         }
//         else{
//             updatedNames[index] = {
//                 taskName: value.taskName,
//                 token: false,
//                 status: "un completed",
//                 css: "none",
//                 checkBox : false
//             }
//         }

//         setFinalNames(updatedNames)
//         localStorage.setItem("names",JSON.stringify(updatedNames))


//     }
        





//         return (
//             <>
//                 <form onSubmit={submitHandler}>

//                     <input type="text" name="name" placeholder="Enter your name" value={taskName} onChange={(e) => setTask({ ...task, taskName: (e.target.value) })} />
//                     {/* <input type="submit" style={submitBtnStyle}/>
//             <input type="button" value="update" style={updateBtnStyle} onClick={updateName}/> */}

//                     <input type="submit" value={btn} />

//                 </form>

//                 <ul>

//                     {finalNames.map((value, index) =>

//                         <li key={index}>

//                             <span style={{ textDecoration: value.css }}>{value.taskName}</span>

//                             <button onClick={() => editName(value)} disabled={value.token}>Edit</button>
//                             <button onClick={() => deleteName(value)} disabled={value.token}>Delete</button><br />
//                             <input type="checkbox" checked={value.checkBox} onChange={(e)=>{handleChange(e,value,index)}} />

//                         </li>

//                     )}

//                 </ul>

//             </>
//         )
//     }
//     export default NameEditing

import React, { useState, useEffect } from 'react';

const questions = [
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    { question: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'], answer: 'Harper Lee' }
];

const QuizCarousel = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState(30);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Reset the timer for each question
        setTimer(30);

        // Set up the interval for the countdown
        const countdown = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 1) {
                    handleNext();
                    return 30;
                } else {
                    return prevTimer - 1;
                }
            });
        }, 1000);

        // Clear the interval when component unmounts or question changes
        return () => clearInterval(countdown);
    }, [currentQuestion]);

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
         else {
            calculateScore();
            setShowScore(true);
        }
    };

   

    const handleAnswerSelection = (index) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: questions[currentQuestion].options[index]
        });
    };

    const calculateScore = () => {
        let tempScore = 0;
        questions.forEach((q, index) => {
            if (selectedAnswers[index] === q.answer) {
                tempScore += 1;
            }
        });
        setScore(tempScore);
    };

    if (showScore) {
        return (
            <div className="quiz-score">
                <h2>Your Score: {score} / {questions.length}</h2>
            </div>
        );
    }

    return (
        <div className="quiz-carousel">
            <h2>{questions[currentQuestion].question}</h2>
            <ul>
                {questions[currentQuestion].options.map((option, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedAnswers[currentQuestion] === option}
                                onChange={() => handleAnswerSelection(index)}
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
            <div>Time remaining: {timer} seconds</div>
            
            <button onClick={handleNext} disabled={currentQuestion === questions.length - 1} >Next</button>
        </div>
    );
};

export default QuizCarousel;
