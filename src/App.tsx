import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import stringCombos from "./config/stringCombos";
import Logo from './Logo';


function App() {
  const [firstString, setFirstString] = useState("Breaking");
  const [secondString, setSecondString] = useState("Bad");

  const [firstCombo, setFirstCombo] = useState(["", "", ""])
  const [secondCombo, setSecondCombo] = useState(["", "", ""])

  const breakingBadify = (str: string) => {
    const length = str.length;
    let result: string[] = [];
    
    for (let i = 0; i < length; i++) {
      const oneChar = str[i].toUpperCase();
      const twoChar = `${oneChar}${str[i + 1]}`

      if (stringCombos.includes(twoChar)) {
        result = [str.slice(0,i) ,twoChar, str.slice(i + 2, length)]
        console.log(result)
        break
      }

      if (stringCombos.includes(oneChar)) {
        result = [str.slice(0,i) , oneChar, str.slice(i + 1, length)]
        break
      }
    }

    return result;
  }

  useEffect(() => {
    setFirstCombo(breakingBadify(firstString))
  }, [firstString])

  useEffect(() => {
    setSecondCombo(breakingBadify(secondString))
  }, [secondString])

  return (
    <div className="App">
      <div className='container'>
        <Logo result={firstCombo} />
        <Logo result={secondCombo} />
        <div className='input-row'>
          <div className='column'>
            <label>First:</label>
            <input type='text' title='First:' onChange={e => setFirstString(e.target.value)} />
          </div>
          <div className='column'>
            <label>Last:</label>
            <input type='text' title='Second:' onChange={e => setSecondString(e.target.value)} />
          </div>
        </div>
        <div className='button-area'>
          <button className='button'>
            Breaking Badify  
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
