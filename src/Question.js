export default function Question(props){
    const options = props.answers
    console.log(options)
    return(
        <fieldset>
            <legend>{props.question}</legend>
            <input type="radio" name={props.question} value={1} id={1} checked={props.checked}/>
            <p>answer options</p>
        </fieldset>
    )
}