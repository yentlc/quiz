import { nanoid } from 'nanoid'
import { useState } from 'react'


export default function Question(props){
    
    return(
        <fieldset>
            <legend>{props.question}</legend>
            {props.answers.sort().map(ans => 
                    <label key={nanoid()}  htmlFor={ans} >
                    <input   type="radio" 
                        id={ans} 
                        name={props.question} 
                        value={ans} 
                        checked={props.selectedAnswer === ans && console.log("answer checked->",props.question ,ans)} 
                        onChange={(e)=>props.handleChange(e)}
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