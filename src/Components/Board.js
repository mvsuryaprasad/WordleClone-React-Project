import Choice from "./Choice";
import "../styles.css";
import { useState } from "react";

export default function Board() {
  return (
    <div className="main-board">
      <div className="row">
        <Choice letterpos={0} attemptpos={0}></Choice>
        <Choice letterpos={1} attemptpos={0}></Choice>
        <Choice letterpos={2} attemptpos={0}></Choice>
        <Choice letterpos={3} attemptpos={0}></Choice>
        <Choice letterpos={4} attemptpos={0}></Choice>
      </div>
      <div className="row">
        <Choice letterpos={0} attemptpos={1}></Choice>
        <Choice letterpos={1} attemptpos={1}></Choice>
        <Choice letterpos={2} attemptpos={1}></Choice>
        <Choice letterpos={3} attemptpos={1}></Choice>
        <Choice letterpos={4} attemptpos={1}></Choice>
      </div>
      <div className="row">
        <Choice letterpos={0} attemptpos={2}></Choice>
        <Choice letterpos={1} attemptpos={2}></Choice>
        <Choice letterpos={2} attemptpos={2}></Choice>
        <Choice letterpos={3} attemptpos={2}></Choice>
        <Choice letterpos={4} attemptpos={2}></Choice>
      </div>
      <div className="row">
        <Choice letterpos={0} attemptpos={3}></Choice>
        <Choice letterpos={1} attemptpos={3}></Choice>
        <Choice letterpos={2} attemptpos={3}></Choice>
        <Choice letterpos={3} attemptpos={3}></Choice>
        <Choice letterpos={4} attemptpos={3}></Choice>
      </div>
      <div className="row">
        <Choice letterpos={0} attemptpos={4}></Choice>
        <Choice letterpos={1} attemptpos={4}></Choice>
        <Choice letterpos={2} attemptpos={4}></Choice>
        <Choice letterpos={3} attemptpos={4}></Choice>
        <Choice letterpos={4} attemptpos={4}></Choice>
      </div>
      <div className="row">
        <Choice letterpos={0} attemptpos={5}></Choice>
        <Choice letterpos={1} attemptpos={5}></Choice>
        <Choice letterpos={2} attemptpos={5}></Choice>
        <Choice letterpos={3} attemptpos={5}></Choice>
        <Choice letterpos={4} attemptpos={5}></Choice>
      </div>
    </div>
  );
}
