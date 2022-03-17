import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import React from 'react';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import {createContext} from "react";
import { boardDefault } from './Words';

export const AppContext = createContext();
function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className = "App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onSelectLetter,
        }}
      >
      <Board/>
      <Keyboard/>
      </AppContext.Provider>
     
    </div>
  );
}

export default App;
