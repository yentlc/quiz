export default function Question(props){
  //SAVE THE ANSWERS ARRAY
    const answersArr = props.answers

    // SHUFFLE THE ARRAY FUNCTION
    function shuffleArr(arr){
        //create a new array to save the shuffled array
        const shuffled=[]
        //Loop through the array selecting a random index, saving it in the new array and removing it from the prior
        while(arr.length>0){
            const randomIndex= Math.floor(Math.random()*arr.length-1)
            shuffled.push(arr[randomIndex])
            arr.splice(randomIndex,1)
        }
        
        return shuffled
    }

    let newArr= shuffleArr(answersArr)

    return(
        <fieldset>
            <legend>{props.question}</legend>
            <input type="radio" name={props.question} value={1} id={1} checked={props.checked}/>
            <p>answer options</p>
        </fieldset>
    )
    
  
}