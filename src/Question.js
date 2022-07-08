import { nanoid } from 'nanoid'
import { useState } from 'react'


export default function Question(props){

  // // UPDATES SELECTED ANSWER
  function handleSelection(event){
    setSelectedAnswer(event.target.value)
}
  
 // // SAVE ALL SELECTED ANSWERS
 const[selectedAnswer,setSelectedAnswer] = useState([])
  
  
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

