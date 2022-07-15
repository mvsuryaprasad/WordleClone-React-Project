import { useContext } from "react";
import { AppContext } from "../App";
import "../styles.css";

export default function Line({ Keyval, bigkey, disabled, correct, almost }) {
  const { onSelect, onEnter, onDelete, currentpos } = useContext(AppContext);

  const selectkey = () => {
    if (bigkey === "ENTER") {
      onEnter();
    } else if ((Keyval === undefined) & (bigkey !== "ENTER")) {
      onDelete();
    } else {
      onSelect(Keyval);
    }
  };
  return (
    <div>
      {bigkey == null ? (
        <div
          className={
            disabled === undefined
              ? correct === undefined
                ? "keys"
                : "correct"
              : "disabled"
          }
          onClick={selectkey}
        >
          {Keyval}
        </div>
      ) : (
        <div
          className={bigkey.lenght > 0 ? "keys3-enter" : "keys3-delete"}
          onClick={selectkey}
        >
          {bigkey}
        </div>
      )}
    </div>
  );
}
