export default function AnswerButton({options, handleOnClick}){
    return(
        <>
        <button className="answerButton" onClick={()=>{handleOnClick(options)}}>{options}</button>
        </>
    )
}