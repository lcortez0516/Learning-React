import React, { useState } from 'react'
import Results from './Results'

    const questionBank = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Rome"],
        answer: "Paris"
    },
        {
        question: "Which language is used for web apps?",
        options: ["Php", "Python", "Javascript", "All"],
        answer: "All"
    },
        {
        question: "What does JSX stands for?",
        options: [
            "Javascript XML",
             "Javas Syntax Extension",
              "Just simple example", 
              "None of the above"],
        answer: "Javascript XML"
    }
]


const Quiz = () => {
// states

// answers state
const initialAnswers = [null, null, null]
const[userAnswers, setUserAnswers] = useState(initialAnswers)
//question state
const [currentQ, setCurrentQ] = useState(0)
// is quiz finish state
const [isQuizFinished, setIsQuizFinished] = useState(false)
// is answered
const selectedAnswer = userAnswers[currentQ]

 

// onClicks
const handleSelectOption = (option) => { 
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQ] = option

    setUserAnswers(newUserAnswers)

}

const handleNextQ = ()=> {
    if(currentQ === questionBank.length - 1){
        setIsQuizFinished(true)
    } else{
 setCurrentQ(currentQ + 1)
    }
   
    
}

const handlePrevQ = ()=> {
    if(currentQ > 0){
     setCurrentQ(currentQ - 1)
    }
}

if(isQuizFinished === true) {
    return <Results userAnswers={userAnswers} questionBank = {questionBank}/>
}
  return (
    <div>
        <h2>Question {currentQ + 1}</h2>
        <p className='question'>{questionBank[currentQ].question}</p>
        {questionBank[currentQ].options.map((option, index)=> (
            <button className={"option" + (selectedAnswer === option ? " selected" : "")} key={index} onClick={()=> handleSelectOption(option)}>{option}</button>
        ))}

        <div className='nav-buttons'>
            <button onClick={handlePrevQ} disabled={currentQ === 0 }>Previous</button>
            <button onClick={handleNextQ} disabled = {!selectedAnswer}>{ currentQ < questionBank.length-1 ? "Next" : "Finish Quiz" }</button>
        </div>
    </div>
  )
}

export default Quiz