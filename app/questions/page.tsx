"use client";
import React, { useState } from "react";
import "./style.css";
import InputForm from "../components/InputForm";
import UndeText from "../components/UndeText";
import Actions from "../components/Actions";

const page = () => {
  const { input, setInput, questionsNum, handleSubmit, questions } = Actions();

  return (
    <div className="questionCard">
      <div className="hints">
        <h2>{questionsNum + 1}/ 5 კითხვა</h2>
        <p>{questions[questionsNum].riddle}</p>
        <p>Hint - {questions[questionsNum].hint}</p>
        <UndeText questions={questions[questionsNum].guessWord} />
      </div>
      <InputForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        questionsNum={questionsNum}
      />
    </div>
  );
};

export default page;
