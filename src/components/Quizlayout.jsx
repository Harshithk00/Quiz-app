import AnswerButton from "./AnswerButton";
import questions from "../util/questions"
import {useEffect, useState} from "react"

export default function Quizlayout({handleOnClick, quesNumber, answer,Timer}){
    const [remainingTime, setRemainingTime] = useState(Timer)
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime((prevTime)=>{return prevTime - 10})
            console.log(remainingTime)
            },10)

        return ()=>{
            clearInterval(interval)
            setRemainingTime(Timer)
        }}
    ,[quesNumber])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleOnClick();
        },10000)
    return ()=>{
        clearTimeout(timer)
    }
    },[quesNumber])

    return(
        <div id="quizlayout">
            <div id="barDiv">
                <progress id="bar" value={remainingTime} max={Timer} />
            </div>
            <div id="answerDiv">
                <p>{questions[quesNumber].text}</p>
            </div>
            <div id="buttonDiv">
                <div className="buttonDivIn">
                    <AnswerButton options={questions[quesNumber].answers[answer[0]]} handleOnClick={handleOnClick}/>
                    <AnswerButton options={questions[quesNumber].answers[answer[1]]} handleOnClick={handleOnClick}/>
                </div>
                <div className="buttonDivIn">
                    <AnswerButton options={questions[quesNumber].answers[answer[2]]} handleOnClick={handleOnClick}/>
                    <AnswerButton options={questions[quesNumber].answers[answer[3]]} handleOnClick={handleOnClick}/>
                </div>
            </div>
        </div>
    )
        
    
}