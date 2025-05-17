import React from 'react'

const Results = ({userAnswers, questionBank}) => {

    
    const score = () => {


        let finalScore = 0;
        userAnswers.forEach((answer, index)=> {
            if(answer === questionBank[index].answer){
                finalScore++;
            }
        })

        return finalScore;
    }

    const handleRestart = () => {

    }

  return (
    <div>
        <h2>Quiz Completed</h2>
        <p>Your Score: {score()}/{questionBank.length}</p>
        <button className='restart-button' onClick={handleRestart}> Restart Quiz</button>
    </div>
  )
}

export default Results