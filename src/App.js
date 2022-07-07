import { useEffect, useState } from 'react';
import './App.css';
import Question from './Question';
import { nanoid } from 'nanoid'


function App() {
  
  //HOMEPAGE
  let homepage= <section>
    <h1>Quizzical</h1>
    <p>description</p>
    <button onClick={()=>startBtn()}>Start</button>
  </section>
  
  // //VALUE THAT CHANGES THE CONDITIONAL RENDERING OF HOMEPAGE
  const [start, setStart]= useState(false)
  // //SAVE QUESTIONS DATA FROM API
  const [questionData, setQuestionData]= useState()
  
  // // START BTN 
  function startBtn(){
      setStart(true)
      console.log("started")
    }
  
  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then((response) => response.json())  
    .then((data) => setQuestionData(data.results))
  }
      //FETCH QUESTIONS DATA - it fetches 5 questions 
  useEffect(() => {
    fetchData()
    console.log("useEffect")
    },[])


  

 //QUESTIONS FORM & ELEMENTS
 
  // let questions = questionData.length>0?
  // <form>
    // {questionData.map(data => <Question 
    // key={nanoid()}
    // question={data.question} 
    // answers={[...data.incorrect_answers, data.correct_answer]} 
    // correctAnswer={data.correct_answer}
    // checked={false}
    //onChange -- cambiar estilo.
    // />)}
  // </form> : <div></div>



  return (
    <div className="App">

      {start && questionData ? questionData.map( elem => <Question 
    key={nanoid()}
    question={elem.question} 
    answers={[...elem.incorrect_answers, elem.correct_answer]} 
    correctAnswer={elem.correct_answer}
    checked={false}
    //onChange -- cambiar estilo.
    />) :homepage}
    
    </div>
  );
}

export default App;
