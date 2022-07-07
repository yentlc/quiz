import { nanoid } from 'nanoid'


export default function Question(props){


    return(
        <fieldset>
            <legend>{props.question}</legend>
            {props.answers.sort().map(ans => 
                    <div>
                    <input key={nanoid()}type="radio" id={ans} name={props.question} value={ans} isChecked={"ver que poner"} onClick={()=>console.log("Question is clicked ->", ans)}/>
                    <label for={ans}>{ans}</label>
                    </div>
                    )}
        </fieldset>
    )
    
  
}