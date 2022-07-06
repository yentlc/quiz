import { useEffect, useState } from 'react';
import './App.css';
import Question from './Question';


function App() {

  //HOMEPAGE
  let homepage= <section>
    <h1>Quizzical</h1>
    <p>description</p>
    <button onClick={()=>startBtn()}>Start</button>
  </section>
  
  //VALUE THAT CHANGES THE CONDITIONAL RENDERING OF HOMEPAGE
  const [start, setStart]= useState(false)
  
  // START BTN 
  function startBtn(){
      setStart(true)
      console.log("started")
    }
  
  //FETCH QUESTIONS DATA - it fetches 5 questions 
  useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5')
      .then((response) => response.json())  
	    .then((data) => setQuestionData(data.results))
    }, [])
  
  //SAVE QUESTIONS DATA FROM API
  const [questionData, setQuestionData]= useState({})
  console.log(questionData)

//I HAVE TO RESOLVE HOW TO PASS THE PROPS BEFORE THE DATA ARRIVES FROM THE API

 /* //QUESTIONS FORM & ELEMENTS
  const questions= <form>
  {questionData.map(data => <Question 
  question={data.question} 
  answers={[...data.incorrect_answers, data.correct_answer]} 
  correctAnswer={data.correct_answer}
  checked={false}
  //onChange -- cambiar estilo.
  />)}
  </form>
*/


  return (
    <div className="App">
      {start? <h1> poner preguntas aca</h1>:homepage}
    </div>
  );
}

export default App;
