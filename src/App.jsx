import { useState } from 'react'
import './App.css'
import Quizlayout from './components/Quizlayout'
import StartQuiz from './components/StartQuiz'
import questions from './util/questions'
import Thankyou from './components/Thankyou'

function App() {
  
  const [isStart, setIsStart] = useState(false);
  const [isQuestion, setIsQuestion] = useState(-1);
  const [isScore, setIsScore] = useState(0);
  const [randomArray, setRandomArray] = useState([]);
  

  function randomAnswer(){
    let array = [];
    for(let i=0;i<4;i++){
      let a = Math.floor(Math.random()*4)
      array.push(a)
    }
    setRandomArray(array)
  }

  function handleOnStart(){
    setIsStart((prevStart)=>{return prevStart===false?true:false})
    randomAnswer();
    setIsQuestion((prevQues)=>{
      if(prevQues === -1){
        return 0
      }
    })
  }

  function handleAnswerClick(option){
    randomAnswer()
    const realAns = questions[isQuestion].answers[0]
    // console.log(realAns)
    // console.log(option)
    if (realAns === option){
      setIsScore((prevScore)=>{ 
        const newScore = prevScore + 1;
        // console.log("New Score:", newScore); 
        return newScore;
      })
    }
    // console.log(isScore)
    // console.log("running answerclick")
    setIsQuestion((prevQues)=>{
      return prevQues+1
    })
    console.log(isScore)
  }

  return (
    <>
      {!isStart && isQuestion<questions.length && <StartQuiz onStart={handleOnStart}/>}
      {isStart && isQuestion<questions.length && <Quizlayout handleOnClick={handleAnswerClick} quesNumber={isQuestion} answer={randomArray} Timer={10000}/>}  
      {isQuestion>=questions.length && <Thankyou score={isScore}/>}
    </>
  )
}

export default App
