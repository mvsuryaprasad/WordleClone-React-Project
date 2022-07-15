import { useCallback, useEffect } from "react";
import Line from "./Line";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    onSelect,
    onEnter,
    onDelete,
    disabledletters,
    correctletters,
    currentpos
  } = useContext(AppContext);

  const handlekeydown = useCallback((event) => {
    console.log(event.key);
    if (event.key.toUpperCase() === "ENTER") {
      onEnter();
    } else if (event.key.toUpperCase() === "BACKSPACE") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelect(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelect(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelect(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handlekeydown);

    return () => {
      document.removeEventListener("keydown", handlekeydown);
    };
  }, [handlekeydown]);

  return (
    <div className="keyboard" onKeyDown={handlekeydown}>
      <div className="keys1">
        {keys1.map((x) => {
          return (
            <Line
              Keyval={x}
              disabled={disabledletters.includes(x) ? x : undefined}
              correct={correctletters.includes(x) ? x : undefined}
            />
          );
        })}
      </div>

      <div className="keys2">
        {keys2.map((x) => {
          return (
            <Line
              Keyval={x}
              disabled={disabledletters.includes(x) ? x : undefined}
              correct={correctletters.includes(x) ? x : undefined}
            />
          );
        })}
      </div>
      <div className="keys3">
        <Line bigkey={"ENTER"}></Line>
        {keys3.map((x) => {
          return (
            <Line
              Keyval={x}
              disabled={disabledletters.includes(x) ? x : undefined}
              correct={correctletters.includes(x) ? x : undefined}
            />
          );
        })}
        <Line
          bigkey={
            <i class="fas fa-backspace" style={{ color: "aliceblue" }}></i>
          }
        ></Line>
      </div>
    </div>
  );
}
