import wordbank from "./Wordle-words";

export const DefaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
];

export const generateword = async () => {
  let wordset, wordArr;
  await fetch(wordbank)
    .then((response) => response.text())
    .then((result) => {
      const a = result.split("\n");
      wordArr = a.map((string) => string.slice(0, -1));
      wordset = new Set(wordArr);
    });
  // console.log(wordset);
  return { wordset, wordArr };
};
