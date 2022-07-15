import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { DefaultBoard, generateword } from "../src/Components/DefaultBoard";
import { useState, createContext, useEffect } from "react";
import "./styles.css";

export const AppContext = createContext();

export default function App() {
  const [board, setboard] = useState(DefaultBoard);
  const [currentpos, setcurrentpos] = useState({ row: 0, column: 0 });
  const [newset, setnewset] = useState(new Set());
  const [disabledletters, setdisabledletters] = useState([]);
  const [correctletters, setcorrectletters] = useState([]);
  const [correctword, setcorrectword] = useState("");
  const [gameover, setgameover] = useState({
    GameOver: false,
    guessesWord: false
  });

  useEffect(() => {
    generateword().then((words) => {
      setnewset(words.wordset);
      setcorrectword(
        words.wordArr[Math.floor(Math.random() * words.wordArr.length)]
      );
      // setcorrectword(words.wordArr[0]);
    });
  }, []);

  console.log(correctword);

  const onSelect = (Keyval) => {
    if (currentpos.column > 4) return;
    const newboard = [...board];
    newboard[currentpos.row][currentpos.column] = Keyval;
    setcurrentpos({ row: currentpos.row, column: currentpos.column + 1 });
    setboard(newboard);
  };

  const onEnter = () => {
    if (currentpos.column !== 5) return;
    let curr = "";
    for (let i = 0; i < 5; i++) {
      curr += board[currentpos.row][i];
    }

    curr = curr.toLowerCase();
    if (correctword === curr) {
      setgameover({ GameOver: true, guessesWord: true });
    } else if (currentpos.row === 5) {
      setgameover({ GameOver: true, guessesWord: false });
    }

    if (newset.has(curr)) {
      setcurrentpos({ row: currentpos.row + 1, column: 0 });
      return 1;
    } else {
      alert("Word not found");
      for (let i = 0; i < 5; i++) {
        board[currentpos.row][i] = "";
        setboard(board);
      }
      setcurrentpos({ row: currentpos.row, column: 0 });
    }
    return 1;
  };

  const onDelete = () => {
    if (currentpos.column === 0) return;
    const newboard = [...board];
    newboard[currentpos.row][currentpos.column - 1] = "";
    setcurrentpos({ row: currentpos.row, column: currentpos.column - 1 });
    setboard(newboard);
  };

  return (
    <div className="App">
      <div className="Nav">
        <center>
          <h1>Wordle</h1>
        </center>
      </div>
      <AppContext.Provider
        value={{
          board,
          setboard,
          currentpos,
          setcurrentpos,
          onSelect,
          onEnter,
          onDelete,
          correctword,
          disabledletters,
          setdisabledletters,
          correctletters,
          setcorrectletters,
          gameover,
          setgameover
        }}
      >
        <Board />
        {(gameover.GameOver === true) & (gameover.guessesWord == true) ? (
          <center>
            <h3>Kudos you guessed the word!!</h3>
          </center>
        ) : gameover.GameOver === true ? (
          <center>
            <h3>GameOver ! Better luck next time.</h3>
            <h3>The word is {correctword.toUpperCase()}</h3>
          </center>
        ) : (
          <Keyboard></Keyboard>
        )}
      </AppContext.Provider>
    </div>
  );
}
