import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const DiceRoller = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const rollDice = () => {
      const inputStr = inputValue.trim();
      const [numDice, numSides] = inputStr.split('d').map(Number);

      let sum = 0;
      for (let i = 0; i < numDice; i++) {
          sum += Math.floor(Math.random() * numSides) + 1;
      }
      setResult(sum);
  };

  return (
      <div>
          <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              placeholder="Enter dice expression (e.g. 2d6)" 
          />
          <button onClick={rollDice}>Roll Dice</button>
          {result !== null && <p>Result: {result}</p>}
      </div>
  );
};

export default DiceRoller;
