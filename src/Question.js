

export default function Question(props){

    return(
        <fieldset>
            <legend>{props.question}</legend>
            {props.answers.sort().map(ans => <p>{ans}</p>)}
        </fieldset>
    )
    
  
}