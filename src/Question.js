import { nanoid } from 'nanoid'
import { useState } from 'react'


export default function Question(props){
       // // SAVE ALL SELECTED ANSWERS
   const[selectedAnswer,setSelectedAnswer] = useState([])

    // // UPDATES SELECTED ANSWER
    function handleSelection(event){
        setSelectedAnswer(event.target.value)
    }
  
  
    return(
        <fieldset>
            <legend>{props.question}</legend>
            {props.answers.sort().map(ans => 
                    <label key={nanoid()}  htmlFor={ans} >
                    <input   type="radio" 
                        id={ans} 
                        name={props.question} 
                        value={ans} 
                        checked={selectedAnswer === ans && console.log("answer checked->",props.question ,ans)} 
                        onChange={(e)=>handleSelection(e)}
                        />
                    {ans}
                    </label>
                    )}
        </fieldset>
    )
    
  
}

// ANSWERS AS FORM DATA
// {props.answers.sort().map(ans => 
//     <div key={nanoid()} >
//     <input  type="radio" id={ans} name={props.question} value={ans} checked={false} onChange={()=>console.log("Question is clicked ->", ans)}/>
//     <label htmlFor={ans} for={ans}>{ans}</label>
//     </div>
//     )}