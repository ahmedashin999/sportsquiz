import React,{useState} from 'react'
import tennisData from './tennisData.json'
import Tresult from './Tresult';
import './tennis.css';
import Progress from '../Progress'
function Tennis() {
    
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const [showScore,setShowScore]=useState(false);
  const[score,setScore]=useState(0);
  const[done,setDone]=useState(0)
  
   
 const handleAnswerOptionClick =(ansPoint)=>{
    setDone(Math.floor(done + 9.901))
     if(ansPoint){
         setScore(score+ansPoint)
         
     }
       
     
      
      
     const nextQuestion =currentQuestion + 1;
     if(nextQuestion < tennisData.length){
         setCurrentQuestion(nextQuestion);
         
               } 
         else  {
         setShowScore(true);
     }
     
 } 
    return (
        <div className="tennis">
        {showScore ? (
            
            
            <Tresult score={score} />
        
        ):(
            <div className="quiz">
                <Progress done={done}/>
            <div className="question-section">
 
                <div className="question-text">
                    {tennisData[currentQuestion].questionText}
                </div>
            </div>
            <div className="answer-section">
                {tennisData[currentQuestion].answerOptions.map((answerOption)=>(
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

export default Tennis