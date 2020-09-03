import React, { useState } from "react";
import "./Answer.scss";

export default function Answer() {
  const [answer, setAnswer] = useState(false);

  const toggleAnswer = () => {
    setAnswer(!answer);
  };
  return (
    <>
      <div id="wrapper">
        <button id={answer ? "hide-yes" : "button"} onClick={toggleAnswer}>
          DO PEOPLE STILL SUCK?
        </button>
        <h3 id={answer ? "hide-yes" : "click"}>click^</h3>
        <div onClick={toggleAnswer} id={answer ? "answer-wrapper" : "hide-yes"}>
          <h1 id="just-yes">yes...</h1>
          <h1 id="yes-they-do">yes they do</h1>
        </div>
      </div>
    </>
  );
}
