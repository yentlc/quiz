import { useState } from 'react';
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
  
  
  return (
    <div className="App">
      {start? < Question/> :homepage}
    </div>
  );
}

export default App;
