import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [firstString, setFirstString] = useState("Breaking");
  const [secondString, setSecondString] = useState("Bad");

  return (
    <div className="App">
      <div className='container'>
        <h1>{firstString}</h1>
        <h1>{secondString}</h1>
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
      </div>
    </div>
  );
}

export default App;
