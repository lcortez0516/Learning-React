import React, { useState } from 'react'
import { quizBank } from '../constants/quizBank.js'
import Results from './Results.jsx'


const Quiz = () => {
    // Question counter
    const [currentQ, setCurrentQ] = useState(0)
    // Quiz state
    const [quizEnd, setQuizEnd] = useState(false)

    const answers = [null, null, null]
    const [selectedAnswers, setSelectedAnswer] = useState(answers)

    // Answer Selected 
    const handleAnswerSelection = (option)=> {
        const newAnswers = selectedAnswers
        newAnswers[currentQ] = option  
        setSelectedAnswer(newAnswers)
        console.log(selectedAnswers)
    }

    //Previous Question
    const handlePrev = () => {
        if(currentQ !==0) {
        setCurrentQ(currentQ -1 )
        }
    }
    // Next Question
    const handleNext = () => {
        if(currentQ !== quizBank.length -1) {
             setCurrentQ(currentQ + 1)
        } else{
            setQuizEnd(true)
        }
       
    }

    // reset quiz
    const restartQuiz = (status) => {
        setSelectedAnswer([null,null,null])
        setCurrentQ(0)
        setQuizEnd(status)
    }

    if(quizEnd) {
        return <Results answers={selectedAnswers} restartQuiz={restartQuiz}/>
    }
  return (
    <div>
        <h2>Question No. {currentQ + 1}</h2>
        <p>{quizBank[currentQ].question}</p>
        {quizBank[currentQ].option.map((option, index)=> (
            <button className='option' key={index} onClick={()=>handleAnswerSelection(option)}>{option}</button>
        ))}
        <div className='nav-buttons'>
            <button onClick={handlePrev} disabled={currentQ ===0}>Previous</button>
            <button onClick={handleNext}>{currentQ < quizBank.length - 1 ? "Next" : "Submit"}</button>
        </div>
    </div>
  )
}

export default Quiz