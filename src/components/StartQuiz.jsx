
export default function StartQuiz({onStart}){
    return(
        <div id="quizlayout" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <button className="answerButton StartButton" style={{height:"7vh",width:"10vw",fontSize:"1.5rem",boxShadow:"1px 1px 10vh #FCFCFA"}} onClick={onStart}>START QUIZ</button>
        </div>
    )
}