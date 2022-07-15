import "../styles.css";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Choice({ letterpos, attemptpos }) {
  const {
    board,
    correctword,
    currentpos,
    disabledletters,
    correctletters
  } = useContext(AppContext);

  const letter = board[attemptpos][letterpos];
  var word = "";
  const correct = correctword[letterpos] === letter.toLowerCase();
  console.log("->", correctword[letterpos], letter,correct);
  const almost = letter !== "" && correctword.includes(letter.toLowerCase());

  if (currentpos.row > attemptpos) {
    if (correct) {
      word = "correct";
      correctletters.push(letter);
    } else if (almost) {
      word = "almost";
    } else {
      word = "wrong";
      disabledletters.push(letter);
    }
  }
  return (
    <div className="column" id={word}>
      {letter}
    </div>
  );
}
