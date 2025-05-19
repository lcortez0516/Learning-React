import React from 'react'
import { quizBank } from '../constants/quizBank.js'

const Results = ({answers, restartQuiz}) => {

    let score = 0;
    answers.forEach((answer, index)=> {
        if(answer === quizBank[index].answer){
            score++
        }
    })


    // reset Quiz
    const resetQuiz = ()=> {
        restartQuiz(false)
    }

  return (

    <div>
    <h2>Results</h2>
    <p className='score'>Score: {score}/{quizBank.length}</p>
    <button className='restart-button' onClick={resetQuiz}>Reset Quiz</button>
    </div>
    
  )
}

export default Results