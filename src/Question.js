

export default function Question(props){
  //SAVE THE ANSWERS ARRAY
    const answersArr= props.answers

    // SHUFFLE THE ARRAY FUNCTION
    function shuffleArr(arr){
        //create a new array to save the shuffled array
        const prevArr= arr
        const shuffled=[]
        //Loop through the array selecting a random index, saving it in the new array and removing it from the prior
        while(arr.length>0){
            const randomIndex= Math.floor(Math.random()*prevArr.length)
            shuffled.push(prevArr[randomIndex])
            prevArr.splice(randomIndex,1)
        }
        return shuffled
    }
    
    let options= shuffleArr(answersArr)
    console.log(options)
    return(
        <fieldset>
            <legend>{props.question}</legend>

            <p>{options[1]}option2</p> 
        </fieldset>
    )
    
  
}