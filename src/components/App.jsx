import React,{useState} from 'react';
import './App.css';
import DisplayResult from './DisplayResult';
import DisplayCards from './DisplayCards';

function App() {
  const [highscore , setHighScore] = useState(0);
  const [score , setScore] = useState(0);
  const [displayResult , setDisplayResult] = useState(false);
  const [outcome ,setOutcome] = useState('');
  const [noOfCards , setNoOfCards ] = useState(8);

  const handleAmountOfCards = (event)  => {

    const value=parseInt(event.target.value);
    if(isNaN(value) || value>30 || value<0)
    {
      setNoOfCards('');
    }
    else
    {
      setNoOfCards(value);
    }

  }

  
  

  return (
    <>
        <div className='header'>
          <h1>Pokémon!</h1>
          <div className='scoreboard'>
            <p>Highscore:{highscore}</p>
            <p>Score:{score}</p>
          </div>
        </div>
        <div className='card-input'>
          Cards(30 Max):
          <input
            type="number"
            min={2}
            max={30}
            value={noOfCards}
            onChange={handleAmountOfCards}
          />
        </div>
        <DisplayResult 
          outcome={outcome}
          displayResult={displayResult}
          setDisplayResult={setDisplayResult}
        />
        <DisplayCards
          highscore={highscore}
          setHighScore={setHighScore}
          score={score}
          setScore={setScore}
          setDisplayResult={setDisplayResult}
          setOutcome={setOutcome}
          noOfCards={noOfCards}
         />

    </>
  )

}

export default App;
