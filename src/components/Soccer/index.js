import React,{useState} from 'react'
import questions from './SoccerData.json'
import Sresult from './Sresult';
import './soccer.css'
import Progress from '../Progress';
function Soccer() {
        
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const [showScore,setShowScore]=useState(false);
  const[score,setScore]=useState(0);
  const[done,setDone]=useState(0);
 const handleAnswerOptionClick =(ansPoint)=>{
    setDone(Math.floor(done + 9.901))
     if(ansPoint){
         setScore(score+ansPoint);
     }
     const nextQuestion =currentQuestion + 1;
     if(nextQuestion < questions.length){
         setCurrentQuestion(nextQuestion);
         
     } else {
         setShowScore(true);
     }
 }
    return (
        <div className="soccer">
        {showScore ? (
            <div className="score-section">
                 <Sresult score={score} />
            </div>
        ):(
            <div className="quiz">
                  <Progress done={done}/>
            <div className="question-section">
               
                
                <div className="question-text">
                    {questions[currentQuestion].questionText}
                </div>
            </div>
            <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption)=>(
                    <button onClick={()=>handleAnswerOptionClick(answerOption.ansPoint)}>
                        {answerOption.answerText}
                    </button>
                ))}
            </div>
            </div>
        )}
    </div> 
    )
}

export default Soccer
